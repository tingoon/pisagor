import LoginCard from "./login-card.vue?raw";
import LoginCardCustomSpacing from "./login-card-custom-spacing.vue?raw";
import ProductCard from "./product-card.vue?raw";

export const imports = `import { … } from "@pisagor/vue";`;

export const sources = {
  LoginCard,
  LoginCardCustomSpacing,
  ProductCard,
} as const;
