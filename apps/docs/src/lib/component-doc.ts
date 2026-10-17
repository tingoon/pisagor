import { getCollection, getEntry, render } from "astro:content";
import type { ComponentDocs } from "./component-docs-types";
import type { Framework } from "./nav";
import type { PropRow } from "./props/types";

/** Astro markdown/MDX module from docs content panes. */
export type SkillMdModule = {
  // Astro component factory (not a framework UI component).
  Content: (...args: never[]) => unknown;
  frontmatter: ComponentDocs;
  getHeadings: () => { depth: number; slug: string; text: string }[];
};

/** Example barrel (`index.ts`) — live components for previews / Astro SSR. */
export type ExampleModule = Record<string, unknown>;

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

type CollectionName =
  | "astroComponents"
  | "reactComponents"
  | "reactForms"
  | "solidComponents"
  | "solidForms"
  | "svelteComponents"
  | "svelteForms"
  | "vueComponents"
  | "vueForms";

type PaneMdxModule = {
  default: (props?: Record<string, unknown>) => unknown;
  frontmatter?: Record<string, unknown>;
  getHeadings?: () => { depth: number; slug: string; text: string }[];
};

type PaneModules = Record<string, () => Promise<PaneMdxModule>>;

type FrameworkPaneGlobs = {
  design: PaneModules;
  develop: PaneModules;
};

const componentPanesByFramework: Record<Framework, FrameworkPaneGlobs> = {
  astro: {
    design: import.meta.glob<PaneMdxModule>(
      "../content/astro/components/*/design.mdx",
    ),
    develop: import.meta.glob<PaneMdxModule>(
      "../content/astro/components/*/develop.mdx",
    ),
  },
  react: {
    design: import.meta.glob<PaneMdxModule>(
      "../content/react/components/*/design.mdx",
    ),
    develop: import.meta.glob<PaneMdxModule>(
      "../content/react/components/*/develop.mdx",
    ),
  },
  solid: {
    design: import.meta.glob<PaneMdxModule>(
      "../content/solid/components/*/design.mdx",
    ),
    develop: import.meta.glob<PaneMdxModule>(
      "../content/solid/components/*/develop.mdx",
    ),
  },
  svelte: {
    design: import.meta.glob<PaneMdxModule>(
      "../content/svelte/components/*/design.mdx",
    ),
    develop: import.meta.glob<PaneMdxModule>(
      "../content/svelte/components/*/develop.mdx",
    ),
  },
  vue: {
    design: import.meta.glob<PaneMdxModule>(
      "../content/vue/components/*/design.mdx",
    ),
    develop: import.meta.glob<PaneMdxModule>(
      "../content/vue/components/*/develop.mdx",
    ),
  },
};

const formPanesByFramework: Partial<Record<Framework, FrameworkPaneGlobs>> = {
  react: {
    design: import.meta.glob<PaneMdxModule>(
      "../content/react/forms/*/design.mdx",
    ),
    develop: import.meta.glob<PaneMdxModule>(
      "../content/react/forms/*/develop.mdx",
    ),
  },
  solid: {
    design: import.meta.glob<PaneMdxModule>(
      "../content/solid/forms/*/design.mdx",
    ),
    develop: import.meta.glob<PaneMdxModule>(
      "../content/solid/forms/*/develop.mdx",
    ),
  },
  svelte: {
    design: import.meta.glob<PaneMdxModule>(
      "../content/svelte/forms/*/design.mdx",
    ),
    develop: import.meta.glob<PaneMdxModule>(
      "../content/svelte/forms/*/develop.mdx",
    ),
  },
  vue: {
    design: import.meta.glob<PaneMdxModule>(
      "../content/vue/forms/*/design.mdx",
    ),
    develop: import.meta.glob<PaneMdxModule>(
      "../content/vue/forms/*/develop.mdx",
    ),
  },
};

type ExampleLoaderMap = Record<string, () => Promise<ExampleModule>>;

const examplesByFramework: Record<Framework, ExampleLoaderMap> = {
  astro: import.meta.glob<ExampleModule>(
    "../../../../packages/astro/examples/*/index.ts",
  ),
  react: import.meta.glob<ExampleModule>(
    "../../../../packages/react/examples/*/index.ts",
  ),
  solid: import.meta.glob<ExampleModule>(
    "../../../../packages/solid/examples/*/index.ts",
  ),
  svelte: import.meta.glob<ExampleModule>(
    "../../../../packages/svelte/examples/*/index.ts",
  ),
  vue: import.meta.glob<ExampleModule>(
    "../../../../packages/vue/examples/*/index.ts",
  ),
};

const formExamplesByFramework: Partial<Record<Framework, ExampleLoaderMap>> = {
  react: import.meta.glob<ExampleModule>(
    "../../../../packages/react-form/examples/*/index.ts",
  ),
  solid: import.meta.glob<ExampleModule>(
    "../../../../packages/solid-form/examples/*/index.ts",
  ),
  svelte: import.meta.glob<ExampleModule>(
    "../../../../packages/svelte-form/examples/*/index.ts",
  ),
  vue: import.meta.glob<ExampleModule>(
    "../../../../packages/vue-form/examples/*/index.ts",
  ),
};

const propsModules = import.meta.glob<Record<string, unknown>>(
  "./props/*.gen.ts",
  { eager: true },
);

const paneRawByFramework: Record<Framework, Record<string, string>> = {
  astro: import.meta.glob(
    "../content/astro/components/*/{design,develop}.mdx",
    {
      eager: true,
      import: "default",
      query: "?raw",
    },
  ) as Record<string, string>,
  react: {
    ...(import.meta.glob("../content/react/components/*/{design,develop}.mdx", {
      eager: true,
      import: "default",
      query: "?raw",
    }) as Record<string, string>),
    ...(import.meta.glob("../content/react/forms/*/{design,develop}.mdx", {
      eager: true,
      import: "default",
      query: "?raw",
    }) as Record<string, string>),
  },
  solid: {
    ...(import.meta.glob("../content/solid/components/*/{design,develop}.mdx", {
      eager: true,
      import: "default",
      query: "?raw",
    }) as Record<string, string>),
    ...(import.meta.glob("../content/solid/forms/*/{design,develop}.mdx", {
      eager: true,
      import: "default",
      query: "?raw",
    }) as Record<string, string>),
  },
  svelte: {
    ...(import.meta.glob(
      "../content/svelte/components/*/{design,develop}.mdx",
      { eager: true, import: "default", query: "?raw" },
    ) as Record<string, string>),
    ...(import.meta.glob("../content/svelte/forms/*/{design,develop}.mdx", {
      eager: true,
      import: "default",
      query: "?raw",
    }) as Record<string, string>),
  },
  vue: {
    ...(import.meta.glob("../content/vue/components/*/{design,develop}.mdx", {
      eager: true,
      import: "default",
      query: "?raw",
    }) as Record<string, string>),
    ...(import.meta.glob("../content/vue/forms/*/{design,develop}.mdx", {
      eager: true,
      import: "default",
      query: "?raw",
    }) as Record<string, string>),
  },
};

function toCamelCase(id: string): string {
  return id.replace(/-([a-z])/g, (_, char: string) => char.toUpperCase());
}

function contentArea(kind: ComponentDocKind): "components" | "forms" {
  return kind === "form" ? "forms" : "components";
}

function collectionName(
  framework: Framework,
  kind: ComponentDocKind,
): CollectionName | undefined {
  if (kind === "form") {
    if (framework === "astro") return undefined;
    return `${framework}Forms` as CollectionName;
  }
  return `${framework}Components` as CollectionName;
}

function panePathSuffix(
  framework: Framework,
  id: string,
  kind: ComponentDocKind,
  pane: SkillPaneId,
): string {
  return `/content/${framework}/${contentArea(kind)}/${id}/${pane}.mdx`;
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
  pane: SkillPaneId,
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
  pane: SkillPaneId,
): (() => Promise<PaneMdxModule>) | undefined {
  const modules = paneModules(framework, kind, pane);
  if (!modules) return undefined;
  const key = findGlobKey(modules, panePathSuffix(framework, id, kind, pane));
  return key ? modules[key] : undefined;
}

async function loadPaneMdx(
  loader: () => Promise<PaneMdxModule>,
  frontmatter: ComponentDocs,
): Promise<SkillMdModule> {
  const mod = await loader();
  return {
    Content: mod.default,
    frontmatter,
    getHeadings: mod.getHeadings ?? (() => []),
  };
}

/** Component ids from content collection meta files. */
export async function listComponentIds(
  framework: Framework,
  kind: ComponentDocKind = "component",
): Promise<string[]> {
  const name = collectionName(framework, kind);
  if (!name) return [];
  const entries = await getCollection(name);
  return entries.map((entry) => entry.id).sort();
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
  const name = collectionName(framework, kind);
  if (!name) {
    throw new Error(`No collection for ${framework}/${kind}`);
  }
  const entry = await getEntry(name, id);
  if (!entry) {
    throw new Error(`Missing ${framework} meta for "${id}" (${kind})`);
  }
  const { Content, headings } = await render(entry);
  return {
    Content,
    frontmatter: entry.data as ComponentDocs,
    getHeadings: () => headings,
  };
}

/** True when develop MDX exists for the id. */
export function hasDevelopDoc(
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

  const { frontmatter } = await loadSkillMd(framework, id, kind);
  const panes: SkillPanes = {};
  for (const pane of ["develop", "design"] as const) {
    const loader = paneLoader(framework, id, kind, pane);
    if (loader) panes[pane] = await loadPaneMdx(loader, frontmatter);
  }
  return panes;
}

/** Raw MDX body for TOC / tooling (no frontmatter required). */
export function findDisplayedSkillBody(
  framework: Framework,
  id: string,
  pane: SkillPaneId,
  kind: ComponentDocKind = "component",
): string {
  const suffix = panePathSuffix(framework, id, kind, pane);
  const raw = paneRawByFramework[framework];
  const key = findGlobKey(raw, suffix);
  if (!key) return "";
  const text = raw[key];
  if (typeof text !== "string") return "";
  if (!text.startsWith("---")) return text.trim();
  const match = /^---\r?\n[\s\S]*?\r?\n---\r?\n?([\s\S]*)$/.exec(text);
  return (match?.[1] ?? text).trim();
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
  const ids = await listComponentIds(framework, kind);
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
  const key = findGlobKey(modules, `/examples/${id}/index.ts`);
  const loader = key ? modules[key] : undefined;
  const mod = loader ? await loader() : undefined;
  if (!mod) {
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

/** Ensure develop markdown `exportName` has a matching live example export. */
export function assertExampleSource(
  examples: ExampleModule,
  exportName: string,
): void {
  if (
    exportName === "sources" ||
    exportName === "imports" ||
    exportName.endsWith("Source")
  ) {
    throw new Error(`Invalid example exportName "${exportName}"`);
  }
  const live = examples[exportName];
  if (live != null && typeof live !== "string") return;
  throw new Error(`Missing example export "${exportName}"`);
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

/** Example export names referenced in develop MDX (`<Example name="…" />`). */
export function extractExampleNames(developBody: string): string[] {
  const names: string[] = [];
  const re = /<Example\b[^>]*\bname=["']([^"']+)["']/g;
  for (const match of developBody.matchAll(re)) {
    const name = match[1];
    if (name && !names.includes(name)) names.push(name);
  }
  return names;
}
