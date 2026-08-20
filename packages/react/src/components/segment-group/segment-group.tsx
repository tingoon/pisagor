import { SegmentGroup as SegmentGroupPrimitive } from "@ark-ui/react/segment-group";
import {
  segmentGroupIndicatorVariants,
  segmentGroupItemTextVariants,
  segmentGroupItemVariants,
  segmentGroupVariants,
} from "@pisagor/styles/ui/segment-group";
import type { ComponentProps, ReactNode } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
type SegmentGroupVariant = "default" | "underline";

interface SegmentGroupPresetItem {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface SegmentGroupRootProps
  extends Omit<ComponentProps<typeof SegmentGroupPrimitive.Root>, "onValueChange">,
    WithTestId {
  /**
   * The visual variant of the segment group.
   *
   * @defaultValue "default"
   */
  variant?: SegmentGroupVariant;
  onValueChange?: (value: string | null) => void;
}

export interface SegmentGroupProps extends Omit<SegmentGroupRootProps, "children"> {
  items?: SegmentGroupPresetItem[];
}

export interface SegmentGroupItemProps extends ComponentProps<typeof SegmentGroupPrimitive.Item> {
  text?: ReactNode;
}

export type SegmentGroupItemTextProps = ComponentProps<typeof SegmentGroupPrimitive.ItemText>;

export type SegmentGroupIndicatorProps = ComponentProps<typeof SegmentGroupPrimitive.Indicator>;
// #endregion

// #region Parts
export function SegmentGroupRoot({
  orientation = "horizontal",
  variant = "default",
  className,
  children,
  onValueChange,
  testId,
  ...rest
}: SegmentGroupRootProps) {
  return (
    <SegmentGroupPrimitive.Root
      {...rest}
      className={segmentGroupVariants({ className })}
      data-testid={testId}
      data-variant={variant}
      onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
      orientation={orientation}
    >
      <SegmentGroupIndicator />

      {children}
    </SegmentGroupPrimitive.Root>
  );
}

export function SegmentGroupItem({ className, children, text, ...rest }: SegmentGroupItemProps) {
  const content = children ?? text;

  return (
    <SegmentGroupPrimitive.Item {...rest} className={segmentGroupItemVariants({ className })}>
      {content != null && <SegmentGroupItemText>{content}</SegmentGroupItemText>}

      <SegmentGroupPrimitive.ItemControl />
      <SegmentGroupPrimitive.ItemHiddenInput />
    </SegmentGroupPrimitive.Item>
  );
}

function SegmentGroupItemText({ className, ...rest }: SegmentGroupItemTextProps) {
  return (
    <SegmentGroupPrimitive.ItemText
      {...rest}
      className={segmentGroupItemTextVariants({ className })}
    />
  );
}

export function SegmentGroupIndicator({ className, ...rest }: SegmentGroupIndicatorProps) {
  return (
    <SegmentGroupPrimitive.Indicator
      {...rest}
      className={segmentGroupIndicatorVariants({ className })}
    />
  );
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
