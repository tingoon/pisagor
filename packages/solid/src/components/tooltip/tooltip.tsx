import type {
  TooltipArrowProps,
  TooltipContentProps,
  TooltipPositionerProps,
  TooltipRootProps as TooltipPrimitiveRootProps,
  TooltipTriggerProps,
} from "@ark-ui/solid/tooltip";
import { Tooltip as TooltipPrimitive } from "@ark-ui/solid/tooltip";
import {
  type TooltipRecipeSlot,
  tooltipRecipe,
} from "@pisagor/recipes/tooltip";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import type { VariantClassNames } from "../../internal/types";
import { TooltipContext, useTooltip } from "./tooltip.context";

export interface TooltipRootProps extends TooltipPrimitiveRootProps {
  recipe?: typeof tooltipRecipe;
}

export type TooltipTriggerHandleProps =
  JSX.ButtonHTMLAttributes<HTMLButtonElement>;
export type TooltipTriggerHandle = (
  props: TooltipTriggerHandleProps,
) => JSX.Element;

type TooltipClassNames = VariantClassNames<TooltipRecipeSlot>;

export interface TooltipProps extends Omit<TooltipRootProps, "children"> {
  children: JSX.Element | TooltipTriggerHandle;
  content: JSX.Element;
  classNames?: TooltipClassNames;
  arrowProps?: Omit<TooltipArrowProps, "children" | "class">;
  contentProps?: Omit<TooltipContentProps, "children" | "class">;
  positionerProps?: Omit<TooltipPositionerProps, "children" | "class">;
  triggerProps?: Omit<TooltipTriggerProps, "asChild" | "children" | "class">;
}

function TooltipRoot(props: TooltipRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "closeDelay",
    "openDelay",
    "positioning",
    "children",
    "recipe",
  ]);
  const slots = () => (local.recipe ?? tooltipRecipe)();

  return (
    <TooltipContext value={{ slots: slots() }}>
      <TooltipPrimitive.Root
        {...rest}
        closeDelay={local.closeDelay ?? 150}
        openDelay={local.openDelay ?? 400}
        positioning={local.positioning ?? { placement: "top" }}
      >
        {local.children}
      </TooltipPrimitive.Root>
    </TooltipContext>
  );
}

function TooltipContent(props: TooltipContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useTooltip();
  return (
    <TooltipPrimitive.Content
      {...rest}
      class={slots.content({ class: cn(local.class) })}
    >
      {local.children}
    </TooltipPrimitive.Content>
  );
}

function TooltipArrow(props: TooltipArrowProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useTooltip();
  return (
    <TooltipPrimitive.Arrow
      {...rest}
      class={slots.arrow({ class: cn(local.class) })}
    >
      {local.children}
    </TooltipPrimitive.Arrow>
  );
}

export function Tooltip(props: TooltipProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "arrowProps",
    "children",
    "content",
    "contentProps",
    "positionerProps",
    "triggerProps",
    "classNames",
  ]);

  const isHandle = () => typeof local.children === "function";

  return (
    <TooltipRoot {...rest}>
      <Show
        fallback={
          <TooltipPrimitive.Trigger {...local.triggerProps}>
            {local.children as JSX.Element}
          </TooltipPrimitive.Trigger>
        }
        when={isHandle()}
      >
        <TooltipPrimitive.Context>
          {(api) =>
            (local.children as TooltipTriggerHandle)(api().getTriggerProps())
          }
        </TooltipPrimitive.Context>
      </Show>

      <Portal>
        <TooltipPrimitive.Positioner {...local.positionerProps}>
          <TooltipContent
            {...local.contentProps}
            class={local.classNames?.content}
          >
            <TooltipArrow {...local.arrowProps} class={local.classNames?.arrow}>
              <TooltipPrimitive.ArrowTip />
            </TooltipArrow>
            {local.content}
          </TooltipContent>
        </TooltipPrimitive.Positioner>
      </Portal>
    </TooltipRoot>
  );
}
