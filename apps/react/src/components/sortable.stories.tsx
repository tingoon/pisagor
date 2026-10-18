import { Sortable } from "@pisagor/react";
import preview from "#/storybook/preview";
import * as Examples from "#/react/examples/actions/sortable";

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

export const Default = meta.story({
  render: Examples.Default,
});

export const Horizontal = meta.story({
  render: Examples.Horizontal,
});

export const WithoutHandle = meta.story({
  render: Examples.WithoutHandle,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});
