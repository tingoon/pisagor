import { Rating } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/rating/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Rating,
  parameters: {
    docs: {
      description: {
        component: "A star rating component built on Ark UI rating-group.",
      },
    },
  },
  title: "Components/Forms/Rating",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const OnSurface = meta.story({
  render: exampleRender(Examples.OnSurface),
});

export const CustomColor = meta.story({
  render: exampleRender(Examples.CustomColor),
});

export const Count = meta.story({
  render: exampleRender(Examples.Count),
});

export const CustomIcon = meta.story({
  render: exampleRender(Examples.CustomIcon),
});

export const CustomSize = meta.story({
  render: exampleRender(Examples.CustomSize),
});

export const HalfStar = meta.story({
  render: exampleRender(Examples.HalfStar),
});

export const Testimonial = meta.story({
  render: exampleRender(Examples.Testimonial),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Readonly = meta.story({
  render: exampleRender(Examples.Readonly),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
