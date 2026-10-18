import { getCollection, getEntry, render } from "astro:content";
import { extractExampleNames } from "./component-doc";
import type { Framework } from "./nav";

/** Block page frontmatter (`content/<fw>/blocks/<id>.mdx`). */
export type BlockDocs = {
  title: string;
  description: string;
};

type BlockCollectionName =
  "reactBlocks" | "solidBlocks" | "svelteBlocks" | "vueBlocks";

const blockCollectionName: Partial<Record<Framework, BlockCollectionName>> = {
  react: "reactBlocks",
  solid: "solidBlocks",
  svelte: "svelteBlocks",
  vue: "vueBlocks",
};

/** Block ids from content collection MDX files. */
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

/** Title + description from block MDX frontmatter. */
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

/** Block MDX module (frontmatter + body in one file). */
export async function loadBlockPage(
  framework: Framework,
  id: string,
): Promise<{
  Content: (...args: never[]) => unknown;
  docs: BlockDocs;
  getHeadings: () => { depth: number; slug: string; text: string }[];
}> {
  const name = blockCollectionName[framework];
  if (!name) {
    throw new Error(`No block collection for ${framework}`);
  }
  const entry = await getEntry(name, id);
  if (!entry) {
    throw new Error(`Missing ${framework} block docs for "${id}"`);
  }
  const { Content, headings } = await render(entry);

  return {
    Content,
    docs: {
      description: entry.data.description,
      title: entry.data.title,
    },
    getHeadings: () => headings,
  };
}

/** Raw MDX body for example-name extraction. */
export async function loadBlockBody(
  framework: Framework,
  id: string,
): Promise<string> {
  const name = blockCollectionName[framework];
  if (!name) {
    throw new Error(`No block collection for ${framework}`);
  }
  const entry = await getEntry(name, id);
  if (!entry) {
    throw new Error(`Missing ${framework} block docs for "${id}"`);
  }

  return entry.body ?? "";
}

export async function listBlockExampleNames(
  framework: Framework,
  id: string,
): Promise<string[]> {
  return extractExampleNames(await loadBlockBody(framework, id));
}

/** Ensure block MDX references this example name. */
export async function assertBlockExample(
  framework: Framework,
  id: string,
  exportName: string,
): Promise<void> {
  const names = await listBlockExampleNames(framework, id);
  if (!names.includes(exportName)) {
    throw new Error(
      `Missing block example "${exportName}" for ${framework}/${id}`,
    );
  }
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
    for (const example of await listBlockExampleNames(framework, id)) {
      paths.push({ params: { example, id } });
    }
  }

  return paths;
}
