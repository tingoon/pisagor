import type {
  CollapsibleContentProps,
  CollapsibleIndicatorProps,
  CollapsibleRootProps as CollapsiblePrimitiveRootProps,
} from "@ark-ui/react/collapsible";
import { Collapsible as CollapsiblePrimitive } from "@ark-ui/react/collapsible";
import { CaretDownIcon } from "@phosphor-icons/react";
import type { CollapsibleProps as BaseCollapsibleRootProps } from "@pisagor/props";
import { collapsibleRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const {
  Context: CollapsibleStylesContext,
  useStyles: useCollapsible,
  withContext,
} = createSlotRecipeContext({
  name: "Collapsible",
  recipe: collapsibleRecipe,
});
// #endregion

// #region Types
export interface LocalCollapsibleRootProps
  extends CollapsiblePrimitiveRootProps,
    BaseCollapsibleRootProps {}
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
}: LocalCollapsibleRootProps) {
  const slots = recipe();

  return (
    <CollapsibleStylesContext value={{ slots, variants: {} as never }}>
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
    </CollapsibleStylesContext>
  );
}

export const CollapsibleTrigger = withContext(CollapsiblePrimitive.Trigger, {
  name: "Trigger",
});

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
CollapsibleContent.displayName = "Collapsible.Content";
CollapsibleIndicator.displayName = "Collapsible.Indicator";

// #endregion

export type {
  CollapsibleContentProps,
  CollapsibleIndicatorProps,
  CollapsibleRootProps,
  CollapsibleTriggerProps,
} from "@ark-ui/react/collapsible";

export const Collapsible = Object.assign(CollapsibleRoot, {
  Content: CollapsibleContent,
  Indicator: CollapsibleIndicator,
  Trigger: CollapsibleTrigger,
});
