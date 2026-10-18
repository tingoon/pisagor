<script lang="ts">
  import { Portal, Tooltip as TooltipPrimitive } from "@ark-ui/svelte";
  import type {
    TooltipArrowProps,
    TooltipContentProps,
    TooltipPositionerProps,
    TooltipRootProps,
    TooltipTriggerProps,
  } from "@ark-ui/svelte";
  import type { TooltipContract, TooltipRootContract } from "@pisagor/props";
  import { cn } from "@pisagor/utils";
  import type { Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";
  import TooltipArrow from "./tooltip-arrow.svelte";
  import TooltipContent from "./tooltip-content.svelte";
  import TooltipRoot from "./tooltip-root.svelte";

  type Props = Omit<TooltipRootProps, "children"> &
    TooltipRootContract & {
      /** Whether to render the arrow. Defaults to `true`. */
      showArrow?: boolean;
      /** Extra props forwarded to the tooltip arrow element */
      arrowProps?: Omit<TooltipArrowProps, "children" | "class">;
      /** Trigger content (wrapped in an inline trigger element) */
      children?: Snippet;
      /** Class merged onto the tooltip content element */
      class?: ClassValue;
      content: string | Snippet;
      /** Extra props forwarded to the tooltip content element */
      contentProps?: Omit<TooltipContentProps, "children" | "class">;
      /** Extra props forwarded to the tooltip positioner element */
      positionerProps?: Omit<TooltipPositionerProps, "children" | "class">;
      /** Extra props forwarded to the tooltip trigger element */
      triggerProps?: Omit<
        TooltipTriggerProps,
        "asChild" | "children" | "class"
      >;
    } & TooltipContract;

  let {
    arrowProps,
    showArrow = true,
    children,
    content,
    contentProps,
    positionerProps,
    triggerProps,
    class: className,
    classNames,
    ...rest
  }: Props = $props();
</script>

<TooltipRoot {...rest}>
  <TooltipPrimitive.Trigger {...triggerProps}>
    {#snippet asChild(props)}
      <span {...props({ class: "inline-flex" })}>{@render children?.()}</span>
    {/snippet}
  </TooltipPrimitive.Trigger>

  <Portal>
    <TooltipPrimitive.Positioner {...positionerProps}>
      <TooltipContent
        {...contentProps}
        class={cn(className, classNames?.content)}
      >
        {#if showArrow}
          <TooltipArrow {...arrowProps} class={classNames?.arrow}>
            <TooltipPrimitive.ArrowTip />
          </TooltipArrow>
        {/if}
        {#if typeof content === "string"}
          {content}
        {:else}
          {@render content()}
        {/if}
      </TooltipContent>
    </TooltipPrimitive.Positioner>
  </Portal>
</TooltipRoot>
