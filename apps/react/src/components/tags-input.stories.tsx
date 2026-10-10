import { TagsInput } from "@pisagor/react";
import * as Examples from "#/react/examples/tags-input";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: TagsInput,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users add and remove multiple tags or chips as they build a list of values.",
      },
    },
  },
  title: "Components/Forms/Tags Input",
});

export const Playground = meta.story({
  render: Examples.Variants,
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const WithCombobox = meta.story({
  render: Examples.WithCombobox,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const ControlledInputValue = meta.story({
  render: Examples.ControlledInputValue,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const MaxTags = meta.story({
  render: Examples.MaxTags,
});

export const MaxWithOverflow = meta.story({
  render: Examples.MaxWithOverflow,
});

export const MaxLength = meta.story({
  render: Examples.MaxLength,
});

export const Validation = meta.story({
  render: Examples.Validation,
});

export const CustomDelimiter = meta.story({
  render: Examples.CustomDelimiter,
});

export const BlurBehavior = meta.story({
  render: Examples.BlurBehavior,
});

export const PasteBehavior = meta.story({
  render: Examples.PasteBehavior,
});

export const DisableEditing = meta.story({
  render: Examples.DisableEditing,
});

export const SanitizeValue = meta.story({
  render: Examples.SanitizeValue,
});
