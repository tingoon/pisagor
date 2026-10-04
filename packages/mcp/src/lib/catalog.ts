import { INSTALL_GUIDE } from "./resolve";
import type {
  CatalogComponent,
  CatalogExample,
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

function matchExample(
  examples: CatalogExample[],
  exampleId: string,
): CatalogExample | undefined {
  return examples.find(
    (example) =>
      example.id === exampleId ||
      example.exportName.toLowerCase() === exampleId.toLowerCase(),
  );
}

export function listComponents(
  config: ToolConfig,
  framework: Framework,
): ComponentEntry[] {
  assertHasPackages(config);
  return componentsForFramework(config, framework).map((entry) => ({
    hasExamples: entry.examples.length > 0,
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
  return getCatalogComponent(config, framework, component).examples.map(
    (example) => ({
      exportName: example.exportName,
      id: example.id,
    }),
  );
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
  examples: ExampleEntry[];
  path: string;
  content: string;
} {
  assertHasPackages(config);
  const entry = getCatalogComponent(config, params.framework, params.component);
  if (entry.examples.length === 0) {
    throw new Error(
      `No examples for "${params.component}" (${params.framework}). Expected examples/${params.component}/.`,
    );
  }

  const exampleId = params.exampleId;
  if (exampleId) {
    const match = matchExample(entry.examples, exampleId);
    if (!match) {
      throw new Error(
        `Unknown example "${exampleId}" for "${params.component}". Call list_examples first.`,
      );
    }
    return {
      component: params.component,
      content: match.content,
      examples: [{ exportName: match.exportName, id: match.id }],
      framework: params.framework,
      package: entry.package,
      path: match.path,
    };
  }

  const [first] = entry.examples;
  const dir = first
    ? first.path.includes("/")
      ? first.path.slice(0, first.path.lastIndexOf("/"))
      : "."
    : `examples/${params.component}`;
  return {
    component: params.component,
    content: entry.examples
      .map((example) => `// ${example.id}\n${example.content}`)
      .join("\n\n"),
    examples: entry.examples.map((example) => ({
      exportName: example.exportName,
      id: example.id,
    })),
    framework: params.framework,
    package: entry.package,
    path: dir,
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
