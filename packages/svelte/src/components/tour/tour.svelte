<script lang="ts">
  import {
    Ark,
    type DialogTriggerProps,
    Portal,
    Tour as TourPrimitive,
    useTour,
  } from "@ark-ui/svelte";
  import type { UseTourProps } from "@ark-ui/svelte";
  import type { TourRootContract } from "@pisagor/contracts";
  import type { TourRecipeSlot } from "@pisagor/recipes";
  import { CaretLeftIcon, CaretRightIcon, XIcon } from "phosphor-svelte";
  import type { Snippet } from "svelte";
  import Button from "../button.svelte";
  import { useLocale } from "../provider/context";
  import { useStyles } from "./tour.context";
  import TourActionTrigger from "./tour-action-trigger.svelte";
  import TourArrow from "./tour-arrow.svelte";
  import TourArrowTip from "./tour-arrow-tip.svelte";
  import TourBackdrop from "./tour-backdrop.svelte";
  import TourContent from "./tour-content.svelte";
  import TourControl from "./tour-control.svelte";
  import TourDescription from "./tour-description.svelte";
  import TourHeader from "./tour-header.svelte";
  import TourInlineCloseTrigger from "./tour-inline-close-trigger.svelte";
  import TourPositioner from "./tour-positioner.svelte";
  import TourProgressText from "./tour-progress-text.svelte";
  import TourRoot from "./tour-root.svelte";
  import TourSpotlight from "./tour-spotlight.svelte";
  import TourTitle from "./tour-title.svelte";

  type Props = UseTourProps &
    TourRootContract & {
      /** Page content the steps point at. */
      children?: Snippet;
      /** Per-slot class name overrides. */
      classNames?: Partial<Record<TourRecipeSlot, string>>;
      immediate?: boolean;
      lazyMount?: boolean;
      onExitComplete?: () => void;
      present?: boolean;
      /**
       * Whether to show an arrow pointing at the step target.
       *
       * @defaultValue false
       */
      showArrow?: boolean;
      /**
       * Whether to show a close button at the top end corner.
       *
       * @defaultValue true
       */
      showCloseButton?: boolean;
      skipAnimationOnMount?: boolean;
      /** Element that starts the tour; spread `props()` onto your element. */
      trigger?: DialogTriggerProps["asChild"];
      unmountOnExit?: boolean;
    };

  let {
    children,
    classNames,
    immediate,
    lazyMount,
    onExitComplete,
    present,
    recipe,
    showArrow = false,
    showCloseButton = true,
    skipAnimationOnMount,
    trigger,
    unmountOnExit,
    ...tourProps
  }: Props = $props();
  const { m } = useLocale();
  const tour = useTour(() => tourProps);

  // Spotlight offsets are measured against the body.
  $effect(() => {
    if (!tour().open) return;

    document.body.classList.add("relative");

    return () => document.body.classList.remove("relative");
  });
</script>

{#snippet closeLabel()}
  {@const styles = useStyles()}
  <span class={styles.slots.closeLabel()}>{m("tour.close")}</span>
{/snippet}

<TourRoot
  {immediate}
  {lazyMount}
  {onExitComplete}
  {present}
  {recipe}
  {skipAnimationOnMount}
  {tour}
  {unmountOnExit}
>
  {#if trigger}
    <Ark as="button" asChild={trigger} onclick={() => tour().start()} />
  {/if}

  {@render children?.()}

  <Portal>
    <TourBackdrop class={classNames?.backdrop} />
    <TourSpotlight class={classNames?.spotlight} />

    <TourPositioner class={classNames?.positioner}>
      <TourContent class={classNames?.content}>
        {#if showArrow}
          <TourArrow class={classNames?.arrow}>
            <TourArrowTip class={classNames?.arrowTip} />
          </TourArrow>
        {/if}

        <TourHeader class={classNames?.header}>
          <TourProgressText class={classNames?.progressText} />
          <TourTitle class={classNames?.title} />
          <TourDescription class={classNames?.description} />
        </TourHeader>

        <TourPrimitive.Actions>
          {#snippet children(actions)}
            {#if actions().length > 0}
              <TourControl class={classNames?.control}>
                {#each actions() as action (action.label)}
                  <TourActionTrigger {action} class={classNames?.actionTrigger}>
                    {#snippet asChild(props)}
                      <Button
                        {...props()}
                        size="sm"
                        variant={action.action === "dismiss" ||
                        action.action === "prev"
                          ? "outline"
                          : "default"}
                      >
                        {#if action.action === "prev"}
                          <CaretLeftIcon />
                        {/if}
                        {action.label}
                        {#if action.action === "next"}
                          <CaretRightIcon />
                        {/if}
                      </Button>
                    {/snippet}
                  </TourActionTrigger>
                {/each}
              </TourControl>
            {/if}
          {/snippet}
        </TourPrimitive.Actions>

        {#if showCloseButton}
          <TourInlineCloseTrigger class={classNames?.close}>
            {#snippet asChild(props)}
              <Button
                {...props()}
                class={classNames?.closeButton}
                size="icon-md"
                variant="ghost"
              >
                <XIcon />
                {@render closeLabel()}
              </Button>
            {/snippet}
          </TourInlineCloseTrigger>
        {/if}
      </TourContent>
    </TourPositioner>
  </Portal>
</TourRoot>
