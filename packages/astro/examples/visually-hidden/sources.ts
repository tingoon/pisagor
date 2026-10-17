import Default from "./default.astro?raw";

export const imports = `---
import { Button, VisuallyHidden } from "@pisagor/astro";
---`;

export const sources = {
  Default,
} as const;
