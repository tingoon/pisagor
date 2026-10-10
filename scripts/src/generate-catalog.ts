import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HEAVY = [
  "data-grid",
  "data-table",
  "phone-input",
  "rich-text-editor",
] as const;

const EXAMPLE_EXTENSIONS = new Set([
  ".astro",
  ".svelte",
  ".ts",
  ".tsx",
  ".vue",
]);

const EXAMPLE_SKIP = new Set([
  "helpers.ts",
  "helpers.tsx",
  "index.ts",
  "sources.ts",
]);

const EXPORT_NAME =
  /^export\s+(?:async\s+)?(?:function|const)\s+([A-Z][A-Za-z0-9]*)\b/m;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(scriptDir, "../..");

type Framework = "react" | "vue" | "astro" | "solid" | "svelte";

interface CatalogFile {
  path: string;
  content: string;
}

interface CatalogExample {
  id: string;
  exportName: string;
  path: string;
  content: string;
}

interface CatalogComponent {
  name: string;
  package: string;
  examples: CatalogExample[];
  sources: CatalogFile[];
}

interface ComponentsCatalog {
  kind: "components";
  package: string;
  framework: Framework;
  components: CatalogComponent[];
}

interface RecipesCatalog {
  kind: "recipes";
  package: string;
  recipes: Record<string, CatalogFile>;
}

interface ScanTarget {
  package: string;
  packageDir: string;
  framework: Framework;
  componentsRoot: string;
  extraDirs?: string[];
}

const COMPONENT_FILE_EXTENSIONS = [".tsx", ".ts", ".astro", ".svelte"];

function listDirs(dir: string): string[] {
  if (!existsSync(dir)) {
    return [];
  }
  return readdirSync(dir)
    .filter((name) => {
      if (name.startsWith(".") || name === "index.ts" || name === "internal") {
        return false;
      }
      try {
        return statSync(path.join(dir, name)).isDirectory();
      } catch {
        return false;
      }
    })
    .sort();
}

/** Flat single-file components (`src/components/<name>.tsx`) next to foldered ones. */
function listFlatFiles(dir: string): Map<string, string> {
  const files = new Map<string, string>();
  if (!existsSync(dir)) {
    return files;
  }
  for (const file of readdirSync(dir).sort()) {
    const ext = path.extname(file);
    if (!COMPONENT_FILE_EXTENSIONS.includes(ext)) {
      continue;
    }
    const name = path.basename(file, ext);
    if (name === "index" || name.includes(".")) {
      continue;
    }
    const abs = path.join(dir, file);
    if (statSync(abs).isFile() && !files.has(name)) {
      files.set(name, abs);
    }
  }
  return files;
}

const SOURCE_FILE_EXTENSIONS = new Set([...COMPONENT_FILE_EXTENSIONS, ".vue"]);

const SOURCE_SKIP = /\.(?:test|spec|stories)\.[^.]+$|\.d\.ts$/;

/**
 * Every source file of a foldered component (`<name>.*` first, then
 * `<name>.context.*`, the remaining part files, and `index.*` last) so
 * compounds split into one file per part (Svelte, Astro) are fully listed.
 */
function findSources(dir: string, name: string): string[] {
  const rank = (file: string) => {
    const base = file.slice(0, file.length - path.extname(file).length);
    if (base === name) {
      return 0;
    }
    if (base === `${name}.context`) {
      return 1;
    }
    if (base === "index") {
      return 3;
    }
    return 2;
  };

  return readdirSync(dir)
    .filter(
      (file) =>
        SOURCE_FILE_EXTENSIONS.has(path.extname(file)) &&
        !SOURCE_SKIP.test(file) &&
        statSync(path.join(dir, file)).isFile(),
    )
    .sort((a, b) => rank(a) - rank(b) || a.localeCompare(b))
    .map((file) => path.join(dir, file));
}

function findExamplesRoot(packageDir: string): string | null {
  const examples = path.join(packageDir, "examples");
  if (existsSync(examples) && statSync(examples).isDirectory()) {
    return examples;
  }
  return null;
}

function toExportName(id: string): string {
  return id
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function resolveExampleDir(
  examplesRoot: string | null,
  componentName: string,
): string | null {
  if (!examplesRoot) {
    return null;
  }
  const nested = path.join(examplesRoot, componentName);
  if (existsSync(nested) && statSync(nested).isDirectory()) {
    return nested;
  }
  return null;
}

function loadExamples(
  examplesRoot: string | null,
  componentName: string,
  packageDir: string,
): CatalogExample[] {
  const dir = resolveExampleDir(examplesRoot, componentName);
  if (!dir) {
    return [];
  }

  const examples: CatalogExample[] = [];
  for (const file of readdirSync(dir).sort()) {
    if (EXAMPLE_SKIP.has(file) || file.startsWith(".")) {
      continue;
    }
    const ext = path.extname(file);
    if (!EXAMPLE_EXTENSIONS.has(ext)) {
      continue;
    }

    const abs = path.join(dir, file);
    if (!statSync(abs).isFile()) {
      continue;
    }

    const id = path.basename(file, ext);
    const content = readFileSync(abs, "utf8");
    const matched = content.match(EXPORT_NAME)?.[1];
    examples.push({
      content,
      exportName: matched ?? toExportName(id),
      id,
      path: path.relative(packageDir, abs),
    });
  }
  return examples;
}

function buildComponent(
  sourcePaths: string[],
  name: string,
  packageName: string,
  packageDir: string,
  examplesRoot: string | null,
): CatalogComponent {
  return {
    examples: loadExamples(examplesRoot, name, packageDir),
    name,
    package: packageName,
    sources: sourcePaths.map((file) => ({
      content: readFileSync(file, "utf8"),
      path: path.relative(workspaceRoot, file),
    })),
  };
}

function buildComponentsCatalog(target: ScanTarget): ComponentsCatalog {
  const byName = new Map<string, CatalogComponent>();
  const examplesRoot = findExamplesRoot(target.packageDir);

  for (const name of listDirs(target.componentsRoot)) {
    byName.set(
      name,
      buildComponent(
        findSources(path.join(target.componentsRoot, name), name),
        name,
        target.package,
        target.packageDir,
        examplesRoot,
      ),
    );
  }

  for (const [name, file] of listFlatFiles(target.componentsRoot)) {
    if (byName.has(name)) {
      continue;
    }
    byName.set(
      name,
      buildComponent(
        [file],
        name,
        target.package,
        target.packageDir,
        examplesRoot,
      ),
    );
  }

  for (const dir of target.extraDirs ?? []) {
    const name = path.basename(dir);
    byName.set(
      name,
      buildComponent(
        findSources(dir, name),
        name,
        target.package,
        target.packageDir,
        examplesRoot,
      ),
    );
  }

  return {
    components: [...byName.values()].sort((a, b) =>
      a.name.localeCompare(b.name),
    ),
    framework: target.framework,
    kind: "components",
    package: target.package,
  };
}

function buildRecipesCatalog(): RecipesCatalog {
  // `@pisagor/recipes` re-exports `@pisagor/presets/pisagor`; the recipe
  // sources live in the presets package contracts.
  const recipesRoot = path.join(
    workspaceRoot,
    "packages/presets/src/contracts",
  );
  const recipes: Record<string, CatalogFile> = {};
  if (existsSync(recipesRoot)) {
    for (const file of readdirSync(recipesRoot)) {
      if (!file.endsWith(".ts") || file === "index.ts") {
        continue;
      }
      const name = file.replace(/\.ts$/, "");
      const abs = path.join(recipesRoot, file);
      recipes[name] = {
        content: readFileSync(abs, "utf8"),
        path: path.relative(workspaceRoot, abs),
      };
    }
  }
  return {
    kind: "recipes",
    package: "@pisagor/recipes",
    recipes,
  };
}

function frameworkTargets(
  framework: "react" | "vue" | "solid" | "svelte",
): ScanTarget[] {
  const pkg = framework;
  const base = path.join(workspaceRoot, `packages/${pkg}`);
  const formDir = path.join(workspaceRoot, `packages/${pkg}-form`);

  const targets: ScanTarget[] = [
    {
      componentsRoot: path.join(base, "src/components"),
      extraDirs: HEAVY.map((name) => path.join(base, "src", name)).filter(
        (dir) => existsSync(dir),
      ),
      framework,
      package: `@pisagor/${pkg}`,
      packageDir: base,
    },
  ];

  const formFields = path.join(formDir, "src/fields");
  if (existsSync(formFields)) {
    targets.push({
      componentsRoot: formFields,
      framework,
      package: `@pisagor/${pkg}-form`,
      packageDir: formDir,
    });
  }

  return targets;
}

function packageSlug(packageName: string): string {
  return packageName.replace(/^@pisagor\//, "");
}

function writeCatalog(catalog: ComponentsCatalog | RecipesCatalog) {
  const mcpDir = path.join(workspaceRoot, "packages/mcp");
  mkdirSync(mcpDir, { recursive: true });
  const out = path.join(mcpDir, `${packageSlug(catalog.package)}.gen.json`);
  writeFileSync(out, `${JSON.stringify(catalog)}\n`);
  const count =
    catalog.kind === "components"
      ? `${catalog.components.length} components`
      : `${Object.keys(catalog.recipes).length} recipes`;
  console.log(`wrote ${path.relative(workspaceRoot, out)} (${count})`);
}

function main() {
  const targets: ScanTarget[] = [
    ...frameworkTargets("react"),
    ...frameworkTargets("vue"),
    ...frameworkTargets("solid"),
    ...frameworkTargets("svelte"),
    {
      componentsRoot: path.join(workspaceRoot, "packages/astro/src/components"),
      framework: "astro",
      package: "@pisagor/astro",
      packageDir: path.join(workspaceRoot, "packages/astro"),
    },
  ];

  for (const target of targets) {
    if (
      !existsSync(target.componentsRoot) &&
      !(target.extraDirs?.length ?? 0)
    ) {
      console.warn(`skip ${target.package}: missing sources`);
      continue;
    }
    writeCatalog(buildComponentsCatalog(target));
  }

  writeCatalog(buildRecipesCatalog());
}

main();
