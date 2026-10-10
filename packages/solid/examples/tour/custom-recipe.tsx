import { tourRecipe } from "@pisagor/recipes";
import { Button, Tour } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandTourRecipe = tv({
  extend: tourRecipe,
  slots: {
    content: "border-emerald-500/40",
    spotlight: "border-emerald-500",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Tour
      recipe={brandTourRecipe}
      steps={[
        {
          actions: [{ action: "next", label: "Next" }],
          description: "This is the first step.",
          id: "step-1",
          title: "Welcome",
        },
        {
          actions: [{ action: "dismiss", label: "Close" }],
          description: "Tour complete.",
          id: "step-2",
          title: "Done",
        },
      ]}
    >
      <Tour.Trigger
        asChild={(props) => <Button {...props()}>Start tour</Button>}
      />
      <Tour.Content />
    </Tour>
  );
}
