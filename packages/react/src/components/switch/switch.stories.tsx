import { useState } from "react";
import preview, { SurfaceDecorator } from "#/storybook/preview";
import { Field, Switch } from "..";

const meta = preview.meta({
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: "Toggles a setting on or off with immediate visual feedback.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "standard",
    },
  },
  title: "Components/Forms/Switch",
});

export const Default = meta.story({
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <Field orientation="horizontal">
      <Switch {...args} />
      <Field.Label>Airplane mode</Field.Label>
    </Field>
  ),
});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Switch defaultChecked />
      <Switch className="[--size:--spacing(5)] sm:[--size:--spacing(6)]" defaultChecked />
    </div>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Switch variant="primary" />
      <Switch variant="secondary" />
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

export const Invalid = meta.story({
  args: {
    invalid: true,
  },
});

export const Controlled = meta.story({
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <Field.Group className="flex flex-col items-center gap-2">
        <Field orientation="horizontal">
          <Switch
            checked={checked}
            onCheckedChange={({ checked }) => setChecked(checked ?? false)}
          />
          <Field.Content>
            <Field.Label>Enable notifications</Field.Label>
          </Field.Content>
        </Field>
        <p className="text-center">{checked ? "✅" : "❌"}</p>
      </Field.Group>
    );
  },
});
