<script lang="ts">
import { Portal } from "@ark-ui/svelte/portal";
import { Tour as TourPrimitive } from "@ark-ui/svelte/tour";
import { dialogRecipe } from "@pisagor/recipes/dialog";
import { cn } from "@pisagor/utils";
import { useTourContext } from "./tour.context";

type Props = { class?: string | undefined; dialogRecipe?: typeof dialogRecipe };
let { class: className, dialogRecipe: dialogRecipeProp = dialogRecipe }: Props = $props();
const { slots } = useTourContext();
const dialogSlots = $derived(dialogRecipeProp());
</script>

<Portal>
  <TourPrimitive.Backdrop class={cn(dialogSlots.backdrop(), slots.backdrop(), className)} />
</Portal>
