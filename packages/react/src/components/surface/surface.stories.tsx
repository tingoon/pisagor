import { createListCollection } from "@ark-ui/react";
import { Checkbox, Field, Input, Select, Surface, Switch, Textarea } from "@pisagor/react";
import preview from "#/storybook/preview";

const selectCollection = createListCollection({
  items: ["Design", "Engineering", "Marketing"],
});

function FormControlsDemo() {
  return (
    <Field.Group>
      <Field>
        <Field.Label htmlFor="surface-email">Email</Field.Label>
        <Input clearable id="surface-email" placeholder="you@example.com" />
      </Field>

      <Field>
        <Field.Label htmlFor="surface-notes">Notes</Field.Label>
        <Textarea id="surface-notes" placeholder="Add context…" rows={3} />
      </Field>

      <Field>
        <Field.Label htmlFor="surface-team">Team</Field.Label>
        <Select.Root collection={selectCollection} id="surface-team">
          <Select.Trigger>
            <Select.ValueText placeholder="Choose a team" />
          </Select.Trigger>
          <Select.Content>
            {selectCollection.items.map((item) => (
              <Select.Item item={item} key={item}>
                {item}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </Field>

      <Field orientation="horizontal">
        <Switch id="surface-notify" />
        <Field.Content>
          <Field.Label htmlFor="surface-notify">Email notifications</Field.Label>
        </Field.Content>
      </Field>

      <Field orientation="horizontal">
        <Checkbox id="surface-terms" />
        <Field.Content>
          <Field.Label htmlFor="surface-terms">Accept terms</Field.Label>
        </Field.Content>
      </Field>
    </Field.Group>
  );
}

const meta = preview.meta({
  component: Surface,
  parameters: {
    docs: {
      description: {
        component:
          "Provides a semantic background layer for grouped content such as cards and panels, with automatic elevation for nested sections.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Layout/Surface",
});

export const Default = meta.story({
  args: {
    bordered: true,
    className: "flex flex-col gap-2",
    padding: "md",
  },
  render: (args) => (
    <Surface {...args}>
      <h3 className="font-semibold text-sm">Default surface</h3>
      <p className="text-muted-foreground text-sm">
        Base elevation for grouped content sitting on the page background.
      </p>
    </Surface>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="grid w-full gap-2 md:grid-cols-2">
      <Surface bordered className="flex flex-col gap-2" padding="md" variant="default">
        <h3 className="font-semibold text-sm">Default</h3>
        <p className="text-muted-foreground text-sm">Uses the page background token.</p>
      </Surface>
      <Surface bordered className="flex flex-col gap-2" padding="md" variant="secondary">
        <h3 className="font-semibold text-sm">Secondary</h3>
        <p className="text-muted-foreground text-sm">First nested emphasis level.</p>
      </Surface>
      <Surface bordered className="flex flex-col gap-2" padding="md" variant="tertiary">
        <h3 className="font-semibold text-sm">Tertiary</h3>
        <p className="text-muted-foreground text-sm">Second nested emphasis level.</p>
      </Surface>
      <Surface bordered className="flex flex-col gap-2" padding="md" variant="transparent">
        <h3 className="font-semibold text-sm">Transparent</h3>
        <p className="text-muted-foreground text-sm">No fill — useful for custom backgrounds.</p>
      </Surface>
    </div>
  ),
});

export const Padding = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <Surface bordered className="text-sm" padding="sm" variant="secondary">
        Small padding
      </Surface>
      <Surface bordered className="text-sm" padding="md" variant="secondary">
        Medium padding
      </Surface>
      <Surface bordered className="text-sm" padding="lg" variant="secondary">
        Large padding
      </Surface>
    </div>
  ),
});

export const Nested = meta.story({
  render: () => (
    <Surface bordered className="flex flex-col gap-2" padding="lg">
      <div>
        <h3 className="font-semibold text-sm">Outer surface</h3>
        <p className="text-muted-foreground text-sm">Explicit default variant at depth 0.</p>
      </div>
      <Surface bordered className="flex flex-col gap-2" padding="md">
        <h4 className="font-medium text-sm">Nested surface</h4>
        <p className="text-muted-foreground text-sm">
          Auto-resolves to secondary at depth 1 when `variant` is omitted.
        </p>
        <Surface bordered className="flex flex-col gap-2" padding="sm">
          <h5 className="font-medium text-sm">Deeply nested</h5>
          <p className="text-muted-foreground text-sm">Auto-resolves to tertiary at depth 2.</p>
        </Surface>
      </Surface>
    </Surface>
  ),
});

export const WithFormControls = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Form controls inside a Surface use their own `variant` prop (default `primary`).",
      },
    },
  },
  render: () => (
    <Surface bordered padding="md" variant="default">
      <div className="mb-4">
        <h3 className="font-semibold text-sm">Settings</h3>
        <p className="text-muted-foreground text-sm">Grouped controls on a surface background.</p>
      </div>
      <FormControlsDemo />
    </Surface>
  ),
});
