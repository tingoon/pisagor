import type {
  SegmentGroupIndicatorProps,
  SegmentGroupItemTextProps,
  SegmentGroupItemProps as SegmentGroupPrimitiveItemProps,
  SegmentGroupRootProps as SegmentGroupPrimitiveRootProps,
} from "@ark-ui/react/segment-group";
import { SegmentGroup as SegmentGroupPrimitive } from "@ark-ui/react/segment-group";
import { segmentGroupRecipe } from "@pisagor/recipes/segment-group";
import type { ReactNode } from "react";
import { SegmentGroupContext, useSegmentGroup } from "./segment-group.context";

// #region Types
type SegmentGroupVariant = "default" | "underline";

interface SegmentGroupPresetItem {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface SegmentGroupRootProps
  extends Omit<SegmentGroupPrimitiveRootProps, "onValueChange"> {
  /**
   * The visual variant of the segment group.
   *
   * @defaultValue "default"
   */
  variant?: SegmentGroupVariant;
  onValueChange?: (value: string | null) => void;
  /**
   * Style recipe. Defaults to `segmentGroupRecipe` from `@pisagor/recipes/segment-group`.
   *
   * @defaultValue segmentGroupRecipe
   */
  recipe?: typeof segmentGroupRecipe;
}

export interface SegmentGroupProps extends Omit<SegmentGroupRootProps, "children"> {
  items?: SegmentGroupPresetItem[];
}

export interface SegmentGroupItemProps extends SegmentGroupPrimitiveItemProps {
  text?: ReactNode;
}

// #endregion

// #region Parts
export function SegmentGroupRoot({
  orientation = "horizontal",
  variant = "default",
  children,
  onValueChange,
  recipe = segmentGroupRecipe,
  className,
  ...rest
}: SegmentGroupRootProps) {
  const slots = recipe();

  return (
    <SegmentGroupContext value={{ slots }}>
      <SegmentGroupPrimitive.Root
        {...rest}
        className={slots.base({ className })}
        data-variant={variant}
        onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
        orientation={orientation}
      >
        <SegmentGroupIndicator />

        {children}
      </SegmentGroupPrimitive.Root>
    </SegmentGroupContext>
  );
}

export function SegmentGroupItem({ children, text, className, ...rest }: SegmentGroupItemProps) {
  const { slots } = useSegmentGroup();
  const content = children ?? text;

  return (
    <SegmentGroupPrimitive.Item {...rest} className={slots.item({ className })}>
      {content != null && <SegmentGroupItemText>{content}</SegmentGroupItemText>}

      <SegmentGroupPrimitive.ItemControl />
      <SegmentGroupPrimitive.ItemHiddenInput />
    </SegmentGroupPrimitive.Item>
  );
}

function SegmentGroupItemText({ className, ...rest }: SegmentGroupItemTextProps) {
  const { slots } = useSegmentGroup();

  return <SegmentGroupPrimitive.ItemText {...rest} className={slots.itemText({ className })} />;
}

export function SegmentGroupIndicator({ className, ...rest }: SegmentGroupIndicatorProps) {
  const { slots } = useSegmentGroup();

  return <SegmentGroupPrimitive.Indicator {...rest} className={slots.indicator({ className })} />;
}
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
SegmentGroupItemText.displayName = "SegmentGroup.ItemText";
SegmentGroupIndicator.displayName = "SegmentGroup.Indicator";
SegmentGroupShorthand.displayName = "SegmentGroup";
// #endregion
