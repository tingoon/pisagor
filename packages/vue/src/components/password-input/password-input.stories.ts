import { PasswordInput } from "@pisagor/vue/password-input";
import { Surface } from "@pisagor/vue/surface";
import { ref } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: PasswordInput,
  parameters: {
    docs: {
      description: {
        component:
          "Collects passwords with a show-hide control so users can enter credentials securely and verify them.",
      },
    },
  },
  title: "Components/Forms/Password Input",
});

export const Default = meta.story({
  render: () => ({
    components: { PasswordInput },
    template: '<PasswordInput placeholder="Enter password" />',
  }),
});

export const OnSurface = meta.story({
  parameters: { layout: "fullscreen" },
  render: () => ({
    components: { PasswordInput, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <PasswordInput placeholder="Enter password" />
      </Surface>
    `,
  }),
});

export const Sizes = meta.story({
  render: () => ({
    components: { PasswordInput },
    template: `
      <div class="flex flex-col gap-2">
        <PasswordInput placeholder="Small" size="sm" />
        <PasswordInput placeholder="Medium" size="md" />
        <PasswordInput placeholder="Large" size="lg" />
      </div>
    `,
  }),
});

export const Clearable = meta.story({
  render: () => ({
    components: { PasswordInput },
    setup() {
      const value = ref("secret123");
      return { value };
    },
    template: '<PasswordInput v-model:value="value" clearable placeholder="Enter password" />',
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { PasswordInput },
    template: '<PasswordInput disabled placeholder="Enter password" value="secret" />',
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { PasswordInput },
    template: '<PasswordInput invalid placeholder="••••••••" />',
  }),
});

export const Autocomplete = meta.story({
  render: () => ({
    components: { PasswordInput },
    template: `
      <div class="flex flex-col gap-2">
        <PasswordInput autocomplete="current-password" placeholder="••••••••" />
        <PasswordInput autocomplete="new-password" placeholder="••••••••" />
      </div>
    `,
  }),
});

export const AutoHide = meta.story({
  render: () => ({
    components: { PasswordInput },
    setup() {
      const HIDE_DELAY_MS = 3000;
      const visible = ref(false);

      const onVisibilityChange = (details: { visible: boolean }) => {
        visible.value = details.visible;

        if (details.visible) {
          setTimeout(() => {
            visible.value = false;
          }, HIDE_DELAY_MS);
        }
      };

      return { onVisibilityChange, visible };
    },
    template:
      '<PasswordInput :onVisibilityChange="onVisibilityChange" placeholder="Enter password" :visible="visible" />',
  }),
});

export const ControlledVisibility = meta.story({
  render: () => ({
    components: { PasswordInput },
    setup() {
      const visible = ref(false);
      const onVisibilityChange = (details: { visible: boolean }) => {
        visible.value = details.visible;
      };

      return { onVisibilityChange, visible };
    },
    template:
      '<PasswordInput :onVisibilityChange="onVisibilityChange" placeholder="Enter password" :visible="visible" />',
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { PasswordInput },
    setup() {
      const password = ref("");
      const onChange = (event: Event) => {
        password.value = (event.target as HTMLInputElement).value;
      };

      return { onChange, password };
    },
    template:
      '<PasswordInput :onChange="onChange" placeholder="Enter password" :value="password" />',
  }),
});
