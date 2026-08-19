import type { Decorator } from "@storybook/vue3-vite";
import { computed, watchEffect } from "vue";

export const AppDecorator: Decorator = (_story, context) => ({
  setup() {
    const theme = computed(() => (context.globals.theme as string | undefined) ?? "system");
    const direction = computed(() => (context.globals.direction as string | undefined) ?? "ltr");

    watchEffect(() => {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const isDark = theme.value === "dark" || (theme.value === "system" && prefersDark);
      document.documentElement.classList.toggle("dark", isDark);
      document.documentElement.dir = direction.value;
    });

    return { direction };
  },
  template: `
    <div class="bg-background p-4 text-foreground" :dir="direction">
      <story />
    </div>
  `,
});
