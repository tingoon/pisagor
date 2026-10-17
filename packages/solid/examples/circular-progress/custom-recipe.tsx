import { circularProgressRecipe } from "@pisagor/recipes";
import { CircularProgress } from "@pisagor/solid";
import { createSignal, onCleanup, onMount } from "solid-js";
import { tv } from "tailwind-variants";

const brandCircularProgressRecipe = tv({
  extend: circularProgressRecipe,
  slots: { range: "stroke-emerald-600" },
  variants: {},
});

export function CustomRecipe() {
  const [progress, setProgress] = createSignal(24);

  onMount(() => {
    const timer = setTimeout(() => setProgress(72), 500);
    onCleanup(() => clearTimeout(timer));
  });

  return (
    <CircularProgress recipe={brandCircularProgressRecipe} value={progress()} />
  );
}
