import { ButtonGroup } from "@pisagor/react";
import * as Examples from "@pisagor/react/button-group/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Groups related actions together so users can compare choices and pick one option from a set.",
      },
    },
  },
  title: "Components/Actions/Button Group",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const OrientationHorizontal = meta.story({
  render: Examples.OrientationHorizontal,
});

export const OrientationVertical = meta.story({
  render: Examples.OrientationVertical,
});

export const Nested = meta.story({
  render: Examples.Nested,
});

export const WithSeparator = meta.story({
  render: Examples.WithSeparator,
});
