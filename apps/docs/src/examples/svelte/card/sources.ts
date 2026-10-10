import login_cardRaw from "./login-card.svelte?raw";
import login_card_custom_spacingRaw from "./login-card-custom-spacing.svelte?raw";
import product_cardRaw from "./product-card.svelte?raw";

export const sources = {
  LoginCard: login_cardRaw,
  LoginCardCustomSpacing: login_card_custom_spacingRaw,
  ProductCard: product_cardRaw,
} as const;
