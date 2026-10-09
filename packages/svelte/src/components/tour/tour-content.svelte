<script lang="ts">
import { Portal } from "@ark-ui/svelte/portal";
import {
  type TourContentProps as ArkProps,
  Tour as TourPrimitive,
} from "@ark-ui/svelte/tour";
import { buttonRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import XIcon from "phosphor-svelte/lib/XIcon";
import { useTourContext } from "./tour.context";
import TourBackdrop from "./tour-backdrop.svelte";
import TourBody from "./tour-body.svelte";
import TourDescription from "./tour-description.svelte";
import TourFooter from "./tour-footer.svelte";
import TourHeader from "./tour-header.svelte";
import TourNextStep from "./tour-next-step.svelte";
import TourPositioner from "./tour-positioner.svelte";
import TourPreviousStep from "./tour-previous-step.svelte";
import TourProgressText from "./tour-progress-text.svelte";
import TourSpotlight from "./tour-spotlight.svelte";
import TourTitle from "./tour-title.svelte";

type Props = ArkProps & {
  /**
   * Whether to show a close button at the top right corner.
   *
   * @defaultValue true
   */
  showCloseButton?: boolean;
};

let {
  showCloseButton = true,
  children,
  class: className,
  ...rest
}: Props = $props();
const ctx = useTourContext();
</script>

<Portal>
  <TourBackdrop />
  <TourPositioner>
    <TourPrimitive.Content
      {...rest}
      class={ctx.slots.content({ class: cn(className) })}
    >
      {#if children}
        {@render children()}
      {:else}
        <TourHeader>
          <TourTitle />
          <TourProgressText />
        </TourHeader>
        <TourBody>
          <TourDescription />
        </TourBody>
        <TourFooter>
          <TourPreviousStep />
          <TourNextStep />
        </TourFooter>
      {/if}

      {#if showCloseButton}
        <TourPrimitive.CloseTrigger
          class={cn(
            buttonRecipe({ size: "icon-md", variant: "ghost" }).base(),
            ctx.slots.closeButton(),
            ctx.slots.close(),
          )}
          type="button"
        >
          <XIcon />
          <span class={ctx.slots.closeLabel()}>Close</span>
        </TourPrimitive.CloseTrigger>
      {/if}
    </TourPrimitive.Content>
  </TourPositioner>

  <TourSpotlight />
</Portal>
