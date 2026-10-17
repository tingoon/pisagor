import type { Framework } from "#/lib/nav";

/** Page-level defaults for `<Example />` (from route: framework / id / kind). */
export type DocsExampleContext = {
  framework: Framework;
  exampleId: string;
  kind: "component" | "form" | "block";
};

export function setDocsExampleContext(
  locals: App.Locals,
  context: DocsExampleContext,
): void {
  locals.docsExample = context;
}

export function getDocsExampleContext(
  locals: App.Locals,
): DocsExampleContext | undefined {
  return locals.docsExample;
}
