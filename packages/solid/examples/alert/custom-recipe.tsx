import { alertRecipe } from "@pisagor/recipes";
import { Alert } from "@pisagor/solid";
import { CheckCircleIcon } from "@pisagor/solid/icons";
import { tv } from "tailwind-variants";

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

export function CustomRecipe() {
  return (
    <Alert
      description="Your workspace is ready to use."
      icon={<CheckCircleIcon />}
      recipe={brandAlertRecipe}
      title="Workspace created"
    />
  );
}
