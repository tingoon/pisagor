import { getCollection, getEntry } from "astro:content";
import { type ExampleModule, extractExampleNames } from "./component-doc";
import type { Framework } from "./nav";

/** Block page frontmatter (`content/<fw>/blocks/<id>.md`). */
export type BlockDocs = {
  title: string;
  description: string;
};

type BlockCollectionName =
  "reactBlocks" | "solidBlocks" | "svelteBlocks" | "vueBlocks";

type PaneMdxModule = {
  default: (props?: Record<string, unknown>) => unknown;
  getHeadings?: () => { depth: number; slug: string; text: string }[];
};

type PaneModules = Record<string, () => Promise<PaneMdxModule>>;

const blockCollectionName: Partial<Record<Framework, BlockCollectionName>> = {
  react: "reactBlocks",
  solid: "solidBlocks",
  svelte: "svelteBlocks",
  vue: "vueBlocks",
};

const developPanesByFramework: Partial<Record<Framework, PaneModules>> = {
  react: import.meta.glob<PaneMdxModule>(
    "../content/react/blocks/*/develop.mdx",
  ),
  solid: import.meta.glob<PaneMdxModule>(
    "../content/solid/blocks/*/develop.mdx",
  ),
  svelte: import.meta.glob<PaneMdxModule>(
    "../content/svelte/blocks/*/develop.mdx",
  ),
  vue: import.meta.glob<PaneMdxModule>("../content/vue/blocks/*/develop.mdx"),
};

const developRawByFramework: Partial<
  Record<Framework, Record<string, string>>
> = {
  react: import.meta.glob("../content/react/blocks/*/develop.mdx", {
    eager: true,
    import: "default",
    query: "?raw",
  }) as Record<string, string>,
  solid: import.meta.glob("../content/solid/blocks/*/develop.mdx", {
    eager: true,
    import: "default",
    query: "?raw",
  }) as Record<string, string>,
  svelte: import.meta.glob("../content/svelte/blocks/*/develop.mdx", {
    eager: true,
    import: "default",
    query: "?raw",
  }) as Record<string, string>,
  vue: import.meta.glob("../content/vue/blocks/*/develop.mdx", {
    eager: true,
    import: "default",
    query: "?raw",
  }) as Record<string, string>,
};

type ExampleLoaderMap = Record<string, () => Promise<ExampleModule>>;

/** Sources-only barrels — block pages use client islands for live components. */
const blockExamplesByFramework: Partial<Record<Framework, ExampleLoaderMap>> = {
  react: import.meta.glob<ExampleModule>("../examples/react/*/sources.ts"),
  solid: import.meta.glob<ExampleModule>("../examples/solid/*/sources.ts"),
  svelte: import.meta.glob<ExampleModule>("../examples/svelte/*/sources.ts"),
  vue: import.meta.glob<ExampleModule>("../examples/vue/*/sources.ts"),
};

function findGlobKey(
  modules: Record<string, unknown>,
  suffix: string,
): string | undefined {
  return Object.keys(modules).find((path) => path.endsWith(suffix));
}

/** Block ids from content collection meta files. */
export async function listBlockIds(framework: Framework): Promise<string[]> {
  const name = blockCollectionName[framework];
  if (!name) return [];
  const entries = await getCollection(name);
  return entries.map((entry) => entry.id).sort();
}

export async function listBlockStaticPaths(
  framework: Framework,
): Promise<{ params: { id: string } }[]> {
  const ids = await listBlockIds(framework);
  return ids.map((id) => ({ params: { id } }));
}

/** Title + description from block collection frontmatter. */
export async function loadBlockDocs(
  framework: Framework,
  id: string,
): Promise<BlockDocs> {
  const name = blockCollectionName[framework];
  if (!name) {
    throw new Error(`No block collection for ${framework}`);
  }
  const entry = await getEntry(name, id);
  if (!entry) {
    throw new Error(`Missing ${framework} block docs for "${id}"`);
  }
  return {
    description: entry.data.description,
    title: entry.data.title,
  };
}

/** Develop MDX module for a block page. */
export async function loadBlockDevelop(
  framework: Framework,
  id: string,
): Promise<{
  Content: (...args: never[]) => unknown;
  getHeadings: () => { depth: number; slug: string; text: string }[];
}> {
  const modules = developPanesByFramework[framework];
  if (!modules) {
    throw new Error(`No block develop glob for ${framework}`);
  }
  const key = findGlobKey(
    modules,
    `/content/${framework}/blocks/${id}/develop.mdx`,
  );
  const loader = key ? modules[key] : undefined;
  if (!loader) {
    throw new Error(`Missing ${framework} block develop for "${id}"`);
  }
  const mod = await loader();
  return {
    Content: mod.default,
    getHeadings: mod.getHeadings ?? (() => []),
  };
}

/** Raw develop MDX body for TOC / example name extraction. */
export function loadBlockDevelopBody(framework: Framework, id: string): string {
  const modules = developRawByFramework[framework];
  if (!modules) {
    throw new Error(`No block develop raw glob for ${framework}`);
  }
  const key = findGlobKey(
    modules,
    `/content/${framework}/blocks/${id}/develop.mdx`,
  );
  const raw = key ? modules[key] : undefined;
  if (!raw) {
    throw new Error(`Missing ${framework} block develop for "${id}"`);
  }
  return raw;
}

export function listBlockExampleNames(
  framework: Framework,
  id: string,
): string[] {
  return extractExampleNames(loadBlockDevelopBody(framework, id));
}

export async function loadBlockExamples(
  framework: Framework,
  id: string,
): Promise<ExampleModule> {
  const modules = blockExamplesByFramework[framework];
  if (!modules) {
    throw new Error(`No block examples glob for ${framework}`);
  }
  const key = findGlobKey(modules, `/examples/${framework}/${id}/sources.ts`);
  const loader = key ? modules[key] : undefined;
  const mod = loader ? await loader() : undefined;
  if (!mod?.sources) {
    throw new Error(`Missing ${framework} block examples for "${id}"`);
  }
  return mod;
}

/**
 * Static paths for one framework's standalone block previews
 * (`/preview/<fw>/<id>/<example>`).
 */
export async function listExamplePreviewStaticPathsFor(
  framework: Framework,
): Promise<{ params: { id: string; example: string } }[]> {
  const paths: { params: { id: string; example: string } }[] = [];

  for (const id of await listBlockIds(framework)) {
    let examples: ExampleModule;
    try {
      examples = await loadBlockExamples(framework, id);
    } catch {
      continue;
    }
    for (const example of Object.keys(examples.sources)) {
      paths.push({ params: { example, id } });
    }
  }

  return paths;
}
