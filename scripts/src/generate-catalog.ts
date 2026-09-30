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

const EXAMPLE_SKIP = new Set(["helpers.ts", "helpers.tsx", "index.ts"]);

const EXPORT_NAME =
  /^export\s+(?:async\s+)?(?:function|const)\s+([A-Z][A-Za-z0-9]*)\b/m;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(scriptDir, "../..");

type Framework = "react" | "vue" | "astro";

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
  chartRoot?: boolean;
}

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

function findSources(dir: string, name: string): string[] {
  return [
    `${name}.tsx`,
    `${name}.ts`,
    `${name}.astro`,
    `${name}.context.tsx`,
    `${name}.context.ts`,
    "index.ts",
  ]
    .map((file) => path.join(dir, file))
    .filter((file) => existsSync(file));
}

function findExamplesRoot(packageDir: string): string | null {
  const skillsDir = path.join(packageDir, "skills");
  if (!existsSync(skillsDir)) {
    return null;
  }
  for (const entry of readdirSync(skillsDir)) {
    if (entry.startsWith(".")) {
      continue;
    }
    const examples = path.join(skillsDir, entry, "assets", "examples");
    if (existsSync(examples) && statSync(examples).isDirectory()) {
      return examples;
    }
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
  chartRoot?: boolean,
): string | null {
  if (!examplesRoot) {
    return null;
  }
  const nested = path.join(examplesRoot, componentName);
  if (existsSync(nested) && statSync(nested).isDirectory()) {
    return nested;
  }
  // Charts ship examples at assets/examples/* (no <component>/ folder).
  if (chartRoot || componentName === "chart") {
    return examplesRoot;
  }
  return null;
}

function loadExamples(
  examplesRoot: string | null,
  componentName: string,
  packageDir: string,
  chartRoot?: boolean,
): CatalogExample[] {
  const dir = resolveExampleDir(examplesRoot, componentName, chartRoot);
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
    // Flat chart root: only example files, not nested component dirs' indexes.
    if (chartRoot && statSync(path.join(dir, file)).isDirectory()) {
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
  dir: string,
  name: string,
  packageName: string,
  packageDir: string,
  examplesRoot: string | null,
  chartRoot?: boolean,
): CatalogComponent {
  const sourcePaths = findSources(dir, name);

  return {
    examples: loadExamples(examplesRoot, name, packageDir, chartRoot),
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
        path.join(target.componentsRoot, name),
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
        dir,
        name,
        target.package,
        target.packageDir,
        examplesRoot,
      ),
    );
  }

  if (target.chartRoot) {
    const chartDir = target.componentsRoot;
    if (
      existsSync(path.join(chartDir, "chart.tsx")) ||
      existsSync(path.join(chartDir, "chart.ts"))
    ) {
      byName.set(
        "chart",
        buildComponent(
          chartDir,
          "chart",
          target.package,
          target.packageDir,
          examplesRoot,
          true,
        ),
      );
    }
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
  const recipesRoot = path.join(workspaceRoot, "packages/recipes/src");
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

function frameworkTargets(framework: "react" | "vue"): ScanTarget[] {
  const pkg = framework;
  const base = path.join(workspaceRoot, `packages/${pkg}`);
  const chartsDir = path.join(workspaceRoot, `packages/${pkg}-charts`);
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

  const chartsSrc = path.join(chartsDir, "src");
  if (existsSync(chartsSrc)) {
    targets.push({
      chartRoot: true,
      componentsRoot: chartsSrc,
      framework,
      package: `@pisagor/${pkg}-charts`,
      packageDir: chartsDir,
    });
  }

  return targets;
}

function writeCatalog(
  packageDir: string,
  catalog: ComponentsCatalog | RecipesCatalog,
) {
  mkdirSync(packageDir, { recursive: true });
  const out = path.join(packageDir, "catalog.gen.json");
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
    writeCatalog(target.packageDir, buildComponentsCatalog(target));
  }

  writeCatalog(
    path.join(workspaceRoot, "packages/recipes"),
    buildRecipesCatalog(),
  );
}

main();
