import { TagsInput } from "@pisagor/react";
import * as Examples from "@pisagor/react/tags-input/examples";
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
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const BlurBehavior = meta.story({
  render: Examples.BlurBehavior,
});

export const CustomDelimiter = meta.story({
  render: Examples.CustomDelimiter,
});

export const DisableEditing = meta.story({
  render: Examples.DisableEditing,
});

export const MaxTags = meta.story({
  render: Examples.MaxTags,
});

export const PasteBehavior = meta.story({
  render: Examples.PasteBehavior,
});

export const SanitizeValue = meta.story({
  render: Examples.SanitizeValue,
});

export const Validation = meta.story({
  render: Examples.Validation,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const WithCombobox = meta.story({
  render: Examples.WithCombobox,
});

export const MaxLength = meta.story({
  render: Examples.MaxLength,
});

export const MaxWithOverflow = meta.story({
  render: Examples.MaxWithOverflow,
});

export const ControlledInputValue = meta.story({
  render: Examples.ControlledInputValue,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Default = meta.story({
  render: Examples.Default,
});
