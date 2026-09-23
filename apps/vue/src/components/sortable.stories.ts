import { Sortable } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/sortable/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Sortable.Root,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users reorder a list by dragging items or moving them with Alt and arrow keys.",
      },
    },
  },
  title: "Components/Actions/Sortable",
});

export const Playground = meta.story({
  render: exampleRender(Examples.Default),
  tags: ["autodocs"],
});

export const Horizontal = meta.story({
  render: exampleRender(Examples.Horizontal),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const WithoutHandle = meta.story({
  render: exampleRender(Examples.WithoutHandle),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
