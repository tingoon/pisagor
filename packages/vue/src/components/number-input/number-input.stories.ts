import { Field, NumberInput, Surface } from "@pisagor/vue";
import { ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: NumberInput,
  parameters: {
    docs: {
      description: {
        component:
          "Captures numeric values with optional steppers and validation for quantities and settings.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    ClearTrigger: NumberInput.ClearTrigger,
    Control: NumberInput.Control,
    DecrementTrigger: NumberInput.DecrementTrigger,
    IncrementTrigger: NumberInput.IncrementTrigger,
    Input: NumberInput.Input,
    Scrubber: NumberInput.Scrubber,
  },
  title: "Components/Forms/Number Input",
});

export const Default = meta.story({
  render: () => ({
    components: { NumberInput },
    template: '<NumberInput default-value="1" />',
  }),
});

export const Sizes = meta.story({
  render: () => ({
    components: { NumberInput },
    template: `
      <div class="flex flex-col gap-2">
        <NumberInput default-value="10" size="sm" />
        <NumberInput default-value="10" size="md" />
        <NumberInput default-value="10" size="lg" />
      </div>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { NumberInput },
    template: `
      <div class="flex flex-col gap-2">
        <NumberInput default-value="1" variant="primary" />
        <NumberInput default-value="1" variant="secondary" />
      </div>
    `,
  }),
});

export const OnSurface = meta.story({
  parameters: { layout: "fullscreen" },
  render: () => ({
    components: { NumberInput, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <div class="flex flex-col gap-2">
          <NumberInput default-value="1" variant="primary" />
          <NumberInput default-value="1" variant="secondary" />
        </div>
      </Surface>
    `,
  }),
});

export const WithField = meta.story({
  render: () => ({
    components: { Field, NumberInput },
    template: `
      <Field>
        <Field.Label>Quantity</Field.Label>
        <NumberInput default-value="1" placeholder="0" />
        <Field.Description>Choose how many items to order.</Field.Description>
      </Field>
    `,
  }),
});

export const FieldOnly = meta.story({
  render: () => ({
    components: { NumberInput },
    template: `
      <NumberInput default-value="0">
        <NumberInput.Control>
          <NumberInput.Input />
        </NumberInput.Control>
      </NumberInput>
    `,
  }),
});

export const Formatted = meta.story({
  render: () => ({
    components: { NumberInput },
    template: `
      <NumberInput
        default-value="19.00"
        :format-options="{ currency: 'USD', style: 'currency' }"
      >
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
    `,
  }),
});

export const MouseWheel = meta.story({
  render: () => ({
    components: { NumberInput },
    template: `
      <NumberInput allow-mouse-wheel default-value="10">
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
    `,
  }),
});

export const Range = meta.story({
  render: () => ({
    components: { NumberInput },
    template: `
      <NumberInput default-value="5" :max="10" :min="0">
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
    `,
  }),
});

export const Compound = meta.story({
  render: () => ({
    components: { NumberInput },
    template: `
      <NumberInput default-value="5">
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input placeholder="0" />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
    `,
  }),
});

export const WithScrubber = meta.story({
  render: () => ({
    components: { NumberInput },
    template: `
      <NumberInput default-value="10">
        <NumberInput.Scrubber>Opacity</NumberInput.Scrubber>
        <NumberInput.Control>
          <NumberInput.Input />
        </NumberInput.Control>
      </NumberInput>
    `,
  }),
});

export const Step = meta.story({
  render: () => ({
    components: { Field, NumberInput },
    template: `
      <div class="flex flex-col gap-6">
        <NumberInput default-value="0" :step="5">
          <Field.Label>Step 5</Field.Label>
          <NumberInput.Control>
            <NumberInput.DecrementTrigger />
            <NumberInput.Input />
            <NumberInput.IncrementTrigger />
          </NumberInput.Control>
        </NumberInput>
        <NumberInput default-value="0.1" :step="0.1">
          <Field.Label>Step 0.1</Field.Label>
          <NumberInput.Control>
            <NumberInput.DecrementTrigger />
            <NumberInput.Input />
            <NumberInput.IncrementTrigger />
          </NumberInput.Control>
        </NumberInput>
      </div>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { NumberInput },
    template: '<NumberInput default-value="1" disabled />',
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { NumberInput },
    template: '<NumberInput default-value="32" invalid />',
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { NumberInput },
    setup() {
      const value = ref("1");
      const onValueChange = (next: number) => {
        value.value = String(next);
      };

      return { onValueChange, value };
    },
    template: `
      <div class="flex flex-col gap-2 text-center text-sm">
        <p>Select the number 3</p>
        <NumberInput :onValueChange="onValueChange" :value="value">
          <NumberInput.Control>
            <NumberInput.DecrementTrigger />
            <NumberInput.Input />
            <NumberInput.IncrementTrigger />
          </NumberInput.Control>
        </NumberInput>
        <p class="text-center">{{ value === "3" ? "✅" : "❌" }}</p>
      </div>
    `,
  }),
});
