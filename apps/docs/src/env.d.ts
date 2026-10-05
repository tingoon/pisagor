/// <reference types="astro/client" />

declare module "#/changelog/*" {
  export const Content: import("astro/runtime/server").AstroComponentFactory;
  export function getHeadings(): {
    depth: number;
    slug: string;
    text: string;
  }[];
}

declare module "*.md?raw" {
  const raw: string;
  export default raw;
}
