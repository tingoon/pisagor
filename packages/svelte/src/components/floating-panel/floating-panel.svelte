<script lang="ts">
  import {
    type FloatingPanelRootProps,
    type FloatingPanelTriggerProps,
    Portal,
  } from "@ark-ui/svelte";
  import type { FloatingPanelRootContract } from "@pisagor/contracts";
  import type { FloatingPanelRecipeSlot } from "@pisagor/recipes";
  import {
    ArrowsOutIcon,
    CornersInIcon,
    MinusIcon,
    XIcon,
  } from "phosphor-svelte";
  import type { Snippet } from "svelte";
  import Button from "../button.svelte";
  import { useLocale } from "../provider/context";
  import { ScrollArea } from "../scroll-area";
  import { useStyles } from "./floating-panel.context";
  import FloatingPanelBody from "./floating-panel-body.svelte";
  import FloatingPanelCloseTrigger from "./floating-panel-close-trigger.svelte";
  import FloatingPanelContent from "./floating-panel-content.svelte";
  import FloatingPanelControl from "./floating-panel-control.svelte";
  import FloatingPanelDragTrigger from "./floating-panel-drag-trigger.svelte";
  import FloatingPanelFooter from "./floating-panel-footer.svelte";
  import FloatingPanelHeader from "./floating-panel-header.svelte";
  import FloatingPanelPositioner from "./floating-panel-positioner.svelte";
  import FloatingPanelResizeTrigger from "./floating-panel-resize-trigger.svelte";
  import FloatingPanelRoot from "./floating-panel-root.svelte";
  import FloatingPanelStageTrigger from "./floating-panel-stage-trigger.svelte";
  import FloatingPanelTitle from "./floating-panel-title.svelte";
  import FloatingPanelTrigger from "./floating-panel-trigger.svelte";

  type Props = Omit<FloatingPanelRootProps, "children"> &
    FloatingPanelRootContract & {
      /** Footer action area. */
      actions?: Snippet;
      /** Body content, rendered inside a scroll area. */
      children?: Snippet;
      /** Per-slot class name overrides. */
      classNames?: Partial<Record<FloatingPanelRecipeSlot, string>>;
      /** Leading header content, such as an icon. */
      icon?: Snippet;
      /**
       * Whether to render resize handles on every edge and corner.
       *
       * @defaultValue true
       */
      resizable?: boolean;
      /**
       * Whether to add a fade effect to the body scroll area.
       *
       * @defaultValue false
       */
      scrollFade?: boolean;
      /**
       * Whether to show the close button.
       *
       * @defaultValue true
       */
      showCloseButton?: boolean;
      /**
       * Whether to show the minimize, maximize and restore buttons.
       *
       * @defaultValue true
       */
      showStageControls?: boolean;
      /** Panel title. */
      title?: string | Snippet;
      /** Trigger that opens the panel; spread `props()` onto your element. */
      trigger?: FloatingPanelTriggerProps["asChild"];
    };

  let {
    actions,
    children,
    classNames,
    icon,
    resizable = true,
    scrollFade = false,
    showCloseButton = true,
    showStageControls = true,
    title,
    trigger,
    ...rest
  }: Props = $props();
  const { m } = useLocale();

  const resizeAxes = ["n", "e", "w", "s", "ne", "se", "sw", "nw"] as const;
</script>

{#snippet stageControls()}
  {@const styles = useStyles()}
  <FloatingPanelStageTrigger stage="minimized">
    {#snippet asChild(props)}
      <Button
        {...props()}
        aria-label={m("floatingPanel.minimize")}
        size="icon-xs"
        variant="ghost"
      >
        <MinusIcon />
      </Button>
    {/snippet}
  </FloatingPanelStageTrigger>

  <FloatingPanelStageTrigger stage="maximized">
    {#snippet asChild(props)}
      <Button
        {...props()}
        aria-label={m("floatingPanel.maximize")}
        size="icon-xs"
        variant="ghost"
      >
        <ArrowsOutIcon />
      </Button>
    {/snippet}
  </FloatingPanelStageTrigger>

  <FloatingPanelStageTrigger stage="default">
    {#snippet asChild(props)}
      <Button
        {...props()}
        aria-label={m("floatingPanel.restore")}
        size="icon-xs"
        variant="outline"
      >
        <CornersInIcon class={styles.slots.maximizedIcon()} />
        <ArrowsOutIcon class={styles.slots.minimizedIcon()} />
      </Button>
    {/snippet}
  </FloatingPanelStageTrigger>
{/snippet}

<FloatingPanelRoot {...rest}>
  {#if trigger}
    <FloatingPanelTrigger class={classNames?.trigger}>
      {#snippet asChild(props)}
        {@render trigger(props)}
      {/snippet}
    </FloatingPanelTrigger>
  {/if}

  <Portal>
    <FloatingPanelPositioner class={classNames?.positioner}>
      <FloatingPanelContent class={classNames?.content}>
        <FloatingPanelDragTrigger class={classNames?.dragTrigger}>
          <FloatingPanelHeader class={classNames?.header}>
            {@render icon?.()}

            {#if title !== undefined}
              <FloatingPanelTitle class={classNames?.title}>
                {#if typeof title === "string"}
                  {title}
                {:else}
                  {@render title()}
                {/if}
              </FloatingPanelTitle>
            {/if}

            {#if showStageControls || showCloseButton}
              <FloatingPanelControl class={classNames?.control}>
                {#if showStageControls}
                  {@render stageControls()}
                {/if}

                {#if showCloseButton}
                  <FloatingPanelCloseTrigger class={classNames?.closeTrigger}>
                    {#snippet asChild(props)}
                      <Button
                        {...props()}
                        aria-label={m("floatingPanel.close")}
                        size="icon-xs"
                      >
                        <XIcon />
                      </Button>
                    {/snippet}
                  </FloatingPanelCloseTrigger>
                {/if}
              </FloatingPanelControl>
            {/if}
          </FloatingPanelHeader>
        </FloatingPanelDragTrigger>

        {#if children}
          <ScrollArea {scrollFade}>
            <FloatingPanelBody class={classNames?.body}>
              {@render children()}
            </FloatingPanelBody>
          </ScrollArea>
        {/if}

        {#if actions}
          <FloatingPanelFooter class={classNames?.footer}>
            {@render actions()}
          </FloatingPanelFooter>
        {/if}

        {#if resizable}
          {#each resizeAxes as axis (axis)}
            <FloatingPanelResizeTrigger
              {axis}
              class={classNames?.resizeTrigger}
            />
          {/each}
        {/if}
      </FloatingPanelContent>
    </FloatingPanelPositioner>
  </Portal>
</FloatingPanelRoot>
