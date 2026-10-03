import type { ComponentDocs } from "./component-docs-types";
import type { Framework } from "./nav";
import { resolveComponentExamples } from "./parse-example-directives";
import type { PropRow } from "./props/types";
import { findSkillExamplesBody } from "./skill-doc";

/** Astro markdown module from skill `references/primitives/<id>.md`. */
export type SkillMdModule = {
  // Astro component factory (not a framework UI component).
  Content: (props?: Record<string, unknown>) => unknown;
  frontmatter: ComponentDocs;
  getHeadings: () => { depth: number; slug: string; text: string }[];
};

/** Example barrel from `assets/examples/<id>/index.ts`. */
export type ExampleModule = {
  sources: Record<string, string>;
  imports?: string;
} & Record<string, unknown>;

export type ComponentDocKind = "component" | "form";

/** Split skill panes (folder layout under `primitives/<id>/`). */
export type SkillPaneId = "design" | "usage" | "examples" | "develop";

export type SkillPanes = Partial<Record<SkillPaneId, SkillMdModule>>;

export const SKILL_PANE_IDS: SkillPaneId[] = [
  "examples",
  "usage",
  "design",
  "develop",
];

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

// Skill markdown (lazy — Content must be loaded per page).
// Flat `primitives/<id>.md` and folder `primitives/<id>/metadata.md`.
const skillMdByFramework: Record<
  Framework,
  Record<string, () => Promise<SkillMdModule>>
> = {
  astro: {
    ...import.meta.glob<SkillMdModule>(
      "../../../../packages/astro/skills/astro/references/primitives/*.md",
    ),
    ...import.meta.glob<SkillMdModule>(
      "../../../../packages/astro/skills/astro/references/primitives/*/metadata.md",
    ),
  },
  react: {
    ...import.meta.glob<SkillMdModule>(
      "../../../../packages/react/skills/react/references/primitives/*.md",
    ),
    ...import.meta.glob<SkillMdModule>(
      "../../../../packages/react/skills/react/references/primitives/*/metadata.md",
    ),
  },
  solid: {
    ...import.meta.glob<SkillMdModule>(
      "../../../../packages/solid/skills/solid/references/primitives/*.md",
    ),
    ...import.meta.glob<SkillMdModule>(
      "../../../../packages/solid/skills/solid/references/primitives/*/metadata.md",
    ),
  },
  svelte: {
    ...import.meta.glob<SkillMdModule>(
      "../../../../packages/svelte/skills/svelte/references/primitives/*.md",
    ),
    ...import.meta.glob<SkillMdModule>(
      "../../../../packages/svelte/skills/svelte/references/primitives/*/metadata.md",
    ),
  },
  vue: {
    ...import.meta.glob<SkillMdModule>(
      "../../../../packages/vue/skills/vue/references/primitives/*.md",
    ),
    ...import.meta.glob<SkillMdModule>(
      "../../../../packages/vue/skills/vue/references/primitives/*/metadata.md",
    ),
  },
};

/** Split panes: `primitives/<id>/{design,usage,examples,develop}.md`. */
const skillPanesByFramework: Record<
  Framework,
  Record<string, () => Promise<SkillMdModule>>
> = {
  astro: import.meta.glob<SkillMdModule>(
    "../../../../packages/astro/skills/astro/references/primitives/*/{design,usage,examples,develop}.md",
  ),
  react: import.meta.glob<SkillMdModule>(
    "../../../../packages/react/skills/react/references/primitives/*/{design,usage,examples,develop}.md",
  ),
  solid: import.meta.glob<SkillMdModule>(
    "../../../../packages/solid/skills/solid/references/primitives/*/{design,usage,examples,develop}.md",
  ),
  svelte: import.meta.glob<SkillMdModule>(
    "../../../../packages/svelte/skills/svelte/references/primitives/*/{design,usage,examples,develop}.md",
  ),
  vue: import.meta.glob<SkillMdModule>(
    "../../../../packages/vue/skills/vue/references/primitives/*/{design,usage,examples,develop}.md",
  ),
};

const formSkillMdByFramework: Partial<
  Record<Framework, Record<string, () => Promise<SkillMdModule>>>
> = {
  react: {
    ...import.meta.glob<SkillMdModule>(
      "../../../../packages/react-form/skills/react-form/references/primitives/*.md",
    ),
    ...import.meta.glob<SkillMdModule>(
      "../../../../packages/react-form/skills/react-form/references/primitives/*/metadata.md",
    ),
  },
  solid: {
    ...import.meta.glob<SkillMdModule>(
      "../../../../packages/solid-form/skills/solid-form/references/primitives/*.md",
    ),
    ...import.meta.glob<SkillMdModule>(
      "../../../../packages/solid-form/skills/solid-form/references/primitives/*/metadata.md",
    ),
  },
  svelte: {
    ...import.meta.glob<SkillMdModule>(
      "../../../../packages/svelte-form/skills/svelte-form/references/primitives/*.md",
    ),
    ...import.meta.glob<SkillMdModule>(
      "../../../../packages/svelte-form/skills/svelte-form/references/primitives/*/metadata.md",
    ),
  },
  vue: {
    ...import.meta.glob<SkillMdModule>(
      "../../../../packages/vue-form/skills/vue-form/references/primitives/*.md",
    ),
    ...import.meta.glob<SkillMdModule>(
      "../../../../packages/vue-form/skills/vue-form/references/primitives/*/metadata.md",
    ),
  },
};

const formSkillPanesByFramework: Partial<
  Record<Framework, Record<string, () => Promise<SkillMdModule>>>
> = {
  react: import.meta.glob<SkillMdModule>(
    "../../../../packages/react-form/skills/react-form/references/primitives/*/{design,usage,examples,develop}.md",
  ),
  solid: import.meta.glob<SkillMdModule>(
    "../../../../packages/solid-form/skills/solid-form/references/primitives/*/{design,usage,examples,develop}.md",
  ),
  svelte: import.meta.glob<SkillMdModule>(
    "../../../../packages/svelte-form/skills/svelte-form/references/primitives/*/{design,usage,examples,develop}.md",
  ),
  vue: import.meta.glob<SkillMdModule>(
    "../../../../packages/vue-form/skills/vue-form/references/primitives/*/{design,usage,examples,develop}.md",
  ),
};

// Example barrels (eager — need components + sources at build time).
const examplesByFramework: Record<Framework, Record<string, ExampleModule>> = {
  astro: import.meta.glob<ExampleModule>(
    "../../../../packages/astro/skills/astro/assets/examples/*/index.ts",
    { eager: true },
  ),
  react: import.meta.glob<ExampleModule>(
    "../../../../packages/react/skills/react/assets/examples/*/index.ts",
    { eager: true },
  ),
  solid: import.meta.glob<ExampleModule>(
    "../../../../packages/solid/skills/solid/assets/examples/*/index.ts",
    { eager: true },
  ),
  svelte: import.meta.glob<ExampleModule>(
    "../../../../packages/svelte/skills/svelte/assets/examples/*/index.ts",
    { eager: true },
  ),
  vue: import.meta.glob<ExampleModule>(
    "../../../../packages/vue/skills/vue/assets/examples/*/index.ts",
    { eager: true },
  ),
};

const formExamplesByFramework: Partial<
  Record<Framework, Record<string, ExampleModule>>
> = {
  react: import.meta.glob<ExampleModule>(
    "../../../../packages/react-form/skills/react-form/assets/examples/*/index.ts",
    { eager: true },
  ),
  solid: import.meta.glob<ExampleModule>(
    "../../../../packages/solid-form/skills/solid-form/assets/examples/*/index.ts",
    { eager: true },
  ),
  svelte: import.meta.glob<ExampleModule>(
    "../../../../packages/svelte-form/skills/svelte-form/assets/examples/*/index.ts",
    { eager: true },
  ),
  vue: import.meta.glob<ExampleModule>(
    "../../../../packages/vue-form/skills/vue-form/assets/examples/*/index.ts",
    { eager: true },
  ),
};

const propsModules = import.meta.glob<Record<string, unknown>>("./props/*.ts", {
  eager: true,
});

function toCamelCase(id: string): string {
  return id.replace(/-([a-z])/g, (_, char: string) => char.toUpperCase());
}

/** Flat `primitives/<id>.md` or folder `primitives/<id>/metadata.md`. */
function idFromSkillPath(path: string): string | undefined {
  const folder = /\/primitives\/([^/]+)\/metadata\.md$/.exec(path);
  if (folder?.[1]) return folder[1];
  const flat = /\/primitives\/([^/]+)\.md$/.exec(path);
  return flat?.[1];
}

function findGlobKey(
  modules: Record<string, unknown>,
  suffix: string,
): string | undefined {
  return Object.keys(modules).find((path) => path.endsWith(suffix));
}

/** Component ids from skill markdown filenames (not frontmatter). */
export function listComponentIds(
  framework: Framework,
  kind: ComponentDocKind = "component",
): string[] {
  const modules =
    kind === "form"
      ? formSkillMdByFramework[framework]
      : skillMdByFramework[framework];
  if (!modules) return [];
  const ids = new Set(
    Object.keys(modules)
      .map(idFromSkillPath)
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
  const modules =
    kind === "form"
      ? formSkillMdByFramework[framework]
      : skillMdByFramework[framework];
  if (!modules) {
    throw new Error(`No skill markdown glob for ${framework}/${kind}`);
  }
  const folderKey = findGlobKey(modules, `/primitives/${id}/metadata.md`);
  const flatKey = findGlobKey(modules, `/primitives/${id}.md`);
  const key = folderKey ?? flatKey;
  const loader = key ? modules[key] : undefined;
  if (!loader) {
    throw new Error(`Missing ${framework} skill markdown for "${id}"`);
  }
  const mod = await loader();
  return {
    Content: mod.Content,
    frontmatter: mod.frontmatter as ComponentDocs,
    getHeadings: mod.getHeadings,
  };
}

/** True when the skill uses `primitives/<id>/metadata.md` (+ optional panes). */
export function hasSkillFolder(
  framework: Framework,
  id: string,
  kind: ComponentDocKind = "component",
): boolean {
  const modules =
    kind === "form"
      ? formSkillMdByFramework[framework]
      : skillMdByFramework[framework];
  if (!modules) return false;
  return Boolean(findGlobKey(modules, `/primitives/${id}/metadata.md`));
}

/** Load split panes when present (folder layout). Empty for flat skills. */
export async function loadSkillPanes(
  framework: Framework,
  id: string,
  kind: ComponentDocKind = "component",
): Promise<SkillPanes> {
  if (!hasSkillFolder(framework, id, kind)) return {};

  const paneModules =
    kind === "form"
      ? formSkillPanesByFramework[framework]
      : skillPanesByFramework[framework];
  if (!paneModules) return {};

  const panes: SkillPanes = {};
  await Promise.all(
    SKILL_PANE_IDS.map(async (pane) => {
      const key = findGlobKey(paneModules, `/primitives/${id}/${pane}.md`);
      const loader = key ? paneModules[key] : undefined;
      if (!loader) return;
      const mod = await loader();
      panes[pane] = {
        Content: mod.Content,
        frontmatter: mod.frontmatter as ComponentDocs,
        getHeadings: mod.getHeadings,
      };
    }),
  );
  return panes;
}

const DOC_TAB_LABELS: Record<SkillPaneId, string> = {
  design: "Design",
  develop: "Develop",
  examples: "Examples",
  usage: "Usage",
};

export type ComponentDocTab = {
  id: SkillPaneId;
  label: string;
};

/** Tabs available for a component (order: Examples → Usage → Design → Develop). */
export async function listComponentDocTabs(
  framework: Framework,
  id: string,
  kind: ComponentDocKind = "component",
): Promise<ComponentDocTab[]> {
  const pkg = defaultPackageName(framework, kind);
  const examplesBody = findSkillExamplesBody(id, {
    framework,
    packageName: pkg,
  });
  const hasExamples = resolveComponentExamples(examplesBody).length > 0;
  const isSplit = hasSkillFolder(framework, id, kind);
  const panes = await loadSkillPanes(framework, id, kind);

  const tabs: ComponentDocTab[] = [];
  if (hasExamples) {
    tabs.push({ id: "examples", label: DOC_TAB_LABELS.examples });
  }
  if (isSplit ? Boolean(panes.usage) : true) {
    tabs.push({ id: "usage", label: DOC_TAB_LABELS.usage });
  }
  if (panes.design) {
    tabs.push({ id: "design", label: DOC_TAB_LABELS.design });
  }
  tabs.push({ id: "develop", label: DOC_TAB_LABELS.develop });
  return tabs;
}

export async function getDefaultComponentTab(
  framework: Framework,
  id: string,
  kind: ComponentDocKind = "component",
): Promise<SkillPaneId> {
  const tabs = await listComponentDocTabs(framework, id, kind);
  return tabs[0]?.id ?? "examples";
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
