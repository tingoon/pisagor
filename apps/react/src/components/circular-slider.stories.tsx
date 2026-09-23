import { CircularSlider } from "@pisagor/react";
import * as Examples from "@pisagor/react/circular-slider/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: CircularSlider,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users choose a value by dragging around a circular control instead of a straight track.",
      },
    },
  },
  title: "Components/Forms/Circular Slider",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const Step = meta.story({
  render: Examples.Step,
});

export const Thickness = meta.story({
  render: Examples.Thickness,
});

export const WithValue = meta.story({
  render: Examples.WithValue,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const CustomMarkers = meta.story({
  render: Examples.CustomMarkers,
});

export const WithMarkers = meta.story({
  render: Examples.WithMarkers,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Default = meta.story({
  render: Examples.Default,
});
