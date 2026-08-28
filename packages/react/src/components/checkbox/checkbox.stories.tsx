import type { CheckboxCheckedState } from "@ark-ui/react";
import { useState } from "react";
import preview, { SurfaceDecorator } from "#/storybook/preview";
import { Checkbox, Field } from "..";

const meta = preview.meta({
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users turn an individual option on or off, alone or as part of a multi-select list.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Group: Checkbox.Group,
  },
  title: "Components/Forms/Checkbox",
});

export const Default = meta.story({
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <Field orientation="horizontal">
      <Checkbox {...args} />
      <Field.Label>Accept terms and conditions</Field.Label>
    </Field>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Checkbox variant="primary" />
      <Checkbox variant="secondary" />
    </div>
  ),
});

export const OnSurface = Variants.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const Disabled = meta.story({
  args: {
    disabled: true,
  },
});

export const Indeterminate = meta.story({
  args: {
    checked: "indeterminate",
  },
  render: (args) => (
    <Field.Group>
      <Field orientation="horizontal">
        <Checkbox {...args} />
        <Field.Content>
          <Field.Label>Select all items</Field.Label>
        </Field.Content>
      </Field>
    </Field.Group>
  ),
});

export const Invalid = meta.story({
  args: {
    invalid: true,
  },
});

export const CheckboxGroup = meta.story({
  render: () => (
    <Field.Set>
      <Field.Legend variant="label">Show these items on the desktop:</Field.Legend>
      <Field.Description>Select the items you want to show on the desktop.</Field.Description>
      <Field.Group>
        <Checkbox.Group className="gap-3" defaultValue={["hard-disks", "external-disks"]}>
          <Field orientation="horizontal">
            <Checkbox defaultChecked value="hard-disks" />
            <Field.Label className="font-normal">Hard disks</Field.Label>
          </Field>
          <Field orientation="horizontal">
            <Checkbox defaultChecked value="external-disks" />
            <Field.Label className="font-normal">External disks</Field.Label>
          </Field>
          <Field orientation="horizontal">
            <Checkbox value="cds-dvds-ipods" />
            <Field.Label className="font-normal">CDs, DVDs, and iPods</Field.Label>
          </Field>
          <Field orientation="horizontal">
            <Checkbox value="connected-servers" />
            <Field.Label className="font-normal">Connected servers</Field.Label>
          </Field>
        </Checkbox.Group>
      </Field.Group>
    </Field.Set>
  ),
});

export const Controlled = meta.story({
  render: () => {
    const [checked, setChecked] = useState<CheckboxCheckedState>(false);

    return (
      <Field.Group>
        <Field orientation="horizontal">
          <Checkbox checked={checked} onCheckedChange={({ checked }) => setChecked(checked)} />
          <Field.Label>Accept terms and conditions</Field.Label>
        </Field>
        <p className="text-center">{checked ? "✅" : "❌"}</p>
      </Field.Group>
    );
  },
});
