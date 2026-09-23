import { Checkbox } from "@pisagor/react";
import * as Examples from "@pisagor/react/checkbox/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users turn an individual option on or off, alone or as part of a multi-select list.",
      },
    },
  },
  title: "Components/Forms/Checkbox",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Indeterminate = meta.story({
  render: Examples.Indeterminate,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const CheckboxGroup = meta.story({
  render: Examples.CheckboxGroup,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Default = meta.story({
  render: Examples.Default,
});
