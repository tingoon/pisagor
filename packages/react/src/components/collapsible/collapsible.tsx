import { Collapsible as CollapsiblePrimitive } from "@ark-ui/react/collapsible";
import { CaretDownIcon } from "@phosphor-icons/react";
import {
  collapsibleContentVariants,
  collapsibleIndicatorVariants,
  collapsibleTriggerVariants,
  collapsibleVariants,
} from "@pisagor/styles/ui/collapsible";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
export interface CollapsibleRootProps
  extends ComponentProps<typeof CollapsiblePrimitive.Root>,
    WithTestId {}

export type CollapsibleTriggerProps = ComponentProps<typeof CollapsiblePrimitive.Trigger>;

export type CollapsibleContentProps = ComponentProps<typeof CollapsiblePrimitive.Content>;

export type CollapsibleIndicatorProps = ComponentProps<typeof CollapsiblePrimitive.Indicator>;
// #endregion

// #region Parts
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
      className={collapsibleVariants({ className })}
      collapsedHeight={collapsedHeight}
      data-partial-collapse={collapsedHeight ? "" : undefined}
      data-testid={testId}
      lazyMount={collapsedHeight ? false : lazyMount}
      unmountOnExit={collapsedHeight ? false : unmountOnExit}
    />
  );
}
CollapsibleRoot.displayName = "Collapsible";

export function CollapsibleTrigger({ className, ...rest }: CollapsibleTriggerProps) {
  return (
    <CollapsiblePrimitive.Trigger {...rest} className={collapsibleTriggerVariants({ className })} />
  );
}
CollapsibleTrigger.displayName = "Collapsible.Trigger";

export function CollapsibleContent({ className, children, ...rest }: CollapsibleContentProps) {
  return (
    <CollapsiblePrimitive.Content {...rest} className={collapsibleContentVariants()}>
      <div className={className}>{children}</div>
    </CollapsiblePrimitive.Content>
  );
}
CollapsibleContent.displayName = "Collapsible.Content";

export function CollapsibleIndicator({ className, ...rest }: CollapsibleIndicatorProps) {
  const recipe = collapsibleIndicatorVariants();

  return (
    <CollapsiblePrimitive.Indicator {...rest} className={recipe.base({ className })}>
      <CaretDownIcon className={recipe.icon()} />
    </CollapsiblePrimitive.Indicator>
  );
}
CollapsibleIndicator.displayName = "Collapsible.Indicator";
// #endregion
