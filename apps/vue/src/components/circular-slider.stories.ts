import { CircularSlider } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/circular-slider/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const OnSurface = meta.story({
  render: exampleRender(Examples.OnSurface),
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const Step = meta.story({
  render: exampleRender(Examples.Step),
});

export const Thickness = meta.story({
  render: exampleRender(Examples.Thickness),
});

export const WithValue = meta.story({
  render: exampleRender(Examples.WithValue),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const CustomMarkers = meta.story({
  render: exampleRender(Examples.CustomMarkers),
});

export const WithMarkers = meta.story({
  render: exampleRender(Examples.WithMarkers),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
