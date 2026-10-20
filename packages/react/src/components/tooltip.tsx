import { Portal, Tooltip as TooltipPrimitive } from "@ark-ui/react";
import type {
  TooltipArrowProps,
  TooltipArrowTipProps,
  TooltipContentProps,
  TooltipContextProps,
  TooltipPositionerProps,
  TooltipRootProps as TooltipRootPrimitiveProps,
  TooltipTriggerProps,
} from "@ark-ui/react";
import type { TooltipContract, TooltipRootContract } from "@pisagor/contracts";
import { tooltipRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ReactElement, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Tooltip",
  recipe: tooltipRecipe,
});
// #endregion

// #region Types
export type TooltipRootProps = TooltipRootPrimitiveProps & TooltipRootContract;

type TooltipContextApi = Parameters<TooltipContextProps["children"]>[0];

export type TooltipTriggerHandleProps = ReturnType<
  TooltipContextApi["getTriggerProps"]
>;

export type TooltipTriggerHandle = (
  props: TooltipTriggerHandleProps,
) => ReactElement;

export interface TooltipProps
  extends Omit<TooltipRootProps, "children">, TooltipContract {
  /**
   * Trigger element or render function that receives trigger props from the
   * handle API
   */
  children: ReactElement | TooltipTriggerHandle;
  content: ReactNode;
  /** Class merged onto the tooltip content element */
  className?: string;
  /**
   * Whether to render the arrow pointing at the trigger.
   *
   * @defaultValue true
   */
  showArrow?: boolean;
  /** Extra props forwarded to the tooltip arrow element */
  arrowProps?: Omit<TooltipArrowProps, "children" | "className">;
  /** Extra props forwarded to the tooltip content element */
  contentProps?: Omit<TooltipContentProps, "children" | "className">;
  /** Extra props forwarded to the tooltip positioner element */
  positionerProps?: Omit<TooltipPositionerProps, "children" | "className">;
  /** Extra props forwarded to the tooltip trigger element */
  triggerProps?: Omit<
    TooltipTriggerProps,
    "asChild" | "children" | "className"
  >;
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
  { defaultProps: { asChild: true }, name: "Trigger" },
);

const TooltipPositioner = withContext<TooltipPositionerProps>(
  TooltipPrimitive.Positioner,
  { name: "Positioner" },
);

const TooltipContent = withContext<TooltipContentProps>(
  TooltipPrimitive.Content,
  {
    name: "Content",
  },
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
function TooltipShorthand({
  arrowProps,
  showArrow = true,
  children,
  content,
  contentProps,
  positionerProps,
  triggerProps,
  className,
  classNames,
  ...rest
}: TooltipProps) {
  const trigger =
    typeof children === "function" ? (
      <TooltipPrimitive.Context>
        {(api) => children(api.getTriggerProps())}
      </TooltipPrimitive.Context>
    ) : (
      <TooltipTrigger {...triggerProps}>{children}</TooltipTrigger>
    );

  return (
    <TooltipRoot {...rest}>
      {trigger}

      <Portal>
        <TooltipPositioner {...positionerProps}>
          <TooltipContent
            {...contentProps}
            className={cn(className, classNames?.content)}
          >
            {showArrow && (
              <TooltipArrow {...arrowProps} className={classNames?.arrow}>
                <TooltipArrowTip className={classNames?.arrowTip} />
              </TooltipArrow>
            )}

            {content}
          </TooltipContent>
        </TooltipPositioner>
      </Portal>
    </TooltipRoot>
  );
}
// #endregion

export type {
  TooltipArrowProps,
  TooltipArrowTipProps,
  TooltipContentProps,
  TooltipPositionerProps,
  TooltipTriggerProps,
} from "@ark-ui/react";

export const Tooltip = Object.assign(TooltipShorthand, {
  Arrow: TooltipArrow,
  ArrowTip: TooltipArrowTip,
  Content: TooltipContent,
  Positioner: TooltipPositioner,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
});
