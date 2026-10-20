import {
  SegmentGroup as SegmentGroupPrimitive,
  type SegmentGroupItemProps as SegmentGroupItemPrimitiveProps,
  type SegmentGroupRootProps as SegmentGroupRootPrimitiveProps,
} from "@ark-ui/react";
import type {
  SegmentGroupPresetItem as BaseSegmentGroupPresetItem,
  SegmentGroupRootContract,
  SegmentGroupContract,
} from "@pisagor/contracts";
import { segmentGroupRecipe } from "@pisagor/recipes";
import type { FunctionComponent, ReactNode, ComponentProps } from "react";
import { cn } from "@pisagor/utils";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
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

export type SegmentGroupItemProps = SegmentGroupItemPrimitiveProps;
// #endregion

// #region Parts
const SegmentGroupRootBase = withProvider<
  ComponentProps<typeof SegmentGroupPrimitive.Root> & SegmentGroupRootContract
>(SegmentGroupPrimitive.Root, { name: "Root" }) as FunctionComponent<
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
      {children}
    </SegmentGroupRootBase>
  );
}

const SegmentGroupItem = withContext<SegmentGroupItemProps>(
  SegmentGroupPrimitive.Item,
  { name: "Item" },
);

const SegmentGroupItemControl = withContext<
  ComponentProps<typeof SegmentGroupPrimitive.ItemControl>
>(SegmentGroupPrimitive.ItemControl, { name: "ItemControl" });

const SegmentGroupItemHiddenInput = SegmentGroupPrimitive.ItemHiddenInput;

const SegmentGroupItemText = withContext<
  ComponentProps<typeof SegmentGroupPrimitive.ItemText>
>(SegmentGroupPrimitive.ItemText, { name: "ItemText" });

const SegmentGroupIndicator = withContext<
  ComponentProps<typeof SegmentGroupPrimitive.Indicator>
>(SegmentGroupPrimitive.Indicator, {
  name: "Indicator",
});
// #endregion

// #region Shorthand
export function SegmentGroupShorthand({
  classNames,
  className,
  items,
  ...rest
}: SegmentGroupProps) {
  return (
    <SegmentGroupRoot {...rest} className={cn(classNames?.base, className)}>
      <SegmentGroupIndicator className={classNames?.indicator} />
      {items?.map((item) => (
        <SegmentGroupItem
          className={classNames?.item}
          disabled={item.disabled}
          key={item.value}
          value={item.value}
        >
          <SegmentGroupItemText className={classNames?.itemText}>
            {item.label}
          </SegmentGroupItemText>
          <SegmentGroupItemControl className={classNames?.itemControl} />
          <SegmentGroupItemHiddenInput />
        </SegmentGroupItem>
      ))}
    </SegmentGroupRoot>
  );
}

SegmentGroupShorthand.displayName = "SegmentGroup";
// #endregion

// #region Display Names
SegmentGroupRoot.displayName = "SegmentGroup.Root";

// #endregion

export type {
  SegmentGroupIndicatorProps,
  SegmentGroupItemControlProps,
  SegmentGroupItemHiddenInputProps,
  SegmentGroupItemTextProps,
} from "@ark-ui/react";

export const SegmentGroup = Object.assign(SegmentGroupShorthand, {
  Indicator: SegmentGroupIndicator,
  Item: SegmentGroupItem,
  ItemControl: SegmentGroupItemControl,
  ItemHiddenInput: SegmentGroupItemHiddenInput,
  ItemText: SegmentGroupItemText,
  Root: SegmentGroupRoot,
});
