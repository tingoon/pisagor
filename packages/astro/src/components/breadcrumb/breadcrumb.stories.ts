import Breadcrumb from "./breadcrumb.astro";

export default {
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component:
          "Shows where the user is within a hierarchy and lets them jump back to earlier levels.",
      },
    },
    metadata: {
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  title: "Components/Navigation/Breadcrumb",
};

export const Default = {
  args: {
    items: [
      { href: "/", label: "Home" },
      { href: "/docs", label: "Docs" },
      { isCurrentPage: true, label: "Components" },
    ],
  },
};
