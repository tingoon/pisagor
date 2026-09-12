import type { PreviewAddon } from "storybook/internal/csf";

export type ComponentApi = "closed" | "compound" | "compound-shorthand";

export type ComponentTaxonomy = "pattern" | "primitive" | "standard";

interface MetadataTypes {
  parameters: {
    metadata?: {
      aliases?: string[];
      api?: ComponentApi;
      taxonomy?: ComponentTaxonomy;
    };
  };
}

/** Typing-only addon for hidden catalog metadata on `parameters.metadata`. */
export default function addonMetadata(): PreviewAddon<MetadataTypes> {
  return {};
}
