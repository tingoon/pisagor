<script lang="ts">
import {
  type TourBackdropProps as ArkProps,
  Tour as TourPrimitive,
} from "@ark-ui/svelte/tour";
import { dialogRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useTourContext } from "./tour.context";

type Props = ArkProps & {
  /**
   * Dialog style recipe. Defaults to `dialogRecipe` from `@pisagor/recipes`.
   *
   * @defaultValue dialogRecipe
   */
  dialogRecipe?: typeof dialogRecipe;
};

let {
  class: className,
  dialogRecipe: dialogRecipeProp = dialogRecipe,
  ...rest
}: Props = $props();
const ctx = useTourContext();
const dialogSlots = $derived(dialogRecipeProp());
</script>

<TourPrimitive.Backdrop
  {...rest}
  class={cn(dialogSlots.backdrop(), ctx.slots.backdrop(), className)}
/>
