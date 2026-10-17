import LoginCard from "./login-card.svelte?raw";
import LoginCardCustomSpacing from "./login-card-custom-spacing.svelte?raw";
import ProductCard from "./product-card.svelte?raw";

export const imports = `import { … } from "@pisagor/svelte";`;

export const sources = {
  LoginCard,
  LoginCardCustomSpacing,
  ProductCard,
} as const;
