import { PasswordInput } from "@pisagor/react";
import * as Examples from "@pisagor/react/password-input/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: PasswordInput,
  parameters: {
    docs: {
      description: {
        component:
          "Collects passwords with a show-hide control so users can enter credentials securely and verify them.",
      },
    },
  },
  title: "Components/Forms/Password Input",
});

export const Playground = meta.story({
  args: {
    placeholder: "Enter password",
  },
  tags: ["autodocs"],
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const Autocomplete = meta.story({
  render: Examples.Autocomplete,
});

export const AutoHide = meta.story({
  render: Examples.AutoHide,
});

export const ControlledVisibility = meta.story({
  render: Examples.ControlledVisibility,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Default = meta.story({
  render: Examples.Default,
});
