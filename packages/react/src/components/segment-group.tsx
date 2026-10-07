import type {
  SegmentGroupItemProps as SegmentGroupPrimitiveItemProps,
  SegmentGroupRootProps as SegmentGroupPrimitiveRootProps,
} from "@ark-ui/react/segment-group";
import { SegmentGroup as SegmentGroupPrimitive } from "@ark-ui/react/segment-group";
import type { SegmentGroupProps as BaseSegmentGroupRootProps } from "@pisagor/props";
import { segmentGroupRecipe } from "@pisagor/recipes";
import type { FunctionComponent, ReactNode } from "react";
import { createSlotRecipeContext } from "../utils";

// #region Context
const {
  useStyles: useSegmentGroup,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "SegmentGroup",
  recipe: segmentGroupRecipe,
});
// #endregion

// #region Types
type SegmentGroupVariant = "default" | "underline";

interface SegmentGroupPresetItem {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface SegmentGroupRootProps
  extends Omit<SegmentGroupPrimitiveRootProps, "onValueChange">,
    BaseSegmentGroupRootProps {
  /**
   * The visual variant of the segment group.
   *
   * @defaultValue "default"
   */
  variant?: SegmentGroupVariant;
  onValueChange?: (value: string | null) => void;
}

export interface SegmentGroupProps
  extends Omit<SegmentGroupRootProps, "children"> {
  items?: SegmentGroupPresetItem[];
}

export interface SegmentGroupItemProps extends SegmentGroupPrimitiveItemProps {
  text?: ReactNode;
}
// #endregion

// #region Parts
const SegmentGroupRootBase = withProvider(SegmentGroupPrimitive.Root, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<
  SegmentGroupPrimitiveRootProps & BaseSegmentGroupRootProps
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
  const { slots } = useSegmentGroup();
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
  name: "ItemText",
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
} from "@ark-ui/react/segment-group";

export const SegmentGroup = Object.assign(SegmentGroupShorthand, {
  Indicator: SegmentGroupIndicator,
  Item: SegmentGroupItem,
  Root: SegmentGroupRoot,
});
