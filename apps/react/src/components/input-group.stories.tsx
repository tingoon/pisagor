import { InputGroup } from "@pisagor/react";
import * as Examples from "#/react/examples/input-group";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: InputGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Combines inputs with icons, buttons, or labels in one control so related actions stay together.",
      },
    },
  },
  title: "Components/Forms/Input Group",
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

export const AlignBlockEnd = meta.story({
  render: Examples.AlignBlockEnd,
});

export const AlignBlockStart = meta.story({
  render: Examples.AlignBlockStart,
});

export const AlignInlineEnd = meta.story({
  render: Examples.AlignInlineEnd,
});

export const AlignInlineStart = meta.story({
  render: Examples.AlignInlineStart,
});

export const WithTextarea = meta.story({
  render: Examples.WithTextarea,
});

export const WithBadge = meta.story({
  render: Examples.WithBadge,
});

export const WithKeyboardShortcut = meta.story({
  render: Examples.WithKeyboardShortcut,
});

export const WithSpinner = meta.story({
  render: Examples.WithSpinner,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});
