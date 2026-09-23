import { PhoneInput } from "@pisagor/react/phone-input";
import * as Examples from "@pisagor/react/phone-input/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: PhoneInput,
  parameters: {
    docs: {
      description: {
        component:
          "Collects phone numbers with a searchable country selector and consistent international formatting.",
      },
    },
  },
  title: "Components/Forms/Phone Input",
});

export const Playground = meta.story({
  args: {
    defaultCountry: "NL",
    placeholder: "Enter phone number",
  },
  tags: ["autodocs"],
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const CustomPopup = meta.story({
  render: Examples.CustomPopup,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const Variants = meta.story({
  render: Examples.Variants,
});
