import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HEAVY = ["data-grid", "data-table", "phone-input", "rich-text-editor"] as const;
const STORY_EXPORT = /^export\s+const\s+([A-Z][A-Za-z0-9]*)\s*=\s*meta\.story\b/gm;

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
}

interface CatalogComponent {
  name: string;
  package: string;
  storiesPath: string | null;
  storiesContent: string | null;
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

function findStories(dir: string, name: string): string | null {
  const candidates = [path.join(dir, `${name}.stories.tsx`), path.join(dir, `${name}.stories.ts`)];
  return candidates.find((file) => existsSync(file)) ?? null;
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
    .filter(
      (file) => existsSync(file) && !file.endsWith(".stories.ts") && !file.endsWith(".stories.tsx"),
    );
}

function kebabCase(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

function parseExamples(storiesContent: string): CatalogExample[] {
  const examples: CatalogExample[] = [];
  for (const match of storiesContent.matchAll(STORY_EXPORT)) {
    const exportName = match[1];
    if (!exportName) {
      continue;
    }
    examples.push({ exportName, id: kebabCase(exportName) });
  }
  return examples;
}

function buildComponent(dir: string, name: string, packageName: string): CatalogComponent {
  const storiesAbs = findStories(dir, name);
  const storiesContent = storiesAbs ? readFileSync(storiesAbs, "utf8") : null;
  const sourcePaths = findSources(dir, name);

  return {
    examples: storiesContent ? parseExamples(storiesContent) : [],
    name,
    package: packageName,
    sources: sourcePaths.map((file) => ({
      content: readFileSync(file, "utf8"),
      path: path.relative(workspaceRoot, file),
    })),
    storiesContent,
    storiesPath: storiesAbs ? path.relative(workspaceRoot, storiesAbs) : null,
  };
}

function buildComponentsCatalog(target: ScanTarget): ComponentsCatalog {
  const byName = new Map<string, CatalogComponent>();

  for (const name of listDirs(target.componentsRoot)) {
    byName.set(name, buildComponent(path.join(target.componentsRoot, name), name, target.package));
  }

  for (const dir of target.extraDirs ?? []) {
    const name = path.basename(dir);
    byName.set(name, buildComponent(dir, name, target.package));
  }

  if (target.chartRoot) {
    const chartDir = target.componentsRoot;
    if (
      existsSync(path.join(chartDir, "chart.tsx")) ||
      existsSync(path.join(chartDir, "chart.ts"))
    ) {
      byName.set("chart", buildComponent(chartDir, "chart", target.package));
    }
  }

  return {
    components: [...byName.values()].sort((a, b) => a.name.localeCompare(b.name)),
    framework: target.framework,
    kind: "components",
    package: target.package,
  };
}

function buildRecipesCatalog(): RecipesCatalog {
  const recipesRoot = path.join(workspaceRoot, "packages/recipes/src/ui");
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
      extraDirs: HEAVY.map((name) => path.join(base, "src", name)).filter((dir) => existsSync(dir)),
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

function writeCatalog(packageDir: string, catalog: ComponentsCatalog | RecipesCatalog) {
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
    if (!existsSync(target.componentsRoot) && !(target.extraDirs?.length ?? 0)) {
      console.warn(`skip ${target.package}: missing sources`);
      continue;
    }
    writeCatalog(target.packageDir, buildComponentsCatalog(target));
  }

  writeCatalog(path.join(workspaceRoot, "packages/recipes"), buildRecipesCatalog());
}

main();
