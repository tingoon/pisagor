<script lang="ts">
import type { SpinnerProps as BaseSpinnerProps } from "@pisagor/props";
import { spinnerRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import CircleNotchIcon from "phosphor-svelte/lib/CircleNotchIcon";
import type { ClassValue } from "svelte/elements";

type Props = {
  class?: ClassValue;
  "aria-hidden"?: boolean | "true" | "false" | undefined;
  "aria-label"?: string | undefined;
} & BaseSpinnerProps;

let {
  "aria-hidden": ariaHidden,
  "aria-label": ariaLabel,
  recipe = spinnerRecipe,
  class: className,
}: Props = $props();
</script>

<CircleNotchIcon
  aria-hidden={ariaHidden}
  aria-label={ariaHidden ? undefined : (ariaLabel ?? "Loading")}
  class={recipe({ class: cn(className) })}
  data-part="root"
  data-scope="spinner"
  role="status"
/>
