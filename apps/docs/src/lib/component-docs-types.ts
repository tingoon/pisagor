/** Structured component docs from skill markdown frontmatter. */
export interface ComponentExampleDoc {
  id: string;
  title: string;
  exportName: string;
  description?: string;
}

export interface ComponentDocs {
  title: string;
  description: string;
  api:
    | "closed"
    | "open"
    | "compound"
    | "compound-shorthand"
    | "shorthand"
    | "primitive";
  taxonomy:
    | "standard"
    | "pattern"
    | "layout"
    | "utility"
    | "primitive"
    | "composite";
  aliases?: string[];
  packageName?: string;
}
