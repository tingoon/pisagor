import type { ExampleModule } from "./component-doc";
import type { Framework } from "./nav";
import { parseSkillDoc, skillDocBody } from "./skill-doc";

/** Block page frontmatter (`content/<fw>/blocks/<id>.md`). */
export type BlockDocs = {
  title: string;
  description: string;
};

const blockRawByFramework: Partial<Record<Framework, Record<string, string>>> =
  {
    react: import.meta.glob("../content/react/blocks/*.md", {
      eager: true,
      import: "default",
      query: "?raw",
    }) as Record<string, string>,
    solid: import.meta.glob("../content/solid/blocks/*.md", {
      eager: true,
      import: "default",
      query: "?raw",
    }) as Record<string, string>,
    svelte: import.meta.glob("../content/svelte/blocks/*.md", {
      eager: true,
      import: "default",
      query: "?raw",
    }) as Record<string, string>,
    vue: import.meta.glob("../content/vue/blocks/*.md", {
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

function idFromBlockPath(path: string): string | undefined {
  return /\/content\/[^/]+\/blocks\/([^/]+)\.md$/.exec(path)?.[1];
}

/** Block ids from `content/<fw>/blocks/<id>.md`. */
export function listBlockIds(framework: Framework): string[] {
  const modules = blockRawByFramework[framework];
  if (!modules) return [];
  const ids = new Set(
    Object.keys(modules)
      .map(idFromBlockPath)
      .filter((id): id is string => Boolean(id)),
  );
  return [...ids].sort();
}

export function listBlockStaticPaths(
  framework: Framework,
): { params: { id: string } }[] {
  return listBlockIds(framework).map((id) => ({ params: { id } }));
}

/** Raw markdown body (no frontmatter) for a block page. */
export function loadBlockBody(framework: Framework, id: string): string {
  const modules = blockRawByFramework[framework];
  if (!modules) {
    throw new Error(`No block content glob for ${framework}`);
  }
  const key = findGlobKey(modules, `/content/${framework}/blocks/${id}.md`);
  const raw = key ? modules[key] : undefined;
  if (!raw) {
    throw new Error(`Missing ${framework} block docs for "${id}"`);
  }
  return skillDocBody(raw);
}

/** Title + description from block markdown frontmatter. */
export function loadBlockDocs(framework: Framework, id: string): BlockDocs {
  const modules = blockRawByFramework[framework];
  if (!modules) {
    throw new Error(`No block content glob for ${framework}`);
  }
  const key = findGlobKey(modules, `/content/${framework}/blocks/${id}.md`);
  const raw = key ? modules[key] : undefined;
  if (!raw) {
    throw new Error(`Missing ${framework} block docs for "${id}"`);
  }
  const { docs } = parseSkillDoc(raw);
  if (!docs.title?.trim() || !docs.description?.trim()) {
    throw new Error(`Block "${id}" frontmatter needs title and description`);
  }
  return { description: docs.description, title: docs.title };
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

/** Static paths for one framework's standalone block previews (`/preview/<fw>/<id>/<example>`). */
export async function listExamplePreviewStaticPathsFor(
  framework: Framework,
): Promise<{ params: { id: string; example: string } }[]> {
  const paths: { params: { id: string; example: string } }[] = [];

  for (const id of listBlockIds(framework)) {
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
