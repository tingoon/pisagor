import { Editable } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/editable/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const OnSurface = meta.story({
  render: exampleRender(Examples.OnSurface),
});

export const Dblclick = meta.story({
  render: exampleRender(Examples.Dblclick),
});

export const OrientationHorizontal = meta.story({
  render: exampleRender(Examples.OrientationHorizontal),
});

export const OrientationVertical = meta.story({
  render: exampleRender(Examples.OrientationVertical),
});

export const WithTextarea = meta.story({
  render: exampleRender(Examples.WithTextarea),
});

export const WithoutControls = meta.story({
  render: exampleRender(Examples.WithoutControls),
});

export const ActivationClick = meta.story({
  render: exampleRender(Examples.ActivationClick),
});

export const ActivationFocus = meta.story({
  render: exampleRender(Examples.ActivationFocus),
});

export const ActivationNone = meta.story({
  render: exampleRender(Examples.ActivationNone),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
