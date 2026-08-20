import { Field, Surface } from "@pisagor/vue";
import { PhoneInput } from "@pisagor/vue/phone-input";
import { ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: PhoneInput,
  parameters: {
    docs: {
      description: {
        component: "Phone number input with optional globe flag preview.",
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
  render: () => ({
    components: { PhoneInput },
    template: '<PhoneInput placeholder="Enter phone number" />',
  }),
});

export const Sizes = meta.story({
  render: () => ({
    components: { PhoneInput },
    template: `
      <div class="flex flex-col gap-2">
        <PhoneInput placeholder="Small" size="sm" />
        <PhoneInput placeholder="Medium" size="md" />
        <PhoneInput placeholder="Large" size="lg" />
      </div>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { PhoneInput },
    template: `
      <div class="flex flex-col gap-2">
        <PhoneInput placeholder="Primary" variant="primary" />
        <PhoneInput placeholder="Secondary" variant="secondary" />
      </div>
    `,
  }),
});

export const OnSurface = meta.story({
  parameters: { layout: "fullscreen" },
  render: () => ({
    components: { PhoneInput, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <div class="flex flex-col gap-2">
          <PhoneInput placeholder="Primary" variant="primary" />
          <PhoneInput placeholder="Secondary" variant="secondary" />
        </div>
      </Surface>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { PhoneInput },
    template:
      '<PhoneInput default-value="+14155552671" disabled placeholder="Enter phone number" />',
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { PhoneInput },
    template: '<PhoneInput invalid placeholder="Enter phone number" />',
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Field, PhoneInput },
    setup() {
      const phone = ref("+31612345678");
      const onChange = (next: string) => {
        phone.value = next;
      };

      return { onChange, phone };
    },
    template: `
      <Field>
        <Field.Label>Phone</Field.Label>
        <PhoneInput :onChange="onChange" placeholder="Enter phone number" :value="phone" />
        <Field.Description class="text-right">E.164 value: {{ phone || "—" }}</Field.Description>
      </Field>
    `,
  }),
});
