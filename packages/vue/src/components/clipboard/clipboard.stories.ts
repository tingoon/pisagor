import { PhSparkle } from "@phosphor-icons/vue";
import { Button, Clipboard, Surface } from "@pisagor/vue";
import { h, ref } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: Clipboard,
  parameters: {
    docs: {
      description: {
        component:
          "Copies text to the clipboard with clear feedback so users can reuse values without selecting manually.",
      },
    },
  },
  title: "Components/Actions/Clipboard",
});

export const Default = meta.story({
  render: () => ({
    components: { Clipboard },
    template: '<Clipboard value="https://example.com/docs" />',
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Clipboard },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <Clipboard value="https://example.com/docs" variant="input" />
        <Clipboard value="https://example.com/docs" variant="button" />
        <Clipboard value="https://example.com/docs" variant="value" />
      </div>
    `,
  }),
});

export const OnSurface = meta.story({
  render: () => ({
    components: { Clipboard, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <div class="flex flex-wrap items-center gap-2">
          <Clipboard value="https://example.com/docs" variant="input" />
          <Clipboard value="https://example.com/docs" variant="button" />
          <Clipboard value="https://example.com/docs" variant="value" />
        </div>
      </Surface>
    `,
  }),
});

export const CustomTimeout = meta.story({
  render: () => ({
    components: { Clipboard },
    template: '<Clipboard :timeout="5000" value="https://example.com/docs" />',
  }),
});

export const DifferentIcon = meta.story({
  render: () => () =>
    h(Clipboard, {
      copiedIcon: h(PhSparkle),
      copyIcon: h(PhSparkle),
      value: "https://example.com/docs",
      variant: "button",
    }),
});

export const WithLabel = meta.story({
  render: () => ({
    components: { Clipboard },
    template: '<Clipboard button-variant="outline" label="Install" value="bun add ui" />',
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Button, Clipboard },
    setup() {
      const value = ref("https://example.com/docs");

      return { value };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Clipboard :value="value" />
        <Button variant="secondary" @click="value = 'https://example.com/docs/alternate'">
          Change URL
        </Button>
      </div>
    `,
  }),
});
