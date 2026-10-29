/**
 * CI-only: rewrite workspace: and catalog: dependency specifiers to npm-compatible
 * ranges before `changeset publish`. Mutates package.json files in place.
 */
import {
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(scriptDir, "..");

type PackageJson = {
  name?: string;
  version?: string;
  private?: boolean;
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  optionalDependencies?: Record<string, string>;
};

type WorkspacePackage = {
  dir: string;
  name: string;
  version: string;
};

const DEP_FIELDS = [
  "dependencies",
  "peerDependencies",
  "optionalDependencies",
  "devDependencies",
] as const;

function listWorkspacePackageDirs(): string[] {
  const rootPkg = JSON.parse(
    readFileSync(path.join(workspaceRoot, "package.json"), "utf8"),
  ) as { workspaces?: string[] };
  const patterns = rootPkg.workspaces ?? [];
  const dirs: string[] = [];

  for (const pattern of patterns) {
    if (pattern.endsWith("/*")) {
      const parent = path.join(workspaceRoot, pattern.slice(0, -2));
      if (!existsSync(parent)) continue;
      for (const entry of readdirSync(parent)) {
        const dir = path.join(parent, entry);
        if (statSync(dir).isDirectory()) {
          dirs.push(dir);
        }
      }
      continue;
    }
    dirs.push(path.join(workspaceRoot, pattern));
  }

  return dirs.filter((dir) => existsSync(path.join(dir, "package.json")));
}

function loadWorkspacePackages(): Map<string, WorkspacePackage> {
  const map = new Map<string, WorkspacePackage>();
  for (const dir of listWorkspacePackageDirs()) {
    const pkg = JSON.parse(
      readFileSync(path.join(dir, "package.json"), "utf8"),
    ) as PackageJson;
    if (!pkg.name || !pkg.version) continue;
    map.set(pkg.name, { dir, name: pkg.name, version: pkg.version });
  }
  return map;
}

function loadCatalogs(): {
  catalog: Record<string, string>;
  catalogs: Record<string, Record<string, string>>;
} {
  const root = JSON.parse(
    readFileSync(path.join(workspaceRoot, "package.json"), "utf8"),
  ) as {
    catalog?: Record<string, string>;
    catalogs?: Record<string, Record<string, string>>;
  };
  return {
    catalog: root.catalog ?? {},
    catalogs: root.catalogs ?? {},
  };
}

function parseWorkspaceSpecifier(
  spec: string,
): { protocol: "workspace"; range: "*" | "^" | "~" } | null {
  const match = spec.match(/^workspace:(\*|\^|~)?$/);
  if (!match) return null;
  const range = (match[1] ?? "*") as "*" | "^" | "~";
  return { protocol: "workspace", range };
}

function workspaceVersionRange(
  version: string,
  range: "*" | "^" | "~",
): string {
  if (range === "~") return `~${version}`;
  return `^${version}`;
}

function parseCatalogSpecifier(
  spec: string,
): { protocol: "catalog"; ref: string } | null {
  if (!spec.startsWith("catalog:")) return null;
  return { protocol: "catalog", ref: spec.slice("catalog:".length) };
}

function resolveCatalogSpecifier(
  depName: string,
  ref: string,
  catalog: Record<string, string>,
  catalogs: Record<string, Record<string, string>>,
): string {
  if (ref === "") {
    const value = catalog[depName];
    if (!value) {
      throw new Error(
        `Missing catalog entry for "${depName}" (specifier catalog:)`,
      );
    }
    return value;
  }

  if (catalog[ref] !== undefined) {
    return catalog[ref];
  }

  const named = catalogs[ref];
  if (named?.[depName] !== undefined) {
    return named[depName];
  }

  throw new Error(
    `Unable to resolve catalog:${ref} for dependency "${depName}"`,
  );
}

function resolveDependencyValue(
  depName: string,
  spec: string,
  workspacePackages: Map<string, WorkspacePackage>,
  catalog: Record<string, string>,
  catalogs: Record<string, Record<string, string>>,
): string {
  const workspace = parseWorkspaceSpecifier(spec);
  if (workspace) {
    const pkg = workspacePackages.get(depName);
    if (!pkg) {
      throw new Error(
        `workspace: specifier for "${depName}" is not an internal workspace package`,
      );
    }
    return workspaceVersionRange(pkg.version, workspace.range);
  }

  const catalogSpec = parseCatalogSpecifier(spec);
  if (catalogSpec) {
    return resolveCatalogSpecifier(
      depName,
      catalogSpec.ref,
      catalog,
      catalogs,
    );
  }

  return spec;
}

function isPublishable(pkg: PackageJson): boolean {
  return pkg.private !== true && Boolean(pkg.name) && Boolean(pkg.version);
}

function rewritePackage(
  pkgPath: string,
  workspacePackages: Map<string, WorkspacePackage>,
  catalog: Record<string, string>,
  catalogs: Record<string, Record<string, string>>,
): boolean {
  const raw = readFileSync(pkgPath, "utf8");
  const pkg = JSON.parse(raw) as PackageJson;
  if (!isPublishable(pkg)) return false;

  let changed = false;

  for (const field of DEP_FIELDS) {
    const deps = pkg[field];
    if (!deps) continue;

    for (const [depName, spec] of Object.entries(deps)) {
      const workspace = parseWorkspaceSpecifier(spec);
      const catalogSpec = parseCatalogSpecifier(spec);
      if (!workspace && !catalogSpec) continue;

      if (workspace && !workspacePackages.has(depName)) continue;

      const next = resolveDependencyValue(
        depName,
        spec,
        workspacePackages,
        catalog,
        catalogs,
      );
      if (next !== spec) {
        deps[depName] = next;
        changed = true;
      }
    }
  }

  if (changed) {
    writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`, "utf8");
  }

  return changed;
}

function main(): void {
  const workspacePackages = loadWorkspacePackages();
  const { catalog, catalogs } = loadCatalogs();
  const updated: string[] = [];

  for (const pkg of workspacePackages.values()) {
    const pkgPath = path.join(pkg.dir, "package.json");
    if (rewritePackage(pkgPath, workspacePackages, catalog, catalogs)) {
      updated.push(pkg.name);
    }
  }

  if (updated.length > 0) {
    console.log(`Resolved specifiers in: ${updated.join(", ")}`);
  } else {
    console.log("No package.json files required specifier resolution.");
  }
}

main();
