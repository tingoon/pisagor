import { LoginCardSource as LoginCard } from "./login-card";
import { LoginCardCustomSpacingSource as LoginCardCustomSpacing } from "./login-card-custom-spacing";
import { ProductCardSource as ProductCard } from "./product-card";

export const imports = `import { … } from "@pisagor/react";`;

export const sources = {
  LoginCard,
  LoginCardCustomSpacing,
  ProductCard,
} as const;
