import { ToggleGroup } from "@pisagor/react";
import * as Examples from "#/react/examples/toggle-group";
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

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Sizes = meta.story({
  render: Examples.Sizes,
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

export const FontWeight = meta.story({
  render: Examples.FontWeight,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const DisabledItem = meta.story({
  render: Examples.DisabledItem,
});

export const Single = meta.story({
  render: Examples.Single,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
