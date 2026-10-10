<script lang="ts">
import {
  type TourControlProps,
  Tour as TourPrimitive,
} from "@ark-ui/svelte/tour";
import { dialogRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";

let { children, class: className, ...rest }: TourControlProps = $props();
const dialogSlots = $derived(dialogRecipe());
</script>

<TourPrimitive.Control
  {...rest}
  class={dialogSlots.footer({ class: cn(className) })}
  data-part="control"
  data-scope="tour"
>
  {@render children?.()}
</TourPrimitive.Control>
