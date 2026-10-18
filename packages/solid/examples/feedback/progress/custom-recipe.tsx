import { progressRecipe } from "@pisagor/recipes";
import { Progress } from "@pisagor/solid";
import { createSignal, onCleanup, onMount } from "solid-js";
import { tv } from "tailwind-variants";

const brandProgressRecipe = tv({
  extend: progressRecipe,
  slots: {
    range: "bg-emerald-600",
    track: "bg-emerald-500/20",
  },
  variants: {},
});

export function CustomRecipe() {
  const [progress, setProgress] = createSignal(13);

  onMount(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    onCleanup(() => clearTimeout(timer));
  });

  return <Progress recipe={brandProgressRecipe} value={progress()} />;
}
