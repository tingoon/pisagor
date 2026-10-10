import { Breadcrumb } from "@pisagor/astro";
import * as Examples from "#/astro/examples/breadcrumb";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component:
          "Shows where the user is within a hierarchy and lets them jump back to earlier levels.",
      },
    },
  },
  title: "Components/Navigation/Breadcrumb",
});

export const Playground = meta.story({
  args: {
    items: [
      { href: "/", label: "Home" },
      { href: "/docs", label: "Docs" },
      { isCurrentPage: true, label: "Components" },
    ],
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const Collapsed = meta.story({
  render: () => ({ component: Examples.Collapsed }),
});

export const CustomSeparator = meta.story({
  render: () => ({ component: Examples.CustomSeparator }),
});

export const Compound = meta.story({
  render: () => ({ component: Examples.Compound }),
});

export const WithLink = meta.story({
  render: () => ({ component: Examples.WithLink }),
});

export const CustomRecipe = meta.story({
  render: () => ({ component: Examples.CustomRecipe }),
});
