<script lang="ts">
import { Portal } from "@ark-ui/svelte/portal";
import type { TourContentProps as ArkProps } from "@ark-ui/svelte/tour";
import { Tour as TourPrimitive } from "@ark-ui/svelte/tour";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import XIcon from "phosphor-svelte/lib/XIcon";
import { useTourContext } from "./tour.context";

type Props = Omit<ArkProps, "class"> & {
  class?: string | undefined;
  showCloseButton?: boolean;
};

let { showCloseButton = true, children, class: className, ...rest }: Props = $props();
const { slots } = useTourContext();
</script>

<Portal>
  <TourPrimitive.Positioner class={slots.positioner()}>
    <TourPrimitive.Content {...rest} class={slots.content({ class: cn(className) })}>
      {#if showCloseButton}
        <TourPrimitive.CloseTrigger
          aria-label="Close"
          class={cn(buttonRecipe({ size: "icon-sm", variant: "ghost" }).base(), slots.close())}
          type="button"
        >
          <XIcon />
        </TourPrimitive.CloseTrigger>
      {/if}
      {@render children?.()}
    </TourPrimitive.Content>
  </TourPrimitive.Positioner>
</Portal>
