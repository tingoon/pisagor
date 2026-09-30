import type { ComponentDocs } from "./component-docs-types";
import type { Framework } from "./nav";
import type { PropRow } from "./props/types";

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
const skillMdByFramework: Record<
  Framework,
  Record<string, () => Promise<SkillMdModule>>
> = {
  astro: import.meta.glob<SkillMdModule>(
    "../../../../packages/astro/skills/astro/references/primitives/*.md",
  ),
  react: import.meta.glob<SkillMdModule>(
    "../../../../packages/react/skills/react/references/primitives/*.md",
  ),
  solid: import.meta.glob<SkillMdModule>(
    "../../../../packages/solid/skills/solid/references/primitives/*.md",
  ),
  svelte: import.meta.glob<SkillMdModule>(
    "../../../../packages/svelte/skills/svelte/references/primitives/*.md",
  ),
  vue: import.meta.glob<SkillMdModule>(
    "../../../../packages/vue/skills/vue/references/primitives/*.md",
  ),
};

const formSkillMdByFramework: Partial<
  Record<Framework, Record<string, () => Promise<SkillMdModule>>>
> = {
  react: import.meta.glob<SkillMdModule>(
    "../../../../packages/react-form/skills/react-form/references/primitives/*.md",
  ),
  solid: import.meta.glob<SkillMdModule>(
    "../../../../packages/solid-form/skills/solid-form/references/primitives/*.md",
  ),
  svelte: import.meta.glob<SkillMdModule>(
    "../../../../packages/svelte-form/skills/svelte-form/references/primitives/*.md",
  ),
  vue: import.meta.glob<SkillMdModule>(
    "../../../../packages/vue-form/skills/vue-form/references/primitives/*.md",
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

function idFromSkillPath(path: string): string | undefined {
  const match = /\/primitives\/([^/]+)\.md$/.exec(path);
  return match?.[1];
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
  return Object.keys(modules)
    .map(idFromSkillPath)
    .filter((id): id is string => Boolean(id))
    .sort();
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
  const key = findGlobKey(modules, `/primitives/${id}.md`);
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
