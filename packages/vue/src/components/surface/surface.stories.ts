import { Checkbox, Field, Input, Select, Surface, Switch, Textarea } from "@pisagor/vue";
import { defineComponent } from "vue";
import preview from "#/storybook/preview";

const FormControlsDemo = defineComponent({
  components: { Checkbox, Field, Input, Select, Switch, Textarea },
  name: "FormControlsDemo",
  template: `
    <Field.Group>
      <Field>
        <Field.Label>Email</Field.Label>
        <Input clearable placeholder="you@example.com" />
      </Field>

      <Field>
        <Field.Label>Notes</Field.Label>
        <Textarea placeholder="Add context…" :rows="3" />
      </Field>

      <Field>
        <Field.Label>Team</Field.Label>
        <Select :items="['Design', 'Engineering', 'Marketing']" placeholder="Choose a team" />
      </Field>

      <Field orientation="horizontal">
        <Switch />
        <Field.Content>
          <Field.Label>Email notifications</Field.Label>
        </Field.Content>
      </Field>

      <Field orientation="horizontal">
        <Checkbox />
        <Field.Content>
          <Field.Label>Accept terms</Field.Label>
        </Field.Content>
      </Field>
    </Field.Group>
  `,
});

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
  render: () => ({
    components: { Surface },
    template: `
      <Surface bordered padding="md" class="flex flex-col gap-2">
        <h3 class="font-semibold text-sm">Default surface</h3>
        <p class="text-muted-foreground text-sm">
          Base elevation for grouped content sitting on the page background.
        </p>
      </Surface>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Surface },
    template: `
      <div class="grid w-full gap-2 md:grid-cols-2">
        <Surface bordered padding="md" variant="default" class="flex flex-col gap-2">
          <h3 class="font-semibold text-sm">Default</h3>
          <p class="text-muted-foreground text-sm">Uses the page background token.</p>
        </Surface>
        <Surface bordered padding="md" variant="secondary" class="flex flex-col gap-2">
          <h3 class="font-semibold text-sm">Secondary</h3>
          <p class="text-muted-foreground text-sm">First nested emphasis level.</p>
        </Surface>
        <Surface bordered padding="md" variant="tertiary" class="flex flex-col gap-2">
          <h3 class="font-semibold text-sm">Tertiary</h3>
          <p class="text-muted-foreground text-sm">Second nested emphasis level.</p>
        </Surface>
        <Surface bordered padding="md" variant="transparent" class="flex flex-col gap-2">
          <h3 class="font-semibold text-sm">Transparent</h3>
          <p class="text-muted-foreground text-sm">No fill — useful for custom backgrounds.</p>
        </Surface>
      </div>
    `,
  }),
});

export const Padding = meta.story({
  render: () => ({
    components: { Surface },
    template: `
      <div class="flex flex-col gap-2">
        <Surface bordered class="text-sm" padding="sm" variant="secondary">
          Small padding
        </Surface>
        <Surface bordered class="text-sm" padding="md" variant="secondary">
          Medium padding
        </Surface>
        <Surface bordered class="text-sm" padding="lg" variant="secondary">
          Large padding
        </Surface>
      </div>
    `,
  }),
});

export const Nested = meta.story({
  render: () => ({
    components: { Surface },
    template: `
      <Surface bordered padding="lg" class="flex flex-col gap-2">
        <div>
          <h3 class="font-semibold text-sm">Outer surface</h3>
          <p class="text-muted-foreground text-sm">Explicit default variant at depth 0.</p>
        </div>
        <Surface bordered padding="md" class="flex flex-col gap-2">
          <h4 class="font-medium text-sm">Nested surface</h4>
          <p class="text-muted-foreground text-sm">
            Auto-resolves to secondary at depth 1 when variant is omitted.
          </p>
          <Surface bordered padding="sm" class="flex flex-col gap-2">
            <h5 class="font-medium text-sm">Deeply nested</h5>
            <p class="text-muted-foreground text-sm">Auto-resolves to tertiary at depth 2.</p>
          </Surface>
        </Surface>
      </Surface>
    `,
  }),
});

export const WithFormControls = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Form controls inside a Surface use their own `variant` prop (default `primary`).",
      },
    },
  },
  render: () => ({
    components: { FormControlsDemo, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <div class="mb-4">
          <h3 class="font-semibold text-sm">Settings</h3>
          <p class="text-muted-foreground text-sm">Grouped controls on a surface background.</p>
        </div>
        <FormControlsDemo />
      </Surface>
    `,
  }),
});
