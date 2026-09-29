/// <reference types="astro/client" />

declare module "*.md?raw" {
  const raw: string;
  export default raw;
}
