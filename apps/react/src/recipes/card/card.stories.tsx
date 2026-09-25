import { Fragment } from "react";
import preview from "#/storybook/preview";
import { LoginCard } from "./login-card";
import { LoginCardCustomSpacing } from "./login-card-custom-spacing";
import { ProductCard } from "./product-card";

const meta = preview.meta({
  component: Fragment,
  parameters: {
    docs: {
      description: {
        component:
          "Card compositions for login flows, custom spacing, and product display.",
      },
    },
  },
  title: "Recipes/Layout/Card",
});

export const Playground = meta.story({
  render: () => <LoginCard />,
  tags: ["autodocs"],
});

export const CustomSpacing = meta.story({
  render: () => <LoginCardCustomSpacing />,
});

export const Product = meta.story({
  render: () => <ProductCard />,
});
