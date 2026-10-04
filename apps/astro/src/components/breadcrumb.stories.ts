import { Breadcrumb } from "@pisagor/astro";
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
