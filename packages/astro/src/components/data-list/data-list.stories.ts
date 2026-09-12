import DataList from "./data-list.astro";

export default {
  component: DataList,
  parameters: {
    docs: {
      description: {
        component: "Presents labeled values in a compact definition list.",
      },
    },
    metadata: {
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  title: "Components/Data Display/Data List",
};

export const Default = {
  args: {
    items: [
      { label: "Name", value: "Ada Lovelace" },
      { label: "Email", value: "ada@example.com" },
      { label: "Role", value: "Mathematician" },
    ],
  },
};
