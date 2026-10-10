/** Structured component docs from skill markdown frontmatter. */
export interface ComponentExampleDoc {
  id: string;
  title: string;
  exportName: string;
  description?: string;
  /** Heading depth of the example title in develop markdown (`###` → 3). */
  depth: number;
  /** Nearest `##` ancestor (e.g. Examples, Customization). */
  section?: {
    id: string;
    title: string;
  };
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
