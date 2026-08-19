import { Checkbox } from "@pisagor/vue/checkbox";
import { Field } from "@pisagor/vue/field";
import { Surface } from "@pisagor/vue/surface";
import { ref } from "vue";
import preview from "#/vue/preview";

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
  subcomponents: {
    Group: Checkbox.Group,
  },
  title: "Components/Forms/Checkbox",
});

export const Default = meta.story({
  render: () => ({
    components: { Checkbox },
    template: `
      <label class="flex items-center gap-2 text-sm">
        <Checkbox default-checked />
        Accept terms and conditions
      </label>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Checkbox },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <Checkbox variant="primary" />
        <Checkbox variant="secondary" />
      </div>
    `,
  }),
});

export const OnSurface = meta.story({
  render: () => ({
    components: { Checkbox, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <Checkbox default-checked />
      </Surface>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Checkbox },
    template: `<Checkbox disabled />`,
  }),
});

export const Indeterminate = meta.story({
  render: () => ({
    components: { Checkbox },
    template: `
      <label class="flex items-center gap-2 text-sm">
        <Checkbox checked="indeterminate" />
        Select all items
      </label>
    `,
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { Checkbox },
    template: `<Checkbox invalid />`,
  }),
});

export const CheckboxGroup = meta.story({
  render: () => ({
    components: { Checkbox, Field },
    template: `
      <Field.Set>
        <Field.Legend variant="label">Show these items on the desktop:</Field.Legend>
        <Field.Description>Select the items you want to show on the desktop.</Field.Description>
        <Field.Group>
          <Checkbox.Group class="gap-3" :default-value="['hard-disks', 'external-disks']">
            <Field orientation="horizontal">
              <Checkbox default-checked value="hard-disks" />
              <Field.Label class="font-normal">Hard disks</Field.Label>
            </Field>
            <Field orientation="horizontal">
              <Checkbox default-checked value="external-disks" />
              <Field.Label class="font-normal">External disks</Field.Label>
            </Field>
            <Field orientation="horizontal">
              <Checkbox value="cds-dvds-ipods" />
              <Field.Label class="font-normal">CDs, DVDs, and iPods</Field.Label>
            </Field>
            <Field orientation="horizontal">
              <Checkbox value="connected-servers" />
              <Field.Label class="font-normal">Connected servers</Field.Label>
            </Field>
          </Checkbox.Group>
        </Field.Group>
      </Field.Set>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Checkbox },
    setup() {
      const checked = ref(true);
      return { checked };
    },
    template: `
      <div class="flex flex-col items-center gap-2">
        <Checkbox v-model:checked="checked" />
        <p class="text-muted-foreground text-sm">{{ checked ? 'Checked' : 'Unchecked' }}</p>
      </div>
    `,
  }),
});
