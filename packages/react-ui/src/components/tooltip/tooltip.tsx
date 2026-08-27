import { Portal } from "@ark-ui/react/portal";
import { Tooltip as TooltipPrimitive } from "@ark-ui/react/tooltip";
import { type TooltipSlots, tooltipVariants } from "@pisagor/recipes/tooltip";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import type { VariantClassNames } from "../../internal/types";
import { TooltipContext, useTooltip } from "./tooltip.context";

// #region Types
type TooltipContentProps = ComponentProps<typeof TooltipPrimitive.Content>;

type TooltipContextApi = Parameters<ComponentProps<typeof TooltipPrimitive.Context>["children"]>[0];

export type TooltipTriggerHandleProps = ReturnType<TooltipContextApi["getTriggerProps"]>;

export type TooltipTriggerHandle = (props: TooltipTriggerHandleProps) => ReactElement;

type TooltipTriggerProps = ComponentProps<typeof TooltipPrimitive.Trigger>;

type TooltipPositionerProps = ComponentProps<typeof TooltipPrimitive.Positioner>;

type TooltipArrowProps = ComponentProps<typeof TooltipPrimitive.Arrow>;

type TooltipClassNames = VariantClassNames<TooltipSlots>;

type TooltipRootProps = ComponentProps<typeof TooltipPrimitive.Root>;

export interface TooltipProps extends Omit<TooltipRootProps, "children"> {
  /** Slot class names */
  classNames?: TooltipClassNames;
  /** Tooltip text or content */
  content: ReactNode;
  /** Trigger element or render function that receives trigger props from the handle API */
  children: ReactElement | TooltipTriggerHandle;
  /** Extra props forwarded to the tooltip content element */
  contentProps?: Omit<TooltipContentProps, "children" | "className">;
  /** Extra props forwarded to the tooltip trigger element */
  triggerProps?: Omit<TooltipTriggerProps, "asChild" | "children" | "className">;
  /** Extra props forwarded to the tooltip positioner element */
  positionerProps?: Omit<TooltipPositionerProps, "children" | "className">;
  /** Extra props forwarded to the tooltip arrow element */
  arrowProps?: Omit<TooltipArrowProps, "children" | "className">;
}
// #endregion

// #region Parts
function TooltipRoot({
  children,
  closeDelay = 150,
  lazyMount = true,
  openDelay = 400,
  positioning = { placement: "top" },
  unmountOnExit = true,
  ...rest
}: TooltipRootProps) {
  const slots = tooltipVariants();

  return (
    <TooltipContext value={{ slots }}>
      <TooltipPrimitive.Root
        {...rest}
        closeDelay={closeDelay}
        lazyMount={lazyMount}
        openDelay={openDelay}
        positioning={positioning}
        unmountOnExit={unmountOnExit}
      >
        {children}
      </TooltipPrimitive.Root>
    </TooltipContext>
  );
}

function TooltipTrigger({ asChild = true, children, ...rest }: TooltipTriggerProps) {
  return (
    <TooltipPrimitive.Trigger {...rest} asChild={asChild}>
      {children}
    </TooltipPrimitive.Trigger>
  );
}

function TooltipPositioner({ children, ...rest }: TooltipPositionerProps) {
  return <TooltipPrimitive.Positioner {...rest}>{children}</TooltipPrimitive.Positioner>;
}

function TooltipContent({ className, children, ...rest }: TooltipContentProps) {
  const { slots } = useTooltip();

  return (
    <TooltipPrimitive.Content {...rest} className={slots.content({ className })}>
      {children}
    </TooltipPrimitive.Content>
  );
}

function TooltipArrow({ className, children, ...rest }: TooltipArrowProps) {
  const { slots } = useTooltip();

  return (
    <TooltipPrimitive.Arrow {...rest} className={slots.arrow({ className })}>
      {children}
    </TooltipPrimitive.Arrow>
  );
}
// #endregion

// #region Closed
export function Tooltip({
  arrowProps,
  children,
  classNames,
  content,
  contentProps,
  positionerProps,
  triggerProps,
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
          <TooltipContent {...contentProps} className={classNames?.content}>
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
TooltipContent.displayName = "Tooltip.Content";
TooltipArrow.displayName = "Tooltip.Arrow";
Tooltip.displayName = "Tooltip";
// #endregion
