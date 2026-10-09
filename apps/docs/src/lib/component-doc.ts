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

/** Example barrel from `packages/<fw>/examples/<id>/index.ts`. */
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
 * When the docs page id does not match `props/<id>.ts` export name
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

// Example barrels (eager — need components + sources at build time).
const examplesByFramework: Record<Framework, Record<string, ExampleModule>> = {
  astro: import.meta.glob<ExampleModule>(
    "../../../../packages/astro/examples/*/index.ts",
    { eager: true },
  ),
  react: import.meta.glob<ExampleModule>(
    "../../../../packages/react/examples/*/index.ts",
    { eager: true },
  ),
  solid: import.meta.glob<ExampleModule>(
    "../../../../packages/solid/examples/*/index.ts",
    { eager: true },
  ),
  svelte: import.meta.glob<ExampleModule>(
    "../../../../packages/svelte/examples/*/index.ts",
    { eager: true },
  ),
  vue: import.meta.glob<ExampleModule>(
    "../../../../packages/vue/examples/*/index.ts",
    { eager: true },
  ),
};

const formExamplesByFramework: Partial<
  Record<Framework, Record<string, ExampleModule>>
> = {
  react: import.meta.glob<ExampleModule>(
    "../../../../packages/react-form/examples/*/index.ts",
    { eager: true },
  ),
  solid: import.meta.glob<ExampleModule>(
    "../../../../packages/solid-form/examples/*/index.ts",
    { eager: true },
  ),
  svelte: import.meta.glob<ExampleModule>(
    "../../../../packages/svelte-form/examples/*/index.ts",
    { eager: true },
  ),
  vue: import.meta.glob<ExampleModule>(
    "../../../../packages/vue-form/examples/*/index.ts",
    { eager: true },
  ),
};
const propsModules = import.meta.glob<Record<string, unknown>>("./props/*.ts", {
  eager: true,
});

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

export async function getDefaultComponentTab(
  framework: Framework,
  id: string,
  kind: ComponentDocKind = "component",
): Promise<SkillPaneId> {
  const tabs = await listComponentDocTabs(framework, id, kind);
  return tabs[0]?.id ?? "develop";
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

export function loadExamples(
  framework: Framework,
  id: string,
  kind: ComponentDocKind = "component",
): ExampleModule {
  const modules =
    kind === "form"
      ? formExamplesByFramework[framework]
      : examplesByFramework[framework];
  if (!modules) {
    throw new Error(`No examples glob for ${framework}/${kind}`);
  }
  const key = findGlobKey(modules, `/examples/${id}/index.ts`);
  const mod = key ? modules[key] : undefined;
  if (!mod?.sources) {
    throw new Error(`Missing ${framework} examples for "${id}"`);
  }
  return mod;
}

/** Props rows when a generated module exists; otherwise `null`. */
export function loadProps(id: string): PropRow[] | null {
  const propsId = PROPS_FILE_ALIASES[id] ?? id;
  const key = findGlobKey(propsModules, `/props/${propsId}.ts`);
  const mod = key ? propsModules[key] : undefined;
  if (!mod) return null;
  const exportName = `${toCamelCase(propsId)}Props`;
  const rows = mod[exportName];
  if (!Array.isArray(rows)) return null;
  return rows as PropRow[];
}

/** Resolve a named example export for live preview (build-time check). */
export function getExampleExport(
  examples: ExampleModule,
  exportName: string,
): unknown {
  if (exportName === "sources" || exportName === "imports") {
    throw new Error(`Invalid example exportName "${exportName}"`);
  }
  const Comp = examples[exportName];
  if (Comp == null || typeof Comp === "string") {
    throw new Error(`Missing example export "${exportName}"`);
  }
  return Comp;
}

/** Static paths for standalone example preview pages (`/preview/…`). */
export function listExamplePreviewStaticPaths(): {
  params: {
    framework: Framework;
    kind: ComponentDocKind;
    id: string;
    example: string;
  };
}[] {
  const frameworks: Framework[] = ["astro", "react", "solid", "svelte", "vue"];
  const kinds: ComponentDocKind[] = ["component", "form"];
  const paths: {
    params: {
      framework: Framework;
      kind: ComponentDocKind;
      id: string;
      example: string;
    };
  }[] = [];

  for (const framework of frameworks) {
    for (const kind of kinds) {
      for (const id of listComponentIds(framework, kind)) {
        let examples: ExampleModule;
        try {
          examples = loadExamples(framework, id, kind);
        } catch {
          continue;
        }
        for (const example of Object.keys(examples.sources)) {
          paths.push({ params: { example, framework, id, kind } });
        }
      }
    }
  }

  return paths;
}
