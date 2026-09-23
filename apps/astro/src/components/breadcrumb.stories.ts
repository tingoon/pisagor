import { Breadcrumb } from "@pisagor/astro/breadcrumb";

export default {
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
};

export const Playground = {
  args: {
    items: [
      { href: "/", label: "Home" },
      { href: "/docs", label: "Docs" },
      { isCurrentPage: true, label: "Components" },
    ],
  },
  tags: ["autodocs"],
};
