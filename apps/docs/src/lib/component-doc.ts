import type { ComponentDocs } from "./component-docs-types";
import type { Framework } from "./nav";
import type { PropRow } from "./props/types";

/** Astro markdown module from docs content. */
export type SkillMdModule = {
  // Astro component factory (not a framework UI component).
  Content: (props?: Record<string, unknown>) => unknown;
  frontmatter: ComponentDocs;
  getHeadings: () => { depth: number; slug: string; text: string }[];
};

/**
 * Example module for docs SSR.
 * Non-Astro pages load `sources.ts` (raw code only). Astro loads `index.ts`
 * (sources + live components for SSR previews).
 */
export type ExampleModule = {
  sources: Record<string, string>;
  imports?: string;
} & Record<string, unknown>;

export type ComponentDocKind = "component" | "form";

/** Doc panes. */
export type SkillPaneId = "design" | "develop";

export type SkillPanes = Partial<Record<SkillPaneId, SkillMdModule>>;

const DEFAULT_PACKAGE: Record<Framework, string> = {
  astro: "@pisagor/astro",
  react: "@pisagor/react",
  solid: "@pisagor/solid",
  svelte: "@pisagor/svelte",
  vue: "@pisagor/vue",
};

const FORM_PACKAGE: Partial<Record<Framework, string>> = {
  react: "@pisagor/react-form",
  solid: "@pisagor/solid-form",
  svelte: "@pisagor/svelte-form",
  vue: "@pisagor/vue-form",
};

export const PREVIEW_LANGUAGE: Record<Framework, string> = {
  astro: "astro",
  react: "tsx",
  solid: "tsx",
  svelte: "svelte",
  vue: "vue",
};

/**
 * When the docs page id does not match `props/<id>.gen.ts` export name
 * (autocomplete → combobox, form fields → underlying control).
 */
const PROPS_FILE_ALIASES: Record<string, string> = {
  autocomplete: "combobox",
  "autocomplete-field": "combobox",
  "checkbox-field": "checkbox",
  "date-field": "date-picker",
  "file-field": "file-input",
  "number-field": "number-input",
  "otp-field": "input-otp",
  "password-field": "password-input",
  "phone-field": "phone-input",
  "radio-group-field": "radio-group",
  "rich-text-editor-field": "rich-text-editor",
  "select-field": "select",
  "slider-field": "slider",
  "switch-field": "switch",
  "tags-input-field": "tags-input",
  "text-field": "input",
  "textarea-field": "textarea",
};

type PaneModules = Record<string, () => Promise<SkillMdModule>>;

/**
 * Per-framework docs — `content/<fw>/{components,forms}/<id>/{metadata,design,develop}.md`.
 * Every framework owns its copy so each URL tree only shows that library's content.
 */
type FrameworkPaneGlobs = {
  design: PaneModules;
  develop: PaneModules;
  metadata: PaneModules;
};

const componentPanesByFramework: Record<Framework, FrameworkPaneGlobs> = {
  astro: {
    design: import.meta.glob<SkillMdModule>(
      "../content/astro/components/*/design.md",
    ),
    develop: import.meta.glob<SkillMdModule>(
      "../content/astro/components/*/develop.md",
    ),
    metadata: import.meta.glob<SkillMdModule>(
      "../content/astro/components/*/metadata.md",
    ),
  },
  react: {
    design: import.meta.glob<SkillMdModule>(
      "../content/react/components/*/design.md",
    ),
    develop: import.meta.glob<SkillMdModule>(
      "../content/react/components/*/develop.md",
    ),
    metadata: import.meta.glob<SkillMdModule>(
      "../content/react/components/*/metadata.md",
    ),
  },
  solid: {
    design: import.meta.glob<SkillMdModule>(
      "../content/solid/components/*/design.md",
    ),
    develop: import.meta.glob<SkillMdModule>(
      "../content/solid/components/*/develop.md",
    ),
    metadata: import.meta.glob<SkillMdModule>(
      "../content/solid/components/*/metadata.md",
    ),
  },
  svelte: {
    design: import.meta.glob<SkillMdModule>(
      "../content/svelte/components/*/design.md",
    ),
    develop: import.meta.glob<SkillMdModule>(
      "../content/svelte/components/*/develop.md",
    ),
    metadata: import.meta.glob<SkillMdModule>(
      "../content/svelte/components/*/metadata.md",
    ),
  },
  vue: {
    design: import.meta.glob<SkillMdModule>(
      "../content/vue/components/*/design.md",
    ),
    develop: import.meta.glob<SkillMdModule>(
      "../content/vue/components/*/develop.md",
    ),
    metadata: import.meta.glob<SkillMdModule>(
      "../content/vue/components/*/metadata.md",
    ),
  },
};

const formPanesByFramework: Partial<Record<Framework, FrameworkPaneGlobs>> = {
  react: {
    design: import.meta.glob<SkillMdModule>(
      "../content/react/forms/*/design.md",
    ),
    develop: import.meta.glob<SkillMdModule>(
      "../content/react/forms/*/develop.md",
    ),
    metadata: import.meta.glob<SkillMdModule>(
      "../content/react/forms/*/metadata.md",
    ),
  },
  solid: {
    design: import.meta.glob<SkillMdModule>(
      "../content/solid/forms/*/design.md",
    ),
    develop: import.meta.glob<SkillMdModule>(
      "../content/solid/forms/*/develop.md",
    ),
    metadata: import.meta.glob<SkillMdModule>(
      "../content/solid/forms/*/metadata.md",
    ),
  },
  svelte: {
    design: import.meta.glob<SkillMdModule>(
      "../content/svelte/forms/*/design.md",
    ),
    develop: import.meta.glob<SkillMdModule>(
      "../content/svelte/forms/*/develop.md",
    ),
    metadata: import.meta.glob<SkillMdModule>(
      "../content/svelte/forms/*/metadata.md",
    ),
  },
  vue: {
    design: import.meta.glob<SkillMdModule>("../content/vue/forms/*/design.md"),
    develop: import.meta.glob<SkillMdModule>(
      "../content/vue/forms/*/develop.md",
    ),
    metadata: import.meta.glob<SkillMdModule>(
      "../content/vue/forms/*/metadata.md",
    ),
  },
};

// Lazy example modules — one id per page.
// Astro SSR previews need live components (`index.ts`); other frameworks only
// need code sources (`sources.ts`) — client islands load `index.ts` separately.
type ExampleLoaderMap = Record<string, () => Promise<ExampleModule>>;

const examplesByFramework: Record<Framework, ExampleLoaderMap> = {
  astro: import.meta.glob<ExampleModule>(
    "../../../../packages/astro/examples/*/index.ts",
  ),
  react: import.meta.glob<ExampleModule>(
    "../../../../packages/react/examples/*/sources.ts",
  ),
  solid: import.meta.glob<ExampleModule>(
    "../../../../packages/solid/examples/*/sources.ts",
  ),
  svelte: import.meta.glob<ExampleModule>(
    "../../../../packages/svelte/examples/*/sources.ts",
  ),
  vue: import.meta.glob<ExampleModule>(
    "../../../../packages/vue/examples/*/sources.ts",
  ),
};

const formExamplesByFramework: Partial<Record<Framework, ExampleLoaderMap>> = {
  react: import.meta.glob<ExampleModule>(
    "../../../../packages/react-form/examples/*/sources.ts",
  ),
  solid: import.meta.glob<ExampleModule>(
    "../../../../packages/solid-form/examples/*/sources.ts",
  ),
  svelte: import.meta.glob<ExampleModule>(
    "../../../../packages/svelte-form/examples/*/sources.ts",
  ),
  vue: import.meta.glob<ExampleModule>(
    "../../../../packages/vue-form/examples/*/sources.ts",
  ),
};
const propsModules = import.meta.glob<Record<string, unknown>>(
  "./props/*.gen.ts",
  {
    eager: true,
  },
);

function toCamelCase(id: string): string {
  return id.replace(/-([a-z])/g, (_, char: string) => char.toUpperCase());
}

type PaneFile = "design" | "develop" | "metadata";

function contentArea(kind: ComponentDocKind): "components" | "forms" {
  return kind === "form" ? "forms" : "components";
}

/** Develop doc `…/content/<fw>/{components,forms}/<id>/develop.md`. */
function idFromDevelopPath(path: string): string | undefined {
  return /\/content\/[^/]+\/(?:components|forms)\/([^/]+)\/develop\.md$/.exec(
    path,
  )?.[1];
}

function panePathSuffix(
  framework: Framework,
  id: string,
  kind: ComponentDocKind,
  pane: PaneFile,
): string {
  return `/content/${framework}/${contentArea(kind)}/${id}/${pane}.md`;
}

function findGlobKey(
  modules: Record<string, unknown>,
  suffix: string,
): string | undefined {
  return Object.keys(modules).find((path) => path.endsWith(suffix));
}

function paneModules(
  framework: Framework,
  kind: ComponentDocKind,
  pane: PaneFile,
): PaneModules | undefined {
  const globs =
    kind === "form"
      ? formPanesByFramework[framework]
      : componentPanesByFramework[framework];
  return globs?.[pane];
}

function paneLoader(
  framework: Framework,
  id: string,
  kind: ComponentDocKind,
  pane: PaneFile,
): (() => Promise<SkillMdModule>) | undefined {
  const modules = paneModules(framework, kind, pane);
  if (!modules) return undefined;
  const key = findGlobKey(modules, panePathSuffix(framework, id, kind, pane));
  return key ? modules[key] : undefined;
}

async function loadPane(
  loader: () => Promise<SkillMdModule>,
): Promise<SkillMdModule> {
  const mod = await loader();
  return {
    Content: mod.Content,
    frontmatter: mod.frontmatter as ComponentDocs,
    getHeadings: mod.getHeadings,
  };
}

/** Component ids from `content/<fw>/{components,forms}/<id>/develop.md`. */
export function listComponentIds(
  framework: Framework,
  kind: ComponentDocKind = "component",
): string[] {
  const modules = paneModules(framework, kind, "develop");
  if (!modules) return [];
  const ids = new Set(
    Object.keys(modules)
      .map(idFromDevelopPath)
      .filter((id): id is string => Boolean(id)),
  );
  return [...ids].sort();
}
export function defaultPackageName(
  framework: Framework,
  kind: ComponentDocKind = "component",
): string {
  if (kind === "form") {
    return FORM_PACKAGE[framework] ?? DEFAULT_PACKAGE[framework];
  }
  return DEFAULT_PACKAGE[framework];
}

export async function loadSkillMd(
  framework: Framework,
  id: string,
  kind: ComponentDocKind = "component",
): Promise<SkillMdModule> {
  if (!hasDevelopDoc(framework, id, kind)) {
    throw new Error(`Missing ${framework} develop docs for "${id}" (${kind})`);
  }
  const loader = paneLoader(framework, id, kind, "metadata");
  if (!loader) {
    throw new Error(`Missing ${framework} metadata for "${id}" (${kind})`);
  }
  return loadPane(loader);
}

/** True when `content/<fw>/{components,forms}/<id>/develop.md` exists. */
function hasDevelopDoc(
  framework: Framework,
  id: string,
  kind: ComponentDocKind = "component",
): boolean {
  return Boolean(paneLoader(framework, id, kind, "develop"));
}

/** Load develop + design panes for one framework. */
export async function loadSkillPanes(
  framework: Framework,
  id: string,
  kind: ComponentDocKind = "component",
): Promise<SkillPanes> {
  if (!hasDevelopDoc(framework, id, kind)) return {};

  const panes: SkillPanes = {};
  for (const pane of ["develop", "design"] as const) {
    const loader = paneLoader(framework, id, kind, pane);
    if (loader) panes[pane] = await loadPane(loader);
  }
  return panes;
}
const DOC_TAB_LABELS: Record<SkillPaneId, string> = {
  design: "Design",
  develop: "Develop",
};

export type ComponentDocTab = {
  id: SkillPaneId;
  label: string;
};

/** Tabs available for a component (order: Develop → Design). */
export async function listComponentDocTabs(
  framework: Framework,
  id: string,
  kind: ComponentDocKind = "component",
): Promise<ComponentDocTab[]> {
  const panes = await loadSkillPanes(framework, id, kind);
  const tabs: ComponentDocTab[] = [
    { id: "develop", label: DOC_TAB_LABELS.develop },
  ];
  if (panes.design) {
    tabs.push({ id: "design", label: DOC_TAB_LABELS.design });
  }
  return tabs;
}

/** Static paths for `/…/components|forms/<id>/<tab>`. */
export async function listComponentTabStaticPaths(
  framework: Framework,
  kind: ComponentDocKind = "component",
): Promise<{ params: { id: string; tab: SkillPaneId } }[]> {
  const ids = listComponentIds(framework, kind);
  const paths: { params: { id: string; tab: SkillPaneId } }[] = [];
  for (const id of ids) {
    const tabs = await listComponentDocTabs(framework, id, kind);
    for (const tab of tabs) {
      paths.push({ params: { id, tab: tab.id } });
    }
  }
  return paths;
}

export async function loadExamples(
  framework: Framework,
  id: string,
  kind: ComponentDocKind = "component",
): Promise<ExampleModule> {
  const modules =
    kind === "form"
      ? formExamplesByFramework[framework]
      : examplesByFramework[framework];
  if (!modules) {
    throw new Error(`No examples glob for ${framework}/${kind}`);
  }
  const file = framework === "astro" ? "index.ts" : "sources.ts";
  const key = findGlobKey(modules, `/examples/${id}/${file}`);
  const loader = key ? modules[key] : undefined;
  const mod = loader ? await loader() : undefined;
  if (!mod?.sources) {
    throw new Error(`Missing ${framework} examples for "${id}"`);
  }
  return mod;
}

/** Props rows when a generated module exists; otherwise `null`. */
export function loadProps(id: string): PropRow[] | null {
  const propsId = PROPS_FILE_ALIASES[id] ?? id;
  const key = findGlobKey(propsModules, `/props/${propsId}.gen.ts`);
  const mod = key ? propsModules[key] : undefined;
  if (!mod) return null;
  const exportName = `${toCamelCase(propsId)}Props`;
  const rows = mod[exportName];
  if (!Array.isArray(rows)) return null;
  return rows as PropRow[];
}

/** Ensure develop markdown `exportName` has a matching `sources` key. */
export function assertExampleSource(
  examples: ExampleModule,
  exportName: string,
): void {
  if (exportName === "sources" || exportName === "imports") {
    throw new Error(`Invalid example exportName "${exportName}"`);
  }
  if (typeof examples.sources[exportName] !== "string") {
    throw new Error(`Missing example source "${exportName}"`);
  }
}

/** Resolve a named example export for live Astro SSR preview. */
export function getExampleExport(
  examples: ExampleModule,
  exportName: string,
): unknown {
  assertExampleSource(examples, exportName);
  const Comp = examples[exportName];
  if (Comp == null || typeof Comp === "string") {
    throw new Error(`Missing example export "${exportName}"`);
  }
  return Comp;
}
