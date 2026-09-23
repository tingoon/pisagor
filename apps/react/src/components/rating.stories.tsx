import { Rating } from "@pisagor/react";
import * as Examples from "@pisagor/react/rating/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Rating,
  parameters: {
    docs: {
      description: {
        component:
          "Collects or displays a star-style score so users can rate or review at a glance.",
      },
    },
  },
  title: "Components/Forms/Rating",
});

export const Playground = meta.story({
  render: Examples.Controlled,
  tags: ["autodocs"],
});

export const CustomColor = meta.story({
  render: Examples.CustomColor,
});

export const Count = meta.story({
  render: Examples.Count,
});

export const CustomIcon = meta.story({
  render: Examples.CustomIcon,
});

export const CustomSize = meta.story({
  render: Examples.CustomSize,
});

export const HalfStar = meta.story({
  render: Examples.HalfStar,
});

export const Testimonial = meta.story({
  render: Examples.Testimonial,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Readonly = meta.story({
  render: Examples.Readonly,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});
