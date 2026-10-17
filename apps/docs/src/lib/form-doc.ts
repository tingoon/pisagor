import { getCollection, getEntry, render } from "astro:content";
import type { ComponentDocs } from "./component-docs-types";
import type { Framework } from "./nav";

type FormCollectionName =
  "reactForms" | "solidForms" | "svelteForms" | "vueForms";

const formCollectionName: Partial<Record<Framework, FormCollectionName>> = {
  react: "reactForms",
  solid: "solidForms",
  svelte: "svelteForms",
  vue: "vueForms",
};

/** Form ids from content collection MDX files. */
export async function listFormIds(framework: Framework): Promise<string[]> {
  const name = formCollectionName[framework];
  if (!name) return [];
  const entries = await getCollection(name);
  return entries.map((entry) => entry.id).sort();
}

export async function listFormStaticPaths(
  framework: Framework,
): Promise<{ params: { id: string } }[]> {
  const ids = await listFormIds(framework);
  return ids.map((id) => ({ params: { id } }));
}

/** Form MDX page (frontmatter + When to use body). */
export async function loadFormPage(
  framework: Framework,
  id: string,
): Promise<{
  Content: (...args: never[]) => unknown;
  docs: ComponentDocs;
  getHeadings: () => { depth: number; slug: string; text: string }[];
}> {
  const name = formCollectionName[framework];
  if (!name) {
    throw new Error(`No form collection for ${framework}`);
  }
  const entry = await getEntry(name, id);
  if (!entry) {
    throw new Error(`Missing ${framework} form docs for "${id}"`);
  }
  const { Content, headings } = await render(entry);
  return {
    Content,
    docs: entry.data as ComponentDocs,
    getHeadings: () => headings,
  };
}
