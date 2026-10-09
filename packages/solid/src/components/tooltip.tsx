import type {
  TooltipArrowProps,
  TooltipContentProps,
  TooltipPositionerProps,
  TooltipRootProps as TooltipPrimitiveRootProps,
  TooltipTriggerProps,
} from "@ark-ui/solid/tooltip";
import { Tooltip as TooltipPrimitive } from "@ark-ui/solid/tooltip";
import type { TooltipProps as BaseTooltipRootProps } from "@pisagor/props";
import { type TooltipRecipeSlot, tooltipRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { Component, JSX } from "solid-js";
import { createMemo, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Context
const { Context: TooltipStylesContext, withContext } = createSlotRecipeContext({
  name: "Tooltip",
  recipe: tooltipRecipe,
});
// #endregion

// #region Types
export interface TooltipRootProps
  extends TooltipPrimitiveRootProps,
    BaseTooltipRootProps {}

export type TooltipTriggerHandleProps =
  JSX.ButtonHTMLAttributes<HTMLButtonElement>;
export type TooltipTriggerHandle = (
  props: TooltipTriggerHandleProps,
) => JSX.Element;

type TooltipClassNames = VariantClassNames<TooltipRecipeSlot>;

export interface TooltipProps extends Omit<TooltipRootProps, "children"> {
  children: JSX.Element | TooltipTriggerHandle;
  content: JSX.Element;
  /** Class merged onto the tooltip content element */
  class?: string;
  classNames?: TooltipClassNames;
  arrowProps?: Omit<TooltipArrowProps, "children" | "class">;
  contentProps?: Omit<TooltipContentProps, "children" | "class">;
  positionerProps?: Omit<TooltipPositionerProps, "children" | "class">;
  triggerProps?: Omit<TooltipTriggerProps, "asChild" | "children" | "class">;
}
// #endregion

// #region Parts
function TooltipRoot(props: TooltipRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "recipe",
    "closeDelay",
    "openDelay",
    "positioning",
  ]);
  const slots = createMemo(() => (local.recipe ?? tooltipRecipe)());

  return (
    <TooltipStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <TooltipPrimitive.Root
        {...rest}
        closeDelay={local.closeDelay ?? 150}
        openDelay={local.openDelay ?? 400}
        positioning={local.positioning ?? { placement: "top" }}
      />
    </TooltipStylesContext>
  );
}

const TooltipContent: Component<TooltipContentProps> = withContext(
  TooltipPrimitive.Content,
  { name: "Content" },
);

const TooltipArrow: Component<TooltipArrowProps> = withContext(
  TooltipPrimitive.Arrow,
  { name: "Arrow" },
);
// #endregion

// #region Shorthand
export function Tooltip(props: TooltipProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "arrowProps",
    "children",
    "content",
    "contentProps",
    "positionerProps",
    "triggerProps",
    "class",
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
            class={cn(local.class, local.classNames?.content)}
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
// #endregion

export type {
  TooltipArrowProps,
  TooltipContentProps,
  TooltipPositionerProps,
  TooltipTriggerProps,
} from "@ark-ui/solid/tooltip";
