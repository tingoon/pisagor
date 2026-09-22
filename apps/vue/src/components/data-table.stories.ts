import { DataTable } from "@pisagor/vue/data-table";
import * as Examples from "@pisagor/vue/data-table/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const Empty = meta.story({
  render: exampleRender(Examples.Empty),
});

export const Sorting = meta.story({
  render: exampleRender(Examples.Sorting),
});
