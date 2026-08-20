import { createListCollection } from "@ark-ui/react";
import { Checkbox, Field, Input, Select, Surface, Switch, Textarea } from "@pisagor/react";
import preview from "#/storybook/preview";

const selectCollection = createListCollection({
  items: ["Design", "Engineering", "Marketing"],
});

function FormControlsDemo({ showOverride }: { showOverride?: boolean }) {
  return (
    <Field.Group className="max-w-md">
      <Field>
        <Field.Label htmlFor="surface-email">Email</Field.Label>
        <Input
          clearable
          id="surface-email"
          placeholder="you@example.com"
          variant={showOverride ? "primary" : undefined}
        />
      </Field>

      <Field>
        <Field.Label htmlFor="surface-notes">Notes</Field.Label>
        <Textarea id="surface-notes" placeholder="Add context…" rows={3} />
      </Field>

      <Field>
        <Field.Label htmlFor="surface-team">Team</Field.Label>
        <Select.Root collection={selectCollection} id="surface-team">
          <Select.Trigger>
            <Select.Value placeholder="Choose a team" />
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
      api: "closed",
      checklist: {
        definedBehaviors: true,
        definedOptions: true,
        platformScales: true,
      },
      description: {
        component:
          "Provides a semantic background layer for grouped content such as cards and panels, with automatic elevation for nested sections.",
      },
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
    <div className="grid w-full max-w-3xl gap-2 md:grid-cols-2">
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
    <Surface bordered className="flex flex-col gap-4" padding="lg">
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
        story:
          'Form controls inside a default Surface automatically resolve to the inset secondary shell (`bg-muted/40`, `data-variant="secondary"`).',
      },
    },
  },
  render: () => (
    <Surface bordered padding="md" variant="default">
      <div className="mb-4">
        <h3 className="font-semibold text-sm">Settings</h3>
        <p className="text-muted-foreground text-sm">
          Controls inherit inset shells without passing `variant`.
        </p>
      </div>
      <FormControlsDemo />
    </Surface>
  ),
});

export const OnMutedSurface = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "On secondary or tertiary surfaces, controls use the elevated secondary shell (`bg-background`).",
      },
    },
  },
  render: () => (
    <div className="grid w-full max-w-3xl gap-6 md:grid-cols-2">
      <Surface bordered padding="md" variant="secondary">
        <h3 className="mb-4 font-semibold text-sm">Secondary surface</h3>
        <FormControlsDemo />
      </Surface>
      <Surface bordered padding="md" variant="tertiary">
        <h3 className="mb-4 font-semibold text-sm">Tertiary surface</h3>
        <FormControlsDemo />
      </Surface>
    </div>
  ),
});

export const NestedSurfaces = meta.story({
  render: () => (
    <Surface bordered padding="lg" variant="default">
      <h3 className="mb-2 font-semibold text-sm">Outer (default → inset controls)</h3>
      <Input className="mb-4" placeholder="Outer input" />
      <Surface bordered className="flex flex-col gap-4" padding="md">
        <div>
          <h4 className="font-medium text-sm">Nested (secondary → elevated controls)</h4>
          <Input placeholder="Nested input" />
        </div>
        <Surface bordered className="flex flex-col gap-2" padding="sm">
          <h5 className="font-medium text-sm">Deep (tertiary → elevated controls)</h5>
          <Input placeholder="Deep nested input" />
        </Surface>
      </Surface>
    </Surface>
  ),
});

export const TransparentSurface = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Transparent surfaces disable automatic secondary shells — controls stay primary.",
      },
    },
  },
  render: () => (
    <Surface bordered padding="md" variant="transparent">
      <h3 className="mb-4 font-semibold text-sm">Transparent surface</h3>
      <FormControlsDemo />
    </Surface>
  ),
});

export const OverridePrimary = meta.story({
  render: () => (
    <Surface bordered padding="md" variant="default">
      <div className="mb-4">
        <h3 className="font-semibold text-sm">Explicit primary override</h3>
        <p className="text-muted-foreground text-sm">
          Pass `variant="primary"` to keep the page-level shell inside a Surface.
        </p>
      </div>
      <FormControlsDemo showOverride />
    </Surface>
  ),
});

export const OutsideSurface = meta.story({
  render: () => (
    <div className="grid w-full max-w-3xl gap-8 lg:grid-cols-2">
      <div>
        <h3 className="mb-4 font-semibold text-sm">Outside Surface (primary)</h3>
        <FormControlsDemo />
      </div>
      <Surface bordered padding="md" variant="default">
        <h3 className="mb-4 font-semibold text-sm">Inside Surface (inset secondary)</h3>
        <FormControlsDemo />
      </Surface>
    </div>
  ),
});
