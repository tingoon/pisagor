/**
 * Shared helpers for `bun pm pack` tarball checks (release + CI verify).
 */
import { execSync } from "node:child_process";
import {
  existsSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
export const workspaceRoot = path.resolve(scriptDir, "..");

export type PackageJson = {
  name?: string;
  version?: string;
  private?: boolean;
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  optionalDependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
};

export const DEP_FIELDS = [
  "dependencies",
  "peerDependencies",
  "optionalDependencies",
  "devDependencies",
] as const;

export const LEAK_PATTERN = /^(workspace:|catalog:)/;

export function listWorkspacePackageDirs(): string[] {
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

export function readPackageJson(dir: string): PackageJson {
  return JSON.parse(
    readFileSync(path.join(dir, "package.json"), "utf8"),
  ) as PackageJson;
}

export function isPublishable(pkg: PackageJson): boolean {
  return pkg.private !== true && Boolean(pkg.name) && Boolean(pkg.version);
}

export function listPublishablePackages(): { dir: string; pkg: PackageJson }[] {
  return listWorkspacePackageDirs()
    .map((dir) => ({ dir, pkg: readPackageJson(dir) }))
    .filter(({ pkg }) => isPublishable(pkg));
}

export function findLeakedSpecifiers(manifest: PackageJson): string[] {
  const leaks: string[] = [];
  for (const field of DEP_FIELDS) {
    const deps = manifest[field];
    if (!deps) continue;
    for (const [depName, spec] of Object.entries(deps)) {
      if (LEAK_PATTERN.test(spec)) {
        leaks.push(`${field}.${depName}=${spec}`);
      }
    }
  }
  return leaks;
}

export function readManifestFromTarball(tgzPath: string): PackageJson {
  const jsonLine = execSync(`tar -xOf ${JSON.stringify(tgzPath)} package/package.json`, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
  return JSON.parse(jsonLine) as PackageJson;
}

/** Run `bun pm pack` in packageDir; returns path to created .tgz (and cleans old tgz in dir). */
export function bunPmPack(packageDir: string): string {
  for (const file of readdirSync(packageDir)) {
    if (file.endsWith(".tgz")) {
      rmSync(path.join(packageDir, file));
    }
  }

  execSync("bun pm pack", {
    cwd: packageDir,
    stdio: ["ignore", "pipe", "pipe"],
  });

  const created = readdirSync(packageDir)
    .filter((file) => file.endsWith(".tgz"))
    .map((file) => ({
      file,
      mtime: statSync(path.join(packageDir, file)).mtimeMs,
    }))
    .sort((a, b) => b.mtime - a.mtime);

  const latest = created[0]?.file;
  if (!latest) {
    throw new Error(`bun pm pack produced no tarball in ${packageDir}`);
  }
  return path.join(packageDir, latest);
}

export function packAndCheck(packageDir: string): {
  tgzPath: string;
  leaks: string[];
  manifest: PackageJson;
} {
  const tgzPath = bunPmPack(packageDir);
  const manifest = readManifestFromTarball(tgzPath);
  const leaks = findLeakedSpecifiers(manifest);
  return { tgzPath, leaks, manifest };
}

export function isVersionOnNpm(name: string, version: string): boolean {
  try {
    execSync(`npm view ${JSON.stringify(`${name}@${version}`)} version`, {
      stdio: ["ignore", "pipe", "pipe"],
    });
    return true;
  } catch {
    return false;
  }
}

/** Publish dependencies before dependents (internal @pisagor/* edges only). */
export function sortPublishOrder(
  packages: { dir: string; pkg: PackageJson }[],
): { dir: string; pkg: PackageJson }[] {
  const byName = new Map(packages.map((p) => [p.pkg.name as string, p]));
  const names = new Set(byName.keys());
  const edges = new Map<string, Set<string>>();

  for (const { pkg } of packages) {
    const name = pkg.name as string;
    const deps = new Set<string>();
    for (const field of DEP_FIELDS) {
      const block = pkg[field];
      if (!block) continue;
      for (const dep of Object.keys(block)) {
        if (names.has(dep)) deps.add(dep);
      }
    }
    edges.set(name, deps);
  }

  const sorted: string[] = [];
  const temp = new Set<string>();
  const perm = new Set<string>();

  function visit(n: string): void {
    if (perm.has(n)) return;
    if (temp.has(n)) return;
    temp.add(n);
    for (const dep of edges.get(n) ?? []) visit(dep);
    temp.delete(n);
    perm.add(n);
    sorted.push(n);
  }

  for (const name of names) visit(name);
  return sorted.map((name) => byName.get(name)!);
}
