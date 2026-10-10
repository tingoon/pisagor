<script lang="ts">
import { Portal } from "@ark-ui/svelte/portal";
import {
  type TooltipArrowProps,
  type TooltipContentProps,
  type TooltipPositionerProps,
  Tooltip as TooltipPrimitive,
  type TooltipRootProps,
  type TooltipTriggerProps,
} from "@ark-ui/svelte/tooltip";
import type { TooltipProps as BaseTooltipProps } from "@pisagor/props";
import type { TooltipRecipeSlot } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { ClassValue } from "svelte/elements";
import type { VariantClassNames } from "../../internal/types";
import TooltipArrow from "./tooltip-arrow.svelte";
import TooltipContent from "./tooltip-content.svelte";
import TooltipRoot from "./tooltip-root.svelte";

type Props = Omit<TooltipRootProps, "children"> & {
  /** Extra props forwarded to the tooltip arrow element */
  arrowProps?: Omit<TooltipArrowProps, "children" | "class">;
  /** Trigger content (wrapped in an inline trigger element) */
  children?: Snippet;
  /** Class merged onto the tooltip content element */
  class?: ClassValue;
  /** Slot class names */
  classNames?: VariantClassNames<TooltipRecipeSlot>;
  /** Tooltip text or content */
  content: string | Snippet;
  /** Extra props forwarded to the tooltip content element */
  contentProps?: Omit<TooltipContentProps, "children" | "class">;
  /** Extra props forwarded to the tooltip positioner element */
  positionerProps?: Omit<TooltipPositionerProps, "children" | "class">;
  /** Extra props forwarded to the tooltip trigger element */
  triggerProps?: Omit<TooltipTriggerProps, "asChild" | "children" | "class">;
} & BaseTooltipProps;

let {
  arrowProps,
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
    {#snippet asChild(
      props,
    )}
      <span {...props({ class: "inline-flex" })}>{@render children?.()}</span>
    {/snippet}
  </TooltipPrimitive.Trigger>

  <Portal>
    <TooltipPrimitive.Positioner {...positionerProps}>
      <TooltipContent
        {...contentProps}
        class={cn(className, classNames?.content)}
      >
        <TooltipArrow {...arrowProps} class={classNames?.arrow}>
          <TooltipPrimitive.ArrowTip />
        </TooltipArrow>
        {#if typeof content === "string"}
          {content}
        {:else}
          {@render content()}
        {/if}
      </TooltipContent>
    </TooltipPrimitive.Positioner>
  </Portal>
</TooltipRoot>
