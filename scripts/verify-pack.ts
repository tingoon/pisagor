/**
 * Ensure publishable packages contain no workspace: or catalog: specifiers in the
 * packed manifest (uses npm pack + tarball inspection).
 */
import { execSync } from "node:child_process";
import {
  existsSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
} from "node:fs";
import { tmpdir } from "node:os";
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
  devDependencies?: Record<string, string>;
};

const DEP_FIELDS = [
  "dependencies",
  "peerDependencies",
  "optionalDependencies",
  "devDependencies",
] as const;

const LEAK_PATTERN = /^(workspace:|catalog:)/;

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

function isPublishable(pkg: PackageJson): boolean {
  return pkg.private !== true && Boolean(pkg.name) && Boolean(pkg.version);
}

function findLeakedSpecifiers(manifest: PackageJson): string[] {
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

function readPackedManifest(packageDir: string): PackageJson {
  const tmpDir = mkdtempSync(path.join(tmpdir(), "pisagor-pack-"));
  try {
    execSync(`npm pack --pack-destination ${JSON.stringify(tmpDir)}`, {
      cwd: packageDir,
      stdio: ["ignore", "pipe", "pipe"],
    });
    const tgz = readdirSync(tmpDir).find((file) => file.endsWith(".tgz"));
    if (!tgz) {
      throw new Error(`npm pack produced no tarball in ${packageDir}`);
    }
    const jsonLine = execSync(`tar -xOf ${JSON.stringify(path.join(tmpDir, tgz))} package/package.json`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    return JSON.parse(jsonLine) as PackageJson;
  } finally {
    rmSync(tmpDir, { recursive: true, force: true });
  }
}

function main(): void {
  const failures: { name: string; leaks: string[] }[] = [];

  for (const dir of listWorkspacePackageDirs()) {
    const pkgPath = path.join(dir, "package.json");
    const pkg = JSON.parse(readFileSync(pkgPath, "utf8")) as PackageJson;
    if (!isPublishable(pkg)) continue;

    const packed = readPackedManifest(dir);
    const leaks = findLeakedSpecifiers(packed);
    if (leaks.length > 0) {
      failures.push({ name: pkg.name ?? dir, leaks });
    }
  }

  if (failures.length > 0) {
    console.error("Unresolved workspace:/catalog: specifiers in packed manifests:");
    for (const failure of failures) {
      console.error(`  ${failure.name}:`);
      for (const leak of failure.leaks) {
        console.error(`    - ${leak}`);
      }
    }
    process.exit(1);
  }

  console.log("All publishable packages pass npm pack specifier verification.");
}

main();
