import { existsSync, readdirSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type {
  ComponentsCatalog,
  Framework,
  RecipesCatalog,
  ResolvedPackage,
  ToolConfig,
} from "./types";

/** Known publishable packages MCP can load catalogs from. */
const KNOWN_PACKAGES = [
  { framework: "react" as const, name: "@pisagor/react" },
  { framework: "react" as const, name: "@pisagor/react-form" },
  { framework: "react" as const, name: "@pisagor/react-charts" },
  { framework: "vue" as const, name: "@pisagor/vue" },
  { framework: "vue" as const, name: "@pisagor/vue-form" },
  { framework: "vue" as const, name: "@pisagor/vue-charts" },
  { framework: "astro" as const, name: "@pisagor/astro" },
  { framework: null, name: "@pisagor/recipes" },
] as const;

const KNOWN_BY_NAME = new Map<string, (typeof KNOWN_PACKAGES)[number]>(
  KNOWN_PACKAGES.map((pkg) => [pkg.name, pkg]),
);

export const INSTALL_GUIDE = `No @pisagor UI packages found in this project.

Install what you need, then restart the MCP server:

  # React (recipes/tokens/utils come transitively)
  bun add @pisagor/react
  bun add react react-dom tailwindcss
  bun add @pisagor/react-form    # optional
  bun add @pisagor/react-charts  # optional

  # Vue
  bun add @pisagor/vue
  bun add vue tailwindcss
  bun add @pisagor/vue-form      # optional
  bun add @pisagor/vue-charts    # optional

  # Astro (recipes/tokens come transitively; utils is separate if you need cn())
  bun add @pisagor/astro
  bun add astro tailwindcss

MCP: bunx @pisagor/mcp
`;

function tryResolveRoot(specifier: string, from: string): string | null {
  try {
    const require = createRequire(from);
    const entry = require.resolve(specifier);
    let dir = path.dirname(entry);
    while (true) {
      const pkgJson = path.join(dir, "package.json");
      if (existsSync(pkgJson)) {
        const name = (JSON.parse(readFileSync(pkgJson, "utf8")) as { name?: string }).name;
        if (name === specifier) {
          return dir;
        }
      }
      const parent = path.dirname(dir);
      if (parent === dir) {
        break;
      }
      dir = parent;
    }
  } catch {
    // ignore
  }
  return null;
}

function readPackageName(dir: string): string | null {
  const pkgJson = path.join(dir, "package.json");
  if (!existsSync(pkgJson)) {
    return null;
  }
  try {
    return (JSON.parse(readFileSync(pkgJson, "utf8")) as { name?: string }).name ?? null;
  } catch {
    return null;
  }
}

function collectCandidateRoots(): string[] {
  const roots = new Set<string>();

  const bases = [path.join(process.cwd(), "package.json"), fileURLToPath(import.meta.url)];

  for (const known of KNOWN_PACKAGES) {
    for (const base of bases) {
      const root = tryResolveRoot(known.name, base);
      if (root) {
        roots.add(root);
      }
    }
  }

  // Installed @pisagor/* scopes (cwd + ancestors + mcp install location)
  const searchDirs = [process.cwd(), path.dirname(fileURLToPath(import.meta.url))];
  for (const start of searchDirs) {
    let dir = start;
    while (true) {
      const scope = path.join(dir, "node_modules", "@pisagor");
      if (existsSync(scope)) {
        for (const entry of readdirSync(scope)) {
          if (entry.startsWith(".")) {
            continue;
          }
          roots.add(path.join(scope, entry));
        }
      }
      const packagesDir = path.join(dir, "packages");
      if (existsSync(packagesDir)) {
        for (const entry of readdirSync(packagesDir)) {
          if (entry.startsWith(".")) {
            continue;
          }
          roots.add(path.join(packagesDir, entry));
        }
      }
      const parent = path.dirname(dir);
      if (parent === dir) {
        break;
      }
      dir = parent;
    }
  }

  return [...roots];
}

function loadCatalog(root: string): ComponentsCatalog | RecipesCatalog | null {
  const file = path.join(root, "catalog.gen.json");
  if (!existsSync(file)) {
    return null;
  }
  try {
    return JSON.parse(readFileSync(file, "utf8")) as ComponentsCatalog | RecipesCatalog;
  } catch {
    return null;
  }
}

export function discoverPackages(): ToolConfig {
  const byName = new Map<string, ResolvedPackage>();

  for (const root of collectCandidateRoots()) {
    const name = readPackageName(root);
    if (!name || !KNOWN_BY_NAME.has(name)) {
      continue;
    }
    if (byName.has(name)) {
      continue;
    }
    const catalog = loadCatalog(root);
    if (!catalog) {
      continue;
    }
    const known = KNOWN_BY_NAME.get(name);
    if (!known) {
      continue;
    }
    byName.set(name, {
      catalog,
      framework: known.framework,
      name,
      root,
    });
  }

  const packages = [...byName.values()].sort((a, b) => a.name.localeCompare(b.name));
  const frameworks = [
    ...new Set(
      packages.map((pkg) => pkg.framework).filter((value): value is Framework => value !== null),
    ),
  ].sort() as Framework[];

  return {
    frameworks,
    packages,
  };
}
