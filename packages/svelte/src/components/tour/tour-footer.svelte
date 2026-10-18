<script lang="ts">
  import { Tour as TourPrimitive, type TourControlProps } from "@ark-ui/svelte";
  import { dialogRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { setInsideControl } from "../../internal/inside-control";
  import { TOUR_INSIDE_CONTROL } from "./tour.context";

  let { children, class: className, ...rest }: TourControlProps = $props();
  setInsideControl(TOUR_INSIDE_CONTROL);
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
