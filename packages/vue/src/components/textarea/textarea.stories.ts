import { Field, Surface, Textarea } from "@pisagor/vue";
import { ref } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component:
          "Captures longer text such as messages, notes, and descriptions over multiple lines.",
      },
    },
  },
  title: "Components/Forms/Textarea",
});

export const Default = meta.story({
  render: () => ({
    components: { Textarea },
    template: '<Textarea placeholder="Enter your message" />',
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Textarea },
    template: `
      <div class="flex flex-col gap-2">
        <Textarea placeholder="Primary" variant="primary" />
        <Textarea placeholder="Secondary" variant="secondary" />
      </div>
    `,
  }),
});

export const OnSurface = meta.story({
  parameters: { layout: "fullscreen" },
  render: () => ({
    components: { Surface, Textarea },
    template: `
      <Surface bordered padding="md" variant="default">
        <div class="flex flex-col gap-2">
          <Textarea placeholder="Primary" variant="primary" />
          <Textarea placeholder="Secondary" variant="secondary" />
        </div>
      </Surface>
    `,
  }),
});

export const Autoresize = meta.story({
  render: () => ({
    components: { Textarea },
    template: '<Textarea autoresize placeholder="Type your message here" />',
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Textarea },
    template: '<Textarea disabled placeholder="Type your feedback here" />',
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { Textarea },
    template: '<Textarea invalid placeholder="Type your feedback here" />',
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Field, Textarea },
    setup() {
      const message = ref("");

      return { message };
    },
    template: `
      <Field class="flex flex-col gap-3">
        <Textarea :onValueChange="(value) => (message = value)" placeholder="Type your message here" :value="message" />
        <Field.Description class="text-right">Character count: {{ message.length }}</Field.Description>
      </Field>
    `,
  }),
});

export const Clearable = meta.story({
  render: () => ({
    components: { Textarea },
    setup() {
      const value = ref("Draft message");
      return { value };
    },
    template: '<Textarea v-model:value="value" clearable placeholder="Type to clear" />',
  }),
});

export const WithField = meta.story({
  render: () => ({
    components: { Field, Textarea },
    template: `
      <Field>
        <Field.Label>Message</Field.Label>
        <Textarea placeholder="Write your message" />
        <Field.Description>Markdown is supported.</Field.Description>
      </Field>
    `,
  }),
});
