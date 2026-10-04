import type {
  CollapsibleContentProps,
  CollapsibleIndicatorProps,
  CollapsibleRootProps as CollapsiblePrimitiveRootProps,
  CollapsibleTriggerProps,
} from "@ark-ui/react/collapsible";
import { Collapsible as CollapsiblePrimitive } from "@ark-ui/react/collapsible";
import { CaretDownIcon } from "@phosphor-icons/react";
import type { CollapsibleProps as CollapsibleRootSharedProps } from "@pisagor/props";
import { collapsibleRecipe } from "@pisagor/recipes";

import { CollapsibleContext, useCollapsible } from "./collapsible.context";

// #region Types
export interface CollapsibleRootProps
  extends CollapsiblePrimitiveRootProps,
    CollapsibleRootSharedProps {}
// #endregion

// #region Parts
export function CollapsibleRoot({
  lazyMount,
  unmountOnExit,
  children,
  collapsedHeight,
  recipe = collapsibleRecipe,
  className,
  ...rest
}: CollapsibleRootProps) {
  const slots = recipe();

  return (
    <CollapsibleContext value={{ slots }}>
      <CollapsiblePrimitive.Root
        {...rest}
        className={slots.base({ className })}
        collapsedHeight={collapsedHeight}
        data-partial-collapse={collapsedHeight ? "" : undefined}
        lazyMount={collapsedHeight ? false : lazyMount}
        unmountOnExit={collapsedHeight ? false : unmountOnExit}
      >
        {children}
      </CollapsiblePrimitive.Root>
    </CollapsibleContext>
  );
}

export function CollapsibleTrigger({
  className,
  ...rest
}: CollapsibleTriggerProps) {
  const { slots } = useCollapsible();

  return (
    <CollapsiblePrimitive.Trigger
      {...rest}
      className={slots.trigger({ className })}
    />
  );
}

export function CollapsibleContent({
  children,
  className,
  ...rest
}: CollapsibleContentProps) {
  const { slots } = useCollapsible();

  return (
    <CollapsiblePrimitive.Content {...rest} className={slots.content()}>
      <div className={className}>{children}</div>
    </CollapsiblePrimitive.Content>
  );
}

export function CollapsibleIndicator({
  className,
  ...rest
}: CollapsibleIndicatorProps) {
  const { slots } = useCollapsible();

  return (
    <CollapsiblePrimitive.Indicator
      {...rest}
      className={slots.indicator({ className })}
    >
      <CaretDownIcon className={slots.icon()} />
    </CollapsiblePrimitive.Indicator>
  );
}
// #endregion

// #region Display Names
CollapsibleRoot.displayName = "Collapsible";
CollapsibleTrigger.displayName = "Collapsible.Trigger";
CollapsibleContent.displayName = "Collapsible.Content";
CollapsibleIndicator.displayName = "Collapsible.Indicator";
// #endregion
