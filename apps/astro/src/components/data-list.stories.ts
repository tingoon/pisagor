import { DataList } from "@pisagor/astro/data-list";

export default {
  component: DataList,
  parameters: {
    docs: {
      description: {
        component: "Presents labeled values in a compact definition list.",
      },
    },
  },
  title: "Components/Data Display/Data List",
};

export const Playground = {
  args: {
    items: [
      { label: "Name", value: "Ada Lovelace" },
      { label: "Email", value: "ada@example.com" },
      { label: "Role", value: "Mathematician" },
    ],
  },
  tags: ["autodocs"],
};
