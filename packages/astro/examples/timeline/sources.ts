import Compound from "./compound.astro?raw";
import Default from "./default.astro?raw";
import Horizontal from "./horizontal.astro?raw";

export const imports = `---
import { Timeline } from "@pisagor/astro";
---`;

export const sources = {
  Compound,
  Default,
  Horizontal,
} as const;
