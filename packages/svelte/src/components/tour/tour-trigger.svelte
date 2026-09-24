<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLButtonAttributes } from "svelte/elements";
import { useTourContext } from "./tour.context";

type Props = Omit<HTMLButtonAttributes, "class"> & { class?: string | undefined };
let { onclick, children, class: className, ...rest }: Props = $props();
const { handleStart } = useTourContext();
</script>

<Ark
  as="button"
  {...rest}
  class={className}
  data-part="trigger"
  data-scope="tour"
  onclick={(e) => {
  handleStart();
  onclick?.(e);
}}
  type="button"
>
  {@render children?.()}
</Ark>
