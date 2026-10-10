import { Textarea } from "@pisagor/react";
import * as Examples from "#/react/examples/textarea";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component:
          "Captures longer text such as messages, notes, and descriptions over multiple lines.",
      },
    },
  },
  title: "Components/Forms/Textarea",
});

export const Playground = meta.story({
  args: {
    placeholder: "Enter your message",
  },
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const Autoresize = meta.story({
  render: Examples.Autoresize,
});

export const Clearable = meta.story({
  render: Examples.Clearable,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
