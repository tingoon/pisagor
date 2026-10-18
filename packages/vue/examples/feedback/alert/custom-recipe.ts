import { PhCheckCircle } from "@phosphor-icons/vue";
import { alertRecipe } from "@pisagor/recipes";
import { Alert } from "@pisagor/vue";
import { tv } from "tailwind-variants";
import { defineComponent, h } from "vue";

const brandAlertRecipe = tv({
  extend: alertRecipe,
  slots: {
    base: "rounded-xl",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {
    variant: {
      default: {
        base: [
          "border-emerald-500/40 bg-emerald-500/5",
          "[&_svg]:text-emerald-600",
        ],
      },
    },
  },
});

export default defineComponent({
  name: "CustomRecipe",
  setup() {
    return () =>
      h(Alert, {
        description: "Your workspace is ready to use.",
        icon: h(PhCheckCircle),
        recipe: brandAlertRecipe,
        title: "Workspace created",
      });
  },
});
