import {
  SegmentGroup as SegmentGroupPrimitive,
  type SegmentGroupItemProps as SegmentGroupItemPrimitiveProps,
  type SegmentGroupRootProps as SegmentGroupRootPrimitiveProps,
} from "@ark-ui/react";
import type {
  SegmentGroupItemContract,
  SegmentGroupPresetItem as BaseSegmentGroupPresetItem,
  SegmentGroupRootContract,
  SegmentGroupContract,
} from "@pisagor/props";
import { segmentGroupRecipe } from "@pisagor/recipes";
import type { FunctionComponent, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "SegmentGroup",
  recipe: segmentGroupRecipe,
});
// #endregion

// #region Types
type SegmentGroupVariant = "default" | "underline";

interface SegmentGroupPresetItem extends Omit<
  BaseSegmentGroupPresetItem,
  "label"
> {
  label: ReactNode;
}

export interface SegmentGroupRootProps
  extends
    Omit<SegmentGroupRootPrimitiveProps, "onValueChange">,
    Omit<SegmentGroupRootContract, "items"> {
  /**
   * The visual variant of the segment group.
   *
   * @defaultValue "default"
   */
  variant?: SegmentGroupVariant;
  onValueChange?: (value: string | null) => void;
}

export interface SegmentGroupProps
  extends
    Omit<SegmentGroupRootProps, "children" | "recipe">,
    SegmentGroupRootContract,
    SegmentGroupContract {
  items?: SegmentGroupPresetItem[];
}

export interface SegmentGroupItemProps
  extends SegmentGroupItemPrimitiveProps, SegmentGroupItemContract {
  text?: ReactNode;
}
// #endregion

// #region Parts
const SegmentGroupRootBase = withProvider(SegmentGroupPrimitive.Root)({
  name: "Root",
  slot: "base",
}) as FunctionComponent<
  SegmentGroupRootPrimitiveProps & Omit<SegmentGroupRootContract, "items">
>;

export function SegmentGroupRoot({
  orientation = "horizontal",
  variant = "default",
  children,
  onValueChange,
  ...rest
}: SegmentGroupRootProps) {
  return (
    <SegmentGroupRootBase
      {...rest}
      data-variant={variant}
      onValueChange={
        onValueChange ? (details) => onValueChange(details.value) : undefined
      }
      orientation={orientation}
    >
      <SegmentGroupIndicator />
      {children}
    </SegmentGroupRootBase>
  );
}

export function SegmentGroupItem({
  children,
  text,
  className,
  ...rest
}: SegmentGroupItemProps) {
  const { slots } = useStyles();
  const content = children ?? text;

  return (
    <SegmentGroupPrimitive.Item {...rest} className={slots.item({ className })}>
      {content != null && (
        <SegmentGroupItemText>{content}</SegmentGroupItemText>
      )}

      <SegmentGroupPrimitive.ItemControl />
      <SegmentGroupPrimitive.ItemHiddenInput />
    </SegmentGroupPrimitive.Item>
  );
}

const SegmentGroupItemText = withContext(SegmentGroupPrimitive.ItemText, {
  defaultProps: { "data-part": "item-text" },
  name: "ItemText",
  slot: "itemText",
});

export const SegmentGroupIndicator = withContext(
  SegmentGroupPrimitive.Indicator,
  {
    name: "Indicator",
  },
);
// #endregion

// #region Shorthand
export function SegmentGroupShorthand({ items, ...rest }: SegmentGroupProps) {
  return (
    <SegmentGroupRoot {...rest}>
      {items?.map((item) => (
        <SegmentGroupItem
          disabled={item.disabled}
          key={item.value}
          text={item.label}
          value={item.value}
        />
      ))}
    </SegmentGroupRoot>
  );
}
// #endregion

// #region Display Names
SegmentGroupRoot.displayName = "SegmentGroup.Root";
SegmentGroupItem.displayName = "SegmentGroup.Item";
SegmentGroupShorthand.displayName = "SegmentGroup";

// #endregion

export type {
  SegmentGroupIndicatorProps,
  SegmentGroupItemTextProps,
} from "@ark-ui/react";

export const SegmentGroup = Object.assign(SegmentGroupShorthand, {
  Indicator: SegmentGroupIndicator,
  Item: SegmentGroupItem,
  Root: SegmentGroupRoot,
});
