import { Checkbox } from "@pisagor/vue/checkbox";
import { Field } from "@pisagor/vue/field";
import { Input } from "@pisagor/vue/input";
import { Select } from "@pisagor/vue/select";
import { Surface } from "@pisagor/vue/surface";
import { Switch } from "@pisagor/vue/switch";
import { Textarea } from "@pisagor/vue/textarea";
import { defineComponent } from "vue";
import preview from "#/vue/preview";

const FormControlsDemo = defineComponent({
  components: { Checkbox, Field, Input, Select, Switch, Textarea },
  name: "FormControlsDemo",
  props: {
    showOverride: { default: false, type: Boolean },
  },
  template: `
    <Field.Group class="max-w-md">
      <Field>
        <Field.Label>Email</Field.Label>
        <Input clearable placeholder="you@example.com" :variant="showOverride ? 'primary' : undefined" />
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
      <div class="grid w-full max-w-3xl gap-2 md:grid-cols-2">
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
      <Surface bordered padding="lg" class="flex flex-col gap-4">
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
        story:
          'Form controls inside a default Surface automatically resolve to the inset secondary shell (`bg-muted/40`, `data-variant="secondary"`).',
      },
    },
  },
  render: () => ({
    components: { FormControlsDemo, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <div class="mb-4">
          <h3 class="font-semibold text-sm">Settings</h3>
          <p class="text-muted-foreground text-sm">
            Controls inherit inset shells without passing variant.
          </p>
        </div>
        <FormControlsDemo />
      </Surface>
    `,
  }),
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
  render: () => ({
    components: { FormControlsDemo, Surface },
    template: `
      <div class="grid w-full max-w-3xl gap-6 md:grid-cols-2">
        <Surface bordered padding="md" variant="secondary">
          <h3 class="mb-4 font-semibold text-sm">Secondary surface</h3>
          <FormControlsDemo />
        </Surface>
        <Surface bordered padding="md" variant="tertiary">
          <h3 class="mb-4 font-semibold text-sm">Tertiary surface</h3>
          <FormControlsDemo />
        </Surface>
      </div>
    `,
  }),
});

export const NestedSurfaces = meta.story({
  render: () => ({
    components: { Input, Surface },
    template: `
      <Surface bordered padding="lg" variant="default">
        <h3 class="mb-2 font-semibold text-sm">Outer (default → inset controls)</h3>
        <Input class="mb-4" placeholder="Outer input" />
        <Surface bordered class="flex flex-col gap-4" padding="md">
          <div>
            <h4 class="font-medium text-sm">Nested (secondary → elevated controls)</h4>
            <Input placeholder="Nested input" />
          </div>
          <Surface bordered class="flex flex-col gap-2" padding="sm">
            <h5 class="font-medium text-sm">Deep (tertiary → elevated controls)</h5>
            <Input placeholder="Deep nested input" />
          </Surface>
        </Surface>
      </Surface>
    `,
  }),
});

export const TransparentSurface = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Transparent surfaces disable automatic secondary shells — controls stay primary.",
      },
    },
  },
  render: () => ({
    components: { FormControlsDemo, Surface },
    template: `
      <Surface bordered padding="md" variant="transparent">
        <h3 class="mb-4 font-semibold text-sm">Transparent surface</h3>
        <FormControlsDemo />
      </Surface>
    `,
  }),
});

export const OverridePrimary = meta.story({
  render: () => ({
    components: { FormControlsDemo, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <div class="mb-4">
          <h3 class="font-semibold text-sm">Explicit primary override</h3>
          <p class="text-muted-foreground text-sm">
            Pass variant="primary" to keep the page-level shell inside a Surface.
          </p>
        </div>
        <FormControlsDemo :show-override="true" />
      </Surface>
    `,
  }),
});

export const OutsideSurface = meta.story({
  render: () => ({
    components: { FormControlsDemo, Surface },
    template: `
      <div class="grid w-full max-w-3xl gap-8 lg:grid-cols-2">
        <div>
          <h3 class="mb-4 font-semibold text-sm">Outside Surface (primary)</h3>
          <FormControlsDemo />
        </div>
        <Surface bordered padding="md" variant="default">
          <h3 class="mb-4 font-semibold text-sm">Inside Surface (inset secondary)</h3>
          <FormControlsDemo />
        </Surface>
      </div>
    `,
  }),
});
