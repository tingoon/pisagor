import { getCollection, getEntry, render } from "astro:content";
import type { ComponentDocs } from "./component-docs-types";
import type { Framework } from "./nav";
import type { PropRow } from "./props/types";

/** Astro markdown/MDX module from docs content panes. */
export type SkillMdModule = {
  // Astro / MDX component factory (MDX panes accept `components` for shortcodes).
  Content: (...args: never[]) => unknown;
  frontmatter: ComponentDocs;
  getHeadings: () => { depth: number; slug: string; text: string }[];
};

/** Doc panes. */
export type SkillPaneId = "design" | "develop";

const DEFAULT_PACKAGE: Record<Framework, string> = {
  astro: "@pisagor/astro",
  react: "@pisagor/react",
  solid: "@pisagor/solid",
  svelte: "@pisagor/svelte",
  vue: "@pisagor/vue",
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

type PaneMdxModule = {
  default: (props?: Record<string, unknown>) => unknown;
  frontmatter?: Record<string, unknown>;
  getHeadings?: () => { depth: number; slug: string; text: string }[];
};

type PaneModules = Record<string, () => Promise<PaneMdxModule>>;

/** Shared design pages. The same file serves every framework. */
const designModules = import.meta.glob<PaneMdxModule>(
  "../content/components/*/design.mdx",
);

const developModulesByFramework: Record<Framework, PaneModules> = {
  astro: import.meta.glob<PaneMdxModule>(
    "../content/astro/components/*/develop.mdx",
  ),
  react: import.meta.glob<PaneMdxModule>(
    "../content/react/components/*/develop.mdx",
  ),
  solid: import.meta.glob<PaneMdxModule>(
    "../content/solid/components/*/develop.mdx",
  ),
  svelte: import.meta.glob<PaneMdxModule>(
    "../content/svelte/components/*/develop.mdx",
  ),
  vue: import.meta.glob<PaneMdxModule>(
    "../content/vue/components/*/develop.mdx",
  ),
};

const propsModules = import.meta.glob<Record<string, unknown>>(
  "./props/*.gen.ts",
  { eager: true },
);

/** Lazy `?raw` loaders — only the requested pane file is fetched. */
type PaneRawLoaderMap = Record<string, () => Promise<string>>;

const compoundModulesByFramework: Record<Framework, PaneModules> = {
  astro: import.meta.glob<PaneMdxModule>(
    "../content/astro/components/*/compound.mdx",
  ),
  react: import.meta.glob<PaneMdxModule>(
    "../content/react/components/*/compound.mdx",
  ),
  solid: import.meta.glob<PaneMdxModule>(
    "../content/solid/components/*/compound.mdx",
  ),
  svelte: import.meta.glob<PaneMdxModule>(
    "../content/svelte/components/*/compound.mdx",
  ),
  vue: import.meta.glob<PaneMdxModule>(
    "../content/vue/components/*/compound.mdx",
  ),
};

const paneRawByFramework: Record<Framework, PaneRawLoaderMap> = {
  astro: import.meta.glob<string>("../content/astro/components/*/develop.mdx", {
    import: "default",
    query: "?raw",
  }),
  react: import.meta.glob<string>("../content/react/components/*/develop.mdx", {
    import: "default",
    query: "?raw",
  }),
  solid: import.meta.glob<string>("../content/solid/components/*/develop.mdx", {
    import: "default",
    query: "?raw",
  }),
  svelte: import.meta.glob<string>(
    "../content/svelte/components/*/develop.mdx",
    { import: "default", query: "?raw" },
  ),
  vue: import.meta.glob<string>("../content/vue/components/*/develop.mdx", {
    import: "default",
    query: "?raw",
  }),
};

function toCamelCase(id: string): string {
  return id.replace(/-([a-z])/g, (_, char: string) => char.toUpperCase());
}

function panePathSuffix(
  framework: Framework,
  id: string,
  pane: SkillPaneId,
): string {
  if (pane === "design") return `/content/components/${id}/design.mdx`;

  return `/content/${framework}/components/${id}/${pane}.mdx`;
}

function findGlobKey(
  modules: Record<string, unknown>,
  suffix: string,
): string | undefined {
  return Object.keys(modules).find((path) => path.endsWith(suffix));
}

function developIds(framework: Framework): Set<string> {
  const ids = new Set<string>();
  for (const key of Object.keys(developModulesByFramework[framework])) {
    const match = key.match(/\/components\/([^/]+)\/develop\.mdx$/);
    if (match?.[1]) ids.add(match[1]);
  }

  return ids;
}

function paneLoader(
  framework: Framework,
  id: string,
  pane: SkillPaneId,
): (() => Promise<PaneMdxModule>) | undefined {
  const modules =
    pane === "design" ? designModules : developModulesByFramework[framework];
  const key = findGlobKey(modules, panePathSuffix(framework, id, pane));

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

/** Component ids that this framework ships (shared meta + a develop page). */
export async function listComponentIds(
  framework: Framework,
): Promise<string[]> {
  const shipped = developIds(framework);
  const entries = await getCollection("components");

  return entries
    .map((entry) => entry.id)
    .filter((id) => shipped.has(id))
    .sort();
}

export function defaultPackageName(framework: Framework): string {
  return DEFAULT_PACKAGE[framework];
}

export async function loadSkillMd(
  _framework: Framework,
  id: string,
): Promise<SkillMdModule> {
  const entry = await getEntry("components", id);
  if (!entry) {
    throw new Error(`Missing shared meta for "${id}"`);
  }
  const { Content, headings } = await render(entry);

  return {
    Content,
    frontmatter: entry.data as ComponentDocs,
    getHeadings: () => headings,
  };
}

/** True when design MDX exists for the id. */
export function hasDesignDoc(framework: Framework, id: string): boolean {
  return Boolean(paneLoader(framework, id, "design"));
}

/** Load a single develop or design pane (not both). */
export async function loadSkillPane(
  framework: Framework,
  id: string,
  pane: SkillPaneId,
): Promise<SkillMdModule> {
  const loader = paneLoader(framework, id, pane);
  if (!loader) {
    throw new Error(`Missing ${framework} ${pane} for "${id}"`);
  }
  const { frontmatter } = await loadSkillMd(framework, id);

  return loadPaneMdx(loader, frontmatter);
}

function stripMdxFrontmatter(text: string): string {
  if (!text.startsWith("---")) return text.trim();
  const match = /^---\r?\n[\s\S]*?\r?\n---\r?\n?([\s\S]*)$/.exec(text);

  return (match?.[1] ?? text).trim();
}

/** Lazy-load one pane’s raw MDX body (example-name extraction, etc.). */
export async function loadSkillBody(
  framework: Framework,
  id: string,
  pane: SkillPaneId,
): Promise<string> {
  const suffix = panePathSuffix(framework, id, pane);
  const raw = paneRawByFramework[framework];
  const key = findGlobKey(raw, suffix);
  const loader = key ? raw[key] : undefined;
  if (!loader) return "";
  const text = await loader();

  return typeof text === "string" ? stripMdxFrontmatter(text) : "";
}

const DOC_TAB_LABELS: Record<SkillPaneId, string> = {
  design: "Design",
  develop: "Develop",
};

export type ComponentDocTab = {
  id: SkillPaneId;
  label: string;
};

/** Tabs available for a component (order: Develop → Design). Sync — no MDX load. */
export function listComponentDocTabs(
  framework: Framework,
  id: string,
): ComponentDocTab[] {
  const tabs: ComponentDocTab[] = [
    { id: "develop", label: DOC_TAB_LABELS.develop },
  ];
  if (hasDesignDoc(framework, id)) {
    tabs.push({ id: "design", label: DOC_TAB_LABELS.design });
  }

  return tabs;
}

function compoundPathSuffix(framework: Framework, id: string): string {
  return `/content/${framework}/components/${id}/compound.mdx`;
}

/** True when `compound.mdx` exists for the component. */
export function hasCompoundDoc(framework: Framework, id: string): boolean {
  return Boolean(
    findGlobKey(
      compoundModulesByFramework[framework],
      compoundPathSuffix(framework, id),
    ),
  );
}

/** Load the compound surface (`compound.mdx`). Anatomy only for now. */
export async function loadCompoundDoc(
  framework: Framework,
  id: string,
): Promise<SkillMdModule> {
  const modules = compoundModulesByFramework[framework];
  const key = findGlobKey(modules, compoundPathSuffix(framework, id));
  const loader = key ? modules[key] : undefined;
  if (!loader) {
    throw new Error(`Missing ${framework} compound doc for "${id}"`);
  }
  const { frontmatter } = await loadSkillMd(framework, id);

  return loadPaneMdx(loader, frontmatter);
}

export type DevelopSurface = "shorthand" | "compound";

/** Static paths for `/…/components/<id>/develop/compound`. */
export async function listCompoundStaticPaths(
  framework: Framework,
): Promise<{ params: { id: string } }[]> {
  const ids = await listComponentIds(framework);

  return ids
    .filter((id) => hasCompoundDoc(framework, id))
    .map((id) => ({ params: { id } }));
}

/** Static paths for `/…/components/<id>/develop` or `…/design`. */
export async function listComponentPaneStaticPaths(
  framework: Framework,
  pane: SkillPaneId,
): Promise<{ params: { id: string } }[]> {
  const ids = await listComponentIds(framework);

  return ids
    .filter((id) => Boolean(paneLoader(framework, id, pane)))
    .map((id) => ({ params: { id } }));
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
