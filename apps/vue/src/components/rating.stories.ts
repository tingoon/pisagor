import { Rating } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/rating";

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

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Count = meta.story({
  render: exampleRender(Examples.Count),
});

export const HalfStar = meta.story({
  render: exampleRender(Examples.HalfStar),
});

export const CustomIcon = meta.story({
  render: exampleRender(Examples.CustomIcon),
});

export const Testimonial = meta.story({
  render: exampleRender(Examples.Testimonial),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const Readonly = meta.story({
  render: exampleRender(Examples.Readonly),
});

export const CustomColor = meta.story({
  render: exampleRender(Examples.CustomColor),
});

export const CustomSize = meta.story({
  render: exampleRender(Examples.CustomSize),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
