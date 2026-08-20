import { Field, Input, Surface } from "@pisagor/vue";
import { ref } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          "Captures a single line of text from the user for names, search terms, and other short values.",
      },
    },
  },
  title: "Components/Forms/Input",
});

export const Default = meta.story({
  render: () => ({
    components: { Input },
    template: '<Input placeholder="Enter your message" />',
  }),
});

export const Sizes = meta.story({
  render: () => ({
    components: { Input },
    template: `
      <div class="flex flex-col gap-2">
        <Input placeholder="Small" size="sm" />
        <Input placeholder="Medium" size="md" />
        <Input placeholder="Large" size="lg" />
      </div>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Input },
    template: `
      <div class="flex flex-col gap-2">
        <Input placeholder="Primary" variant="primary" />
        <Input placeholder="Secondary" variant="secondary" />
      </div>
    `,
  }),
});

export const OnSurface = meta.story({
  parameters: { layout: "fullscreen" },
  render: () => ({
    components: { Input, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <div class="flex flex-col gap-2">
          <Input placeholder="Primary" variant="primary" />
          <Input placeholder="Secondary" variant="secondary" />
        </div>
      </Surface>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Input },
    template: '<Input :disabled="true" placeholder="you@example.com" />',
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { Input },
    template: '<Input :invalid="true" placeholder="you@example.com" />',
  }),
});

export const File = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Prefer `FileInput` for file selection. See Components/Forms/File Input.",
      },
    },
  },
  render: () => ({
    components: { Input },
    template: '<Input type="file" />',
  }),
});

export const WithField = meta.story({
  render: () => ({
    components: { Field, Input },
    template: `
      <Field>
        <Field.Label>Email</Field.Label>
        <Input placeholder="you@example.com" type="email" />
        <Field.Description>We will never share your email.</Field.Description>
      </Field>
    `,
  }),
});

export const Clearable = meta.story({
  render: () => ({
    components: { Input },
    setup() {
      const value = ref("Hello world");
      return { value };
    },
    template: '<Input v-model:value="value" clearable placeholder="Type to clear" />',
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Input },
    setup() {
      const value = ref("");
      const onValueChange = (next: string) => {
        value.value = next;
      };
      return { onValueChange, value };
    },
    template:
      '<Input :onValueChange="onValueChange" :value="value" placeholder="Enter your message" />',
  }),
});
