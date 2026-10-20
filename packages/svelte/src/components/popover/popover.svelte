<script lang="ts">
  import {
    type PopoverRootProps,
    type PopoverTriggerProps,
    Portal,
  } from "@ark-ui/svelte";
  import type {
    PopoverContract,
    PopoverRootContract,
  } from "@pisagor/contracts";
  import { cn } from "@pisagor/utils";
  import { XIcon } from "phosphor-svelte";
  import type { Snippet } from "svelte";
  import Button from "../button.svelte";
  import { useLocale } from "../provider/context";
  import { ScrollArea } from "../scroll-area";
  import PopoverArrow from "./popover-arrow.svelte";
  import PopoverArrowTip from "./popover-arrow-tip.svelte";
  import PopoverBody from "./popover-body.svelte";
  import PopoverContent from "./popover-content.svelte";
  import PopoverDescription from "./popover-description.svelte";
  import PopoverFooter from "./popover-footer.svelte";
  import PopoverHeader from "./popover-header.svelte";
  import PopoverInlineCloseTrigger from "./popover-inline-close-trigger.svelte";
  import PopoverPositioner from "./popover-positioner.svelte";
  import PopoverRoot from "./popover-root.svelte";
  import PopoverTitle from "./popover-title.svelte";
  import PopoverTrigger from "./popover-trigger.svelte";

  type Props = Omit<PopoverRootProps, "children"> &
    PopoverRootContract &
    PopoverContract & {
      /** Footer action area. */
      actions?: Snippet;
      /** Body content. */
      children?: Snippet;
      /** Supporting copy in the header. */
      description?: string | Snippet;
      /**
       * Whether to render an arrow pointing at the trigger.
       *
       * @defaultValue false
       */
      showArrow?: boolean;
      /**
       * Whether to show a close button at the top end corner.
       *
       * @defaultValue false
       */
      showCloseButton?: boolean;
      /** Popover title. */
      title?: string | Snippet;
      /** Trigger that opens the popover; spread `props()` onto your element. */
      trigger?: PopoverTriggerProps["asChild"];
    };

  let {
    actions,
    children,
    classNames,
    description,
    showArrow = false,
    showCloseButton = false,
    title,
    trigger,
    ...rest
  }: Props = $props();
  const { m } = useLocale();
</script>

<PopoverRoot {...rest}>
  {#if trigger}
    <PopoverTrigger class={classNames?.trigger}>
      {#snippet asChild(props)}
        {@render trigger(props)}
      {/snippet}
    </PopoverTrigger>
  {/if}

  <Portal>
    <PopoverPositioner class={classNames?.positioner}>
      <PopoverContent class={classNames?.base}>
        {#if showArrow}
          <PopoverArrow class={classNames?.arrow}>
            <PopoverArrowTip class={classNames?.arrowTip} />
          </PopoverArrow>
        {/if}

        {#if title !== undefined || description !== undefined}
          <PopoverHeader class={classNames?.header}>
            {#if title !== undefined}
              <PopoverTitle class={classNames?.title}>
                {#if typeof title === "string"}
                  {title}
                {:else}
                  {@render title()}
                {/if}
              </PopoverTitle>
            {/if}

            {#if description !== undefined}
              <PopoverDescription class={classNames?.description}>
                {#if typeof description === "string"}
                  {description}
                {:else}
                  {@render description()}
                {/if}
              </PopoverDescription>
            {/if}
          </PopoverHeader>
        {/if}

        {#if children}
          <ScrollArea>
            <PopoverBody class={cn("overflow-visible", classNames?.body)}>
              {@render children()}
            </PopoverBody>
          </ScrollArea>
        {/if}

        {#if actions}
          <PopoverFooter class={classNames?.footer}>
            {@render actions()}
          </PopoverFooter>
        {/if}

        {#if showCloseButton}
          <PopoverInlineCloseTrigger class={classNames?.close}>
            {#snippet asChild(props)}
              <Button
                {...props()}
                aria-label={m("popover.close")}
                size="icon-sm"
                variant="ghost"
              >
                <XIcon />
              </Button>
            {/snippet}
          </PopoverInlineCloseTrigger>
        {/if}
      </PopoverContent>
    </PopoverPositioner>
  </Portal>
</PopoverRoot>
