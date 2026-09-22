import { Editable } from "@pisagor/react";
import * as Examples from "@pisagor/react/editable/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Editable,
  parameters: {
    docs: {
      description: {
        component:
          "Turns static text into inline editing so users can update a value where it is shown.",
      },
    },
  },
  title: "Components/Forms/Editable",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Dblclick = meta.story({
  render: Examples.Dblclick,
});

export const OrientationHorizontal = meta.story({
  render: Examples.OrientationHorizontal,
});

export const OrientationVertical = meta.story({
  render: Examples.OrientationVertical,
});

export const WithTextarea = meta.story({
  render: Examples.WithTextarea,
});

export const WithoutControls = meta.story({
  render: Examples.WithoutControls,
});

export const ActivationClick = meta.story({
  render: Examples.ActivationClick,
});

export const ActivationFocus = meta.story({
  render: Examples.ActivationFocus,
});

export const ActivationNone = meta.story({
  render: Examples.ActivationNone,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Default = meta.story({
  render: Examples.Default,
});
