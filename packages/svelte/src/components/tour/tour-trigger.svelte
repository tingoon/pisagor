<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLButtonAttributes } from "svelte/elements";
import { useTourContext } from "./tour.context";

let {
  onclick,
  children,
  class: className,
  ...rest
}: HTMLButtonAttributes = $props();
const { handleStart } = useTourContext();

function handleClick(
  e: Parameters<NonNullable<HTMLButtonAttributes["onclick"]>>[0],
) {
  handleStart();
  onclick?.(e);
}
</script>

<Ark
  as="button"
  {...rest}
  class={className}
  data-part="trigger"
  data-scope="tour"
  onclick={handleClick}
  type="button"
>
  {@render children?.()}
</Ark>
