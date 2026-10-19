<script lang="ts">
  import type { SpinnerRootContract } from "@pisagor/contracts";
  import { spinnerRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { CircleNotchIcon } from "phosphor-svelte";
  import type { ClassValue } from "svelte/elements";
  import { useLocale } from "./provider/context";

  const { m } = useLocale();

  type Props = {
    class?: ClassValue;
    "aria-hidden"?: boolean | "true" | "false" | undefined;
    "aria-label"?: string | undefined;
  } & SpinnerRootContract;

  let {
    "aria-hidden": ariaHidden,
    "aria-label": ariaLabel,
    recipe = spinnerRecipe,
    class: className,
  }: Props = $props();
</script>

<CircleNotchIcon
  aria-hidden={ariaHidden}
  aria-label={ariaHidden ? undefined : m("spinner.loading", ariaLabel)}
  class={recipe({ class: cn(className) })}
  data-part="root"
  data-scope="spinner"
  role="img"
/>
