import { ToggleGroup } from "@pisagor/react";
import * as Examples from "@pisagor/react/toggle-group/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: ToggleGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users choose one or more pressed states from a row of related toggle buttons.",
      },
    },
  },
  title: "Components/Actions/Toggle Group",
});

export const Playground = meta.story({
  args: {
    defaultValue: ["bold"],
    items: [
      { children: "Bold", value: "bold" },
      { children: "Italic", value: "italic" },
      { children: "Underline", value: "underline" },
    ],
    multiple: true,
  },
  tags: ["autodocs"],
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Horizontal = meta.story({
  render: Examples.Horizontal,
});

export const Vertical = meta.story({
  render: Examples.Vertical,
});

export const Spacing = meta.story({
  render: Examples.Spacing,
});

export const DisabledItem = meta.story({
  render: Examples.DisabledItem,
});

export const FontWeight = meta.story({
  render: Examples.FontWeight,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Single = meta.story({
  render: Examples.Single,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const Default = meta.story({
  render: Examples.Default,
});
