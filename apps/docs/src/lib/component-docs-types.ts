/** Structured component docs from skill markdown frontmatter. */
export interface ComponentExampleDoc {
  id: string;
  title: string;
  exportName: string;
  description?: string;
}

export interface ComponentDocs {
  id: string;
  title: string;
  description: string;
  whenToUse: string[];
  api: "compound" | "compound-shorthand" | "shorthand" | "primitive";
  taxonomy: "standard" | "pattern" | "layout" | "utility";
  aliases?: string[];
  importStatement: string;
  packageName: string;
  usageIntro?: string;
  examples: ComponentExampleDoc[];
  recipe?: string;
}
