import { PhTextB, PhTextItalic, PhTextUnderline } from "@phosphor-icons/vue";
import { Toggle } from "@pisagor/vue";
import { ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component:
          "Stays pressed or released to turn a single option on or off, similar to a checkbox styled as a button.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Actions/Toggle",
});

export const Default = meta.story({
  render: () => ({
    components: { Toggle },
    template: '<Toggle variant="outline">Toggle</Toggle>',
  }),
});

export const Sizes = meta.story({
  render: () => ({
    components: { Toggle },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <Toggle size="sm" variant="outline">Small</Toggle>
        <Toggle size="md" variant="outline">Medium</Toggle>
        <Toggle size="lg" variant="outline">Large</Toggle>
      </div>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Toggle },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <Toggle variant="ghost">Default</Toggle>
        <Toggle variant="outline">Outline</Toggle>
      </div>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Toggle },
    template: '<Toggle disabled variant="outline">Unavailable</Toggle>',
  }),
});

export const IconGroup = meta.story({
  render: () => ({
    components: { PhTextB, PhTextItalic, PhTextUnderline, Toggle },
    template: `
      <div class="flex items-center gap-1">
        <Toggle aria-label="Toggle bold" variant="outline"><PhTextB /></Toggle>
        <Toggle aria-label="Toggle italic" variant="outline"><PhTextItalic /></Toggle>
        <Toggle aria-label="Toggle underline" variant="outline"><PhTextUnderline /></Toggle>
      </div>
    `,
  }),
});

export const WithIcon = meta.story({
  render: () => ({
    components: { PhTextB, Toggle },
    template: '<Toggle aria-label="Toggle bold" variant="outline"><PhTextB /></Toggle>',
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Toggle },
    setup() {
      const pressed = ref(false);
      return { pressed };
    },
    template: `
      <div class="flex flex-col items-center gap-2">
        <Toggle v-model:pressed="pressed" variant="outline">Toggle</Toggle>
        <p class="text-muted-foreground text-sm">{{ pressed ? '✅' : '❌' }}</p>
      </div>
    `,
  }),
});
