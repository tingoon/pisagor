import { Tooltip as TooltipPrimitive } from "@ark-ui/solid";
import type {
  TooltipArrowProps,
  TooltipArrowTipProps,
  TooltipContentProps,
  TooltipPositionerProps,
  TooltipRootProps as TooltipRootPrimitiveProps,
  TooltipTriggerProps,
} from "@ark-ui/solid";
import type { TooltipContract, TooltipRootContract } from "@pisagor/contracts";
import { tooltipRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Tooltip",
  recipe: tooltipRecipe,
});
// #endregion
// #region Types
export type TooltipRootProps = TooltipRootPrimitiveProps & TooltipRootContract;

export type TooltipTriggerHandleProps =
  JSX.ButtonHTMLAttributes<HTMLButtonElement>;
export type TooltipTriggerHandle = (
  props: TooltipTriggerHandleProps,
) => JSX.Element;

export interface TooltipProps
  extends Omit<TooltipRootProps, "children">, TooltipContract {
  children: JSX.Element | TooltipTriggerHandle;
  content: JSX.Element;
  /** Class merged onto the tooltip content element */
  class?: string;
  /**
   * Whether to render the arrow.
   *
   * @defaultValue true
   */
  showArrow?: boolean;
  arrowProps?: Omit<TooltipArrowProps, "children" | "class">;
  contentProps?: Omit<TooltipContentProps, "children" | "class">;
  positionerProps?: Omit<TooltipPositionerProps, "children" | "class">;
  triggerProps?: Omit<TooltipTriggerProps, "asChild" | "children" | "class">;
}
// #endregion

// #region Parts
// The root renders no element; `base` is an empty slot.
const TooltipRoot = withProvider<TooltipRootProps>(TooltipPrimitive.Root, {
  defaultProps: {
    closeDelay: 150,
    openDelay: 400,
    positioning: { placement: "top" },
  },
  name: "Root",
  slot: "base",
});

const TooltipTrigger = withContext<TooltipTriggerProps>(
  TooltipPrimitive.Trigger,
  { name: "Trigger" },
);

const TooltipPositioner = withContext<TooltipPositionerProps>(
  TooltipPrimitive.Positioner,
  { name: "Positioner" },
);

const TooltipContent = withContext<TooltipContentProps>(
  TooltipPrimitive.Content,
  { name: "Content" },
);

const TooltipArrow = withContext<TooltipArrowProps>(TooltipPrimitive.Arrow, {
  name: "Arrow",
});

const TooltipArrowTip = withContext<TooltipArrowTipProps>(
  TooltipPrimitive.ArrowTip,
  { name: "ArrowTip" },
);
// #endregion

// #region Shorthand
function TooltipShorthand(props: TooltipProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "arrowProps",
    "showArrow",
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
          <TooltipTrigger
            {...local.triggerProps}
            class={local.classNames?.trigger}
          >
            {local.children as JSX.Element}
          </TooltipTrigger>
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
        <TooltipPositioner
          {...local.positionerProps}
          class={local.classNames?.positioner}
        >
          <TooltipContent
            {...local.contentProps}
            class={cn(local.class, local.classNames?.content)}
          >
            <Show when={local.showArrow ?? true}>
              <TooltipArrow
                {...local.arrowProps}
                class={local.classNames?.arrow}
              >
                <TooltipArrowTip class={local.classNames?.arrowTip} />
              </TooltipArrow>
            </Show>
            {local.content}
          </TooltipContent>
        </TooltipPositioner>
      </Portal>
    </TooltipRoot>
  );
}
// #endregion

export const Tooltip = Object.assign(TooltipShorthand, {
  Arrow: TooltipArrow,
  ArrowTip: TooltipArrowTip,
  Content: TooltipContent,
  Positioner: TooltipPositioner,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
});

export type {
  TooltipArrowProps,
  TooltipArrowTipProps,
  TooltipContentProps,
  TooltipPositionerProps,
  TooltipTriggerProps,
} from "@ark-ui/solid";
