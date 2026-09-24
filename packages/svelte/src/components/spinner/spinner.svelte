<script lang="ts">
import { spinnerRecipe } from "@pisagor/recipes/spinner";
import { cn } from "@pisagor/utils";
import CircleNotchIcon from "phosphor-svelte/lib/CircleNotchIcon";

type Props = {
  "aria-hidden"?: boolean | "true" | "false" | undefined;
  "aria-label"?: string | undefined;
  class?: string | undefined;
  recipe?: typeof spinnerRecipe;
};

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
