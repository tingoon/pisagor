import preview from "#/vue/preview";
import { LoginCard } from "./login-card";
import { LoginCardCustomSpacing } from "./login-card-custom-spacing";
import { ProductCard } from "./product-card";

const meta = preview.meta({
  component: LoginCard,
  parameters: {
    docs: {
      checklist: {
        definedBehaviors: true,
        definedOptions: true,
        platformScales: true,
      },
      description: {
        component: "Card compositions for login flows, custom spacing, and product display.",
      },
    },
  },
  title: "Recipes/Layout/Card",
});

export const Login = meta.story({
  render: () => ({
    components: { LoginCard },
    template: `<LoginCard />`,
  }),
});

export const CustomSpacing = meta.story({
  render: () => ({
    components: { LoginCardCustomSpacing },
    template: `<LoginCardCustomSpacing />`,
  }),
});

export const Product = meta.story({
  render: () => ({
    components: { ProductCard },
    template: `<ProductCard />`,
  }),
});
