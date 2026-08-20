import { Portal } from "@ark-ui/react/portal";
import { Tooltip as TooltipPrimitive } from "@ark-ui/react/tooltip";
import { tooltipVariants } from "@pisagor/styles/ui/tooltip";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import type { VariantClassNames, WithTestId } from "../../internal/types";

// #region Types
export type TooltipContentProps = ComponentProps<typeof TooltipPrimitive.Content>;

type TooltipContextApi = Parameters<ComponentProps<typeof TooltipPrimitive.Context>["children"]>[0];

export type TooltipTriggerHandleProps = ReturnType<TooltipContextApi["getTriggerProps"]>;

export type TooltipTriggerHandle = (props: TooltipTriggerHandleProps) => ReactElement;

export type TooltipTriggerProps = ComponentProps<typeof TooltipPrimitive.Trigger>;

export type TooltipPositionerProps = ComponentProps<typeof TooltipPrimitive.Positioner>;

export type TooltipArrowProps = ComponentProps<typeof TooltipPrimitive.Arrow>;

type TooltipClassNames = VariantClassNames<typeof tooltipVariants>;

export type TooltipRootProps = Omit<ComponentProps<typeof TooltipPrimitive.Root>, "children">;

export interface TooltipProps extends TooltipRootProps, WithTestId {
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

// #region Part
export function Tooltip({
  content,
  children,
  classNames,
  contentProps,
  triggerProps,
  positionerProps,
  arrowProps,
  testId,
  positioning = {
    placement: "top",
  },
  lazyMount = true,
  unmountOnExit = true,
  closeDelay = 150,
  openDelay = 400,
  ...rest
}: TooltipProps) {
  const slots = tooltipVariants();

  const trigger =
    typeof children === "function" ? (
      <TooltipPrimitive.Context>
        {(api) => children(api.getTriggerProps())}
      </TooltipPrimitive.Context>
    ) : (
      <TooltipPrimitive.Trigger {...triggerProps} asChild data-testid={testId}>
        {children}
      </TooltipPrimitive.Trigger>
    );

  return (
    <TooltipPrimitive.Root
      {...rest}
      closeDelay={closeDelay}
      lazyMount={lazyMount}
      openDelay={openDelay}
      positioning={positioning}
      unmountOnExit={unmountOnExit}
    >
      {trigger}
      <Portal>
        <TooltipPrimitive.Positioner {...positionerProps}>
          <TooltipPrimitive.Content
            {...contentProps}
            className={slots.content({ className: classNames?.content })}
          >
            <TooltipPrimitive.Arrow
              {...arrowProps}
              className={slots.arrow({ className: classNames?.arrow })}
            >
              <TooltipPrimitive.ArrowTip />
            </TooltipPrimitive.Arrow>

            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Positioner>
      </Portal>
    </TooltipPrimitive.Root>
  );
}
// #endregion
