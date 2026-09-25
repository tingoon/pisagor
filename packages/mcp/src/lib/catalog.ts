import { INSTALL_GUIDE } from "./resolve";
import type {
  CatalogComponent,
  ComponentEntry,
  ComponentsCatalog,
  ExampleEntry,
  Framework,
  RecipesCatalog,
  ToolConfig,
} from "./types";

function componentCatalogs(config: ToolConfig): ComponentsCatalog[] {
  return config.packages
    .map((pkg) => pkg.catalog)
    .filter(
      (catalog): catalog is ComponentsCatalog => catalog.kind === "components",
    );
}

function recipesCatalog(config: ToolConfig): RecipesCatalog | null {
  for (const pkg of config.packages) {
    if (pkg.catalog.kind === "recipes") {
      return pkg.catalog;
    }
  }
  return null;
}

function componentsForFramework(
  config: ToolConfig,
  framework: Framework,
): CatalogComponent[] {
  const byName = new Map<string, CatalogComponent>();
  for (const catalog of componentCatalogs(config)) {
    if (catalog.framework !== framework) {
      continue;
    }
    for (const component of catalog.components) {
      byName.set(component.name, component);
    }
  }
  return [...byName.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function getCatalogComponent(
  config: ToolConfig,
  framework: Framework,
  component: string,
): CatalogComponent {
  const entry = componentsForFramework(config, framework).find(
    (item) => item.name === component,
  );
  if (!entry) {
    throw new Error(
      `Unknown component "${component}" for framework "${framework}". Call list_components first.`,
    );
  }
  return entry;
}

function assertHasPackages(config: ToolConfig): void {
  if (config.packages.length === 0) {
    throw new Error(INSTALL_GUIDE);
  }
}

export function listComponents(
  config: ToolConfig,
  framework: Framework,
): ComponentEntry[] {
  assertHasPackages(config);
  return componentsForFramework(config, framework).map((entry) => ({
    hasStories: Boolean(entry.storiesContent),
    name: entry.name,
    package: entry.package,
  }));
}

export function listExamples(
  config: ToolConfig,
  framework: Framework,
  component: string,
): ExampleEntry[] {
  assertHasPackages(config);
  return getCatalogComponent(config, framework, component).examples;
}

export function getExample(
  config: ToolConfig,
  params: {
    framework: Framework;
    component: string;
    exampleId?: string;
  },
): {
  framework: Framework;
  component: string;
  package: string;
  path: string;
  examples: ExampleEntry[];
  content: string;
} {
  assertHasPackages(config);
  const entry = getCatalogComponent(config, params.framework, params.component);
  if (!entry.storiesContent || !entry.storiesPath) {
    throw new Error(
      `No stories file for "${params.component}" (${params.framework}).`,
    );
  }

  const examples = entry.examples;
  const exampleId = params.exampleId;

  if (exampleId) {
    const match = examples.find(
      (example) =>
        example.id === exampleId ||
        example.exportName.toLowerCase() === exampleId.toLowerCase(),
    );
    if (!match) {
      throw new Error(
        `Unknown example "${exampleId}" for "${params.component}". Call list_examples first.`,
      );
    }
  }

  return {
    component: params.component,
    content: entry.storiesContent,
    examples: exampleId
      ? examples.filter(
          (example) =>
            example.id === exampleId ||
            example.exportName.toLowerCase() === exampleId.toLowerCase(),
        )
      : examples,
    framework: params.framework,
    package: entry.package,
    path: entry.storiesPath,
  };
}

export function getComponentSource(
  config: ToolConfig,
  framework: Framework,
  component: string,
): {
  framework: Framework;
  component: string;
  package: string;
  files: { path: string; content: string }[];
} {
  assertHasPackages(config);
  const entry = getCatalogComponent(config, framework, component);
  if (entry.sources.length === 0) {
    throw new Error(`No source files found for "${component}" (${framework}).`);
  }

  return {
    component,
    files: entry.sources,
    framework,
    package: entry.package,
  };
}

export function getRecipe(
  config: ToolConfig,
  component: string,
): {
  component: string;
  path: string;
  content: string;
} {
  assertHasPackages(config);
  const catalog = recipesCatalog(config);
  if (!catalog) {
    throw new Error(
      `No @pisagor/recipes package found.\n\nInstall: bun add @pisagor/recipes\nThen restart MCP.`,
    );
  }
  const recipe = catalog.recipes[component];
  if (!recipe) {
    throw new Error(`No recipe for "${component}" in @pisagor/recipes.`);
  }
  return {
    component,
    content: recipe.content,
    path: recipe.path,
  };
}
