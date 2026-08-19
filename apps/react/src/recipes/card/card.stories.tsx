import { Fragment } from "react";
import preview from "#/react/preview";
import { LoginCard } from "./login-card";
import { LoginCardCustomSpacing } from "./login-card-custom-spacing";
import { ProductCard } from "./product-card";

const meta = preview.meta({
  component: Fragment,
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
  render: () => <LoginCard />,
});

export const CustomSpacing = meta.story({
  render: () => <LoginCardCustomSpacing />,
});

export const Product = meta.story({
  render: () => <ProductCard />,
});
