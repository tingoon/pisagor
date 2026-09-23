import { DataTable } from "@pisagor/react/data-table";
import * as Examples from "@pisagor/react/data-table/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: DataTable,
  parameters: {
    docs: {
      description: {
        component:
          "Renders basic tabular data with columns and rows. Prefer Data Grid when you need resize, virtualization, or advanced interactions.",
      },
    },
  },
  title: "Components/Data Display/Data Table",
});

export const Playground = meta.story({
  render: Examples.Empty,
  tags: ["autodocs"],
});

export const Empty = meta.story({
  render: Examples.Empty,
});

export const Sorting = meta.story({
  render: Examples.Sorting,
});
