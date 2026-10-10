import { CircularSlider } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/circular-slider";

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

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const Thickness = meta.story({
  render: exampleRender(Examples.Thickness),
});

export const WithValue = meta.story({
  render: exampleRender(Examples.WithValue),
});

export const WithMarkers = meta.story({
  render: exampleRender(Examples.WithMarkers),
});

export const CustomMarkers = meta.story({
  render: exampleRender(Examples.CustomMarkers),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Step = meta.story({
  render: exampleRender(Examples.Step),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
