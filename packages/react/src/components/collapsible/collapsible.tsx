import { Collapsible as CollapsiblePrimitive } from "@ark-ui/react/collapsible";
import { CaretDownIcon } from "@phosphor-icons/react";
import {
  collapsibleContentVariants,
  collapsibleIndicatorVariants,
  collapsibleInlineVariants,
  collapsibleTriggerVariants,
  collapsibleVariants,
} from "@pisagor/styles/ui/collapsible";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
interface CollapsibleRootProps
  extends ComponentProps<typeof CollapsiblePrimitive.Root>,
    WithTestId {}
// #endregion

// #region Components
export function CollapsibleRoot({
  collapsedHeight,
  lazyMount = true,
  unmountOnExit = true,
  className,
  testId,
  ...rest
}: CollapsibleRootProps) {
  return (
    <CollapsiblePrimitive.Root
      {...rest}
      className={cn(collapsibleVariants(), className)}
      collapsedHeight={collapsedHeight}
      data-partial-collapse={collapsedHeight ? "" : undefined}
      data-testid={testId}
      lazyMount={collapsedHeight ? false : lazyMount}
      unmountOnExit={collapsedHeight ? false : unmountOnExit}
    />
  );
}
CollapsibleRoot.displayName = "Collapsible";

export function CollapsibleTrigger({
  className,
  ...rest
}: ComponentProps<typeof CollapsiblePrimitive.Trigger>) {
  return (
    <CollapsiblePrimitive.Trigger
      {...rest}
      className={cn(collapsibleTriggerVariants(), className)}
    />
  );
}
CollapsibleTrigger.displayName = "Collapsible.Trigger";

export function CollapsibleContent({
  className,
  children,
  ...rest
}: ComponentProps<typeof CollapsiblePrimitive.Content>) {
  return (
    <CollapsiblePrimitive.Content {...rest} className={cn(collapsibleContentVariants())}>
      <div className={className}>{children}</div>
    </CollapsiblePrimitive.Content>
  );
}
CollapsibleContent.displayName = "Collapsible.Content";

export function CollapsibleIndicator({
  className,
  ...rest
}: ComponentProps<typeof CollapsiblePrimitive.Indicator>) {
  return (
    <CollapsiblePrimitive.Indicator
      {...rest}
      className={cn(collapsibleIndicatorVariants(), className)}
    >
      <CaretDownIcon className={collapsibleInlineVariants()} />
    </CollapsiblePrimitive.Indicator>
  );
}
CollapsibleIndicator.displayName = "Collapsible.Indicator";
// #endregion
