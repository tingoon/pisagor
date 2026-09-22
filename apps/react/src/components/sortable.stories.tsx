import { Sortable } from "@pisagor/react";
import * as Examples from "@pisagor/react/sortable/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Sortable,
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
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Horizontal = meta.story({
  render: Examples.Horizontal,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const WithoutHandle = meta.story({
  render: Examples.WithoutHandle,
});

export const Default = meta.story({
  render: Examples.Default,
});
