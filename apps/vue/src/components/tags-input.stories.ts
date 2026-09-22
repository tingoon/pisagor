import { TagsInput } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/tags-input/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: TagsInput,
  parameters: {
    docs: {
      description: {
        component: "Lets users enter multiple values as tags.",
      },
    },
  },
  title: "Components/Forms/Tags Input",
});

export const Playground = meta.story({
  tags: ["autodocs"],
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

export const BlurBehavior = meta.story({
  render: exampleRender(Examples.BlurBehavior),
});

export const CustomDelimiter = meta.story({
  render: exampleRender(Examples.CustomDelimiter),
});

export const DisableEditing = meta.story({
  render: exampleRender(Examples.DisableEditing),
});

export const MaxTags = meta.story({
  render: exampleRender(Examples.MaxTags),
});

export const PasteBehavior = meta.story({
  render: exampleRender(Examples.PasteBehavior),
});

export const SanitizeValue = meta.story({
  render: exampleRender(Examples.SanitizeValue),
});

export const Validation = meta.story({
  render: exampleRender(Examples.Validation),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const WithCombobox = meta.story({
  render: exampleRender(Examples.WithCombobox),
});

export const MaxLength = meta.story({
  render: exampleRender(Examples.MaxLength),
});

export const MaxWithOverflow = meta.story({
  render: exampleRender(Examples.MaxWithOverflow),
});

export const ControlledInputValue = meta.story({
  render: exampleRender(Examples.ControlledInputValue),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
