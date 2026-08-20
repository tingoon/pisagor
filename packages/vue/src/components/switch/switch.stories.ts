import { Surface, Switch } from "@pisagor/vue";
import { ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: "Toggles a setting on or off with immediate visual feedback.",
      },
    },
  },
  title: "Components/Forms/Switch",
});

export const Default = meta.story({
  render: () => ({
    components: { Switch },
    template: `
      <label class="flex items-center gap-2 text-sm">
        <Switch default-checked />
        Airplane mode
      </label>
    `,
  }),
});

export const Sizes = meta.story({
  render: () => ({
    components: { Switch },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <Switch default-checked />
        <Switch class="[--size:--spacing(5)] sm:[--size:--spacing(6)]" default-checked />
      </div>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Switch },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <Switch variant="primary" />
        <Switch variant="secondary" />
      </div>
    `,
  }),
});

export const OnSurface = meta.story({
  render: () => ({
    components: { Surface, Switch },
    template: `
      <Surface bordered padding="md" variant="default">
        <Switch default-checked />
      </Surface>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Switch },
    template: "<Switch disabled />",
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { Switch },
    template: '<Switch :invalid="true" />',
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Switch },
    setup() {
      const checked = ref(false);
      return { checked };
    },
    template: `
      <div class="flex flex-col items-center gap-2">
        <Switch v-model:checked="checked" />
        <p class="text-muted-foreground text-sm">{{ checked ? 'On' : 'Off' }}</p>
      </div>
    `,
  }),
});
