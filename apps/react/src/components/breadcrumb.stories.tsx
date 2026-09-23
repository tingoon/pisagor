import { Breadcrumb } from "@pisagor/react";
import * as Examples from "@pisagor/react/breadcrumb/examples";
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
      { href: "https://example.com/", label: "Home" },
      { href: "https://example.com/", label: "Components" },
      { isCurrentPage: true, label: "Breadcrumb" },
    ],
  },
  tags: ["autodocs"],
});

export const Collapsed = meta.story({
  render: Examples.Collapsed,
});

export const CustomSeparator = meta.story({
  render: Examples.CustomSeparator,
});

export const WithLink = meta.story({
  render: Examples.WithLink,
});

export const WithMenu = meta.story({
  render: Examples.WithMenu,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const Default = meta.story({
  render: Examples.Default,
});
