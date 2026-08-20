import { Field, RadioGroup, Surface } from "@pisagor/vue";
import { ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component: "Lets users pick exactly one option from a small set of related choices.",
      },
    },
  },
  subcomponents: {
    Item: RadioGroup.Item,
    Label: RadioGroup.Label,
    Root: RadioGroup.Root,
    Text: RadioGroup.Text,
  },
  title: "Components/Forms/Radio Group",
});

export const Default = meta.story({
  render: () => ({
    components: { RadioGroup },
    setup() {
      return {
        items: [
          { label: "Default", value: "1" },
          { label: "Comfortable", value: "2" },
          { label: "Compact", value: "3" },
        ],
      };
    },
    template: '<RadioGroup default-value="1" :items="items" />',
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { RadioGroup },
    template: `
      <div class="flex flex-col gap-2">
        <RadioGroup.Root default-value="primary">
          <RadioGroup.Item value="primary" variant="primary">Primary</RadioGroup.Item>
          <RadioGroup.Item value="secondary" variant="secondary">Secondary</RadioGroup.Item>
        </RadioGroup.Root>
      </div>
    `,
  }),
});

export const OnSurface = meta.story({
  parameters: { layout: "fullscreen" },
  render: () => ({
    components: { RadioGroup, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <div class="flex flex-col gap-2">
          <RadioGroup.Root default-value="primary">
            <RadioGroup.Item value="primary" variant="primary">Primary</RadioGroup.Item>
            <RadioGroup.Item value="secondary" variant="secondary">Secondary</RadioGroup.Item>
          </RadioGroup.Root>
        </div>
      </Surface>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { RadioGroup },
    setup() {
      return {
        allDisabledItems: [
          { label: "Default", value: "1" },
          { label: "Comfortable", value: "2" },
          { label: "Compact", value: "3" },
        ],
        partiallyDisabledItems: [
          { label: "Default", value: "1" },
          { disabled: true, label: "Comfortable", value: "2" },
          { label: "Compact", value: "3" },
        ],
      };
    },
    template: `
      <div class="flex flex-wrap gap-8">
        <RadioGroup default-value="1" :items="partiallyDisabledItems" />
        <RadioGroup disabled :items="allDisabledItems" />
      </div>
    `,
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { RadioGroup },
    setup() {
      return {
        items: [
          { label: "Default", value: "default" },
          { label: "Comfortable", value: "comfortable" },
          { label: "Compact", value: "compact" },
        ],
      };
    },
    template: '<RadioGroup invalid :items="items" />',
  }),
});

export const WithField = meta.story({
  render: () => ({
    components: { Field, RadioGroup },
    template: `
      <Field>
        <Field.Label>Theme</Field.Label>
        <RadioGroup default-value="light" :items="[
          { label: 'Light', value: 'light' },
          { label: 'Dark', value: 'dark' },
          { label: 'System', value: 'system' },
        ]" />
      </Field>
    `,
  }),
});

export const WithDescription = meta.story({
  render: () => ({
    components: { Field, RadioGroup },
    template: `
      <RadioGroup.Root default-value="all">
        <Field>
          <RadioGroup.Item value="all">Default</RadioGroup.Item>
          <Field.Description>Standard spacing for most use cases.</Field.Description>
        </Field>
        <Field>
          <RadioGroup.Item value="mentions">Comfortable</RadioGroup.Item>
          <Field.Description>More space between elements.</Field.Description>
        </Field>
        <Field>
          <RadioGroup.Item value="none">Compact</RadioGroup.Item>
          <Field.Description>Minimal spacing for dense layouts.</Field.Description>
        </Field>
      </RadioGroup.Root>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { RadioGroup },
    setup() {
      const value = ref<string | null>(null);
      const onValueChange = (next: string | null) => {
        value.value = next;
      };
      const items = [
        { label: "Default", value: "default" },
        { label: "Comfortable", value: "comfortable" },
        { label: "Compact", value: "compact" },
      ];

      return { items, onValueChange, value };
    },
    template: `
      <div class="flex flex-col items-center gap-2 text-center text-sm">
        <p>Select the option comfortable</p>
        <RadioGroup :items="items" :onValueChange="onValueChange" :value="value" />
        <p class="text-center">{{ value === "comfortable" ? "✅" : "❌" }}</p>
      </div>
    `,
  }),
});

export const Compound = meta.story({
  render: () => ({
    components: { RadioGroup },
    template: `
      <RadioGroup.Root default-value="a">
        <RadioGroup.Label>Notification channel</RadioGroup.Label>
        <RadioGroup.Item value="a">Email</RadioGroup.Item>
        <RadioGroup.Item value="b">SMS</RadioGroup.Item>
        <RadioGroup.Item value="c">Push</RadioGroup.Item>
      </RadioGroup.Root>
    `,
  }),
});
