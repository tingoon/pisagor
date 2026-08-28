import { useState } from "react";
import preview, { SurfaceDecorator } from "#/storybook/preview";
import { Field } from "..";
import { PhoneInput } from "./";

const meta = preview.meta({
  component: PhoneInput,
  parameters: {
    docs: {
      description: {
        component:
          "Collects phone numbers with a searchable country selector and consistent international formatting.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "pattern",
    },
  },
  title: "Components/Forms/Phone Input",
});

export const Default = meta.story({
  args: {
    defaultCountry: "NL",
    placeholder: "Enter phone number",
  },
});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <PhoneInput defaultCountry="NL" placeholder="Small" size="sm" />
      <PhoneInput defaultCountry="NL" placeholder="Medium" size="md" />
      <PhoneInput defaultCountry="NL" placeholder="Large" size="lg" />
    </div>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <PhoneInput defaultCountry="NL" placeholder="Primary" variant="primary" />
      <PhoneInput defaultCountry="NL" placeholder="Secondary" variant="secondary" />
    </div>
  ),
});

export const OnSurface = Variants.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const CustomPopup = meta.story({
  args: {
    classNames: { popup: "max-h-64" },
    defaultCountry: "NL",
    placeholder: "Enter phone number",
  },
});

export const Disabled = meta.story({
  args: {
    defaultCountry: "US",
    defaultValue: "+14155552671",
    disabled: true,
    placeholder: "Enter phone number",
  },
});

export const Invalid = meta.story({
  args: {
    defaultCountry: "US",
    invalid: true,
    placeholder: "Enter phone number",
  },
});

export const Controlled = meta.story({
  render: () => {
    const [phone, setPhone] = useState("+31612345678");

    return (
      <Field>
        <Field.Label>Phone</Field.Label>
        <PhoneInput
          defaultCountry="NL"
          onChange={setPhone}
          placeholder="Enter phone number"
          value={phone}
        />
        <Field.Description className="text-right">E.164 value: {phone || "—"}</Field.Description>
      </Field>
    );
  },
});
