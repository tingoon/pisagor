import { DataList } from "@pisagor/astro";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: DataList,
  parameters: {
    docs: {
      description: {
        component: "Presents labeled values in a compact definition list.",
      },
    },
  },
  title: "Components/Data Display/Data List",
});

export const Playground = meta.story({
  args: {
    items: [
      { label: "Name", value: "Ada Lovelace" },
      { label: "Email", value: "ada@example.com" },
      { label: "Role", value: "Mathematician" },
    ],
  },
  tags: ["autodocs"],
});
