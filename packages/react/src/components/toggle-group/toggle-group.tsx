import { ToggleGroup as ToggleGroupPrimitive } from "@ark-ui/react/toggle-group";
import { toggleGroupInlineVariants, toggleGroupVariants } from "@pisagor/styles/ui/toggle-group";
import type { ComponentProps, ReactNode } from "react";
import type { WithTestId } from "../../internal/types";
import { Toggle } from "../toggle";
import {
  ToggleGroupContext,
  type ToggleGroupContextProps,
  useToggleGroup,
} from "./toggle-group.context";

// #region Types
interface ToggleGroupPresetItem {
  value: string;
  children: ReactNode;
  disabled?: boolean;
}

export type ToggleGroupRootProps = Omit<
  ComponentProps<typeof ToggleGroupPrimitive.Root>,
  "onValueChange"
> &
  ToggleGroupContextProps &
  WithTestId & {
    onValueChange?: (value: string | string[]) => void;
  };

export interface ToggleGroupProps extends Omit<ToggleGroupRootProps, "children"> {
  items?: ToggleGroupPresetItem[];
}

export interface ToggleGroupItemProps extends ComponentProps<typeof ToggleGroupPrimitive.Item> {}
// #endregion

// #region Parts
export function ToggleGroupRoot({
  multiple = true,
  orientation = "horizontal",
  variant = "ghost",
  size = "md",
  spacing = 0,
  className,
  style,
  children,
  onValueChange,
  testId,
  ...rest
}: ToggleGroupRootProps) {
  return (
    <ToggleGroupContext value={{ size, spacing, variant }}>
      <ToggleGroupPrimitive.Root
        {...rest}
        className={toggleGroupVariants({ className, orientation })}
        data-testid={testId}
        multiple={multiple}
        onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
        orientation={orientation}
        style={{
          ...style,
          "--gap": spacing,
        }}
      >
        {children}
      </ToggleGroupPrimitive.Root>
    </ToggleGroupContext>
  );
}

export function ToggleGroupItem({ value, className, ...rest }: ToggleGroupItemProps) {
  const { variant, size, spacing } = useToggleGroup();

  return (
    <ToggleGroupPrimitive.Item asChild value={value}>
      <Toggle
        {...rest}
        className={toggleGroupInlineVariants({ className })}
        data-spacing={spacing}
        data-variant={variant}
        size={size}
        variant={variant}
      />
    </ToggleGroupPrimitive.Item>
  );
}
// #endregion

// #region Shorthand
export function ToggleGroupShorthand({ items, ...rest }: ToggleGroupProps) {
  return (
    <ToggleGroupRoot {...rest}>
      {items?.map((item) => (
        <ToggleGroupItem disabled={item.disabled} key={item.value} value={item.value}>
          {item.children}
        </ToggleGroupItem>
      ))}
    </ToggleGroupRoot>
  );
}
// #endregion

// #region Display Names
ToggleGroupRoot.displayName = "ToggleGroup.Root";
ToggleGroupItem.displayName = "ToggleGroup.Item";
ToggleGroupShorthand.displayName = "ToggleGroup";
// #endregion
