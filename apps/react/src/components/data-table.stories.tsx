import { DataTable } from "@pisagor/react/data-table";
import preview from "#/storybook/preview";
import * as Examples from "#/react/examples/data-display/data-table";

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

export const Sorting = meta.story({
  render: Examples.Sorting,
});

export const Empty = meta.story({
  render: Examples.Empty,
});
