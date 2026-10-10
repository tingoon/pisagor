import { Portal } from "@ark-ui/react/portal";
import type {
  TooltipArrowProps,
  TooltipContentProps,
  TooltipContextProps,
  TooltipPositionerProps,
  TooltipRootProps as TooltipPrimitiveRootProps,
  TooltipTriggerProps,
} from "@ark-ui/react/tooltip";
import { Tooltip as TooltipPrimitive } from "@ark-ui/react/tooltip";
import type { TooltipProps as BaseTooltipRootProps } from "@pisagor/props";
import { type TooltipRecipeSlot, tooltipRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ReactElement, ReactNode } from "react";
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

type TooltipContextApi = Parameters<TooltipContextProps["children"]>[0];

export type TooltipTriggerHandleProps = ReturnType<
  TooltipContextApi["getTriggerProps"]
>;

export type TooltipTriggerHandle = (
  props: TooltipTriggerHandleProps,
) => ReactElement;

type TooltipClassNames = VariantClassNames<TooltipRecipeSlot>;

export interface TooltipProps extends Omit<TooltipRootProps, "children"> {
  /** Trigger element or render function that receives trigger props from the handle API */
  children: ReactElement | TooltipTriggerHandle;
  /** Tooltip text or content */
  content: ReactNode;
  /** Class merged onto the tooltip content element */
  className?: string;
  /** Slot class names */
  classNames?: TooltipClassNames;
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
function TooltipRoot({
  closeDelay = 150,
  openDelay = 400,
  positioning = { placement: "top" },
  children,
  recipe = tooltipRecipe,
  ...rest
}: TooltipRootProps) {
  const slots = recipe();

  return (
    <TooltipStylesContext value={{ slots, variants: {} as never }}>
      <TooltipPrimitive.Root
        {...rest}
        closeDelay={closeDelay}
        openDelay={openDelay}
        positioning={positioning}
      >
        {children}
      </TooltipPrimitive.Root>
    </TooltipStylesContext>
  );
}

function TooltipTrigger({
  asChild = true,
  children,
  ...rest
}: TooltipTriggerProps) {
  return (
    <TooltipPrimitive.Trigger {...rest} asChild={asChild}>
      {children}
    </TooltipPrimitive.Trigger>
  );
}

function TooltipPositioner({ children, ...rest }: TooltipPositionerProps) {
  return (
    <TooltipPrimitive.Positioner {...rest}>
      {children}
    </TooltipPrimitive.Positioner>
  );
}

const TooltipContent = withContext(TooltipPrimitive.Content, {
  name: "Content",
});

const TooltipArrow = withContext(TooltipPrimitive.Arrow, {
  name: "Arrow",
});
// #endregion

// #region Closed
export function Tooltip({
  arrowProps,
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
            <TooltipArrow {...arrowProps} className={classNames?.arrow}>
              <TooltipPrimitive.ArrowTip />
            </TooltipArrow>

            {content}
          </TooltipContent>
        </TooltipPositioner>
      </Portal>
    </TooltipRoot>
  );
}
// #endregion

// #region Display Names
TooltipRoot.displayName = "Tooltip.Root";
TooltipTrigger.displayName = "Tooltip.Trigger";
TooltipPositioner.displayName = "Tooltip.Positioner";
Tooltip.displayName = "Tooltip";

// #endregion

export type {
  TooltipArrowProps,
  TooltipContentProps,
  TooltipPositionerProps,
  TooltipTriggerProps,
} from "@ark-ui/react/tooltip";
