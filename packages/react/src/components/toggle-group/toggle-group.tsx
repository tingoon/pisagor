import { ToggleGroup as ToggleGroupPrimitive } from "@ark-ui/react/toggle-group";
import { toggleGroupRecipe } from "@pisagor/recipes/toggle-group";
import type { ComponentProps, ReactNode } from "react";
import { useMemo } from "react";
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
  Omit<ToggleGroupContextProps, "slots"> & {
    onValueChange?: (value: string | string[]) => void;
  };

export interface ToggleGroupProps extends Omit<ToggleGroupRootProps, "children"> {
  items?: ToggleGroupPresetItem[];
}

export type ToggleGroupItemProps = ComponentProps<typeof ToggleGroupPrimitive.Item>;
// #endregion

// #region Parts
export function ToggleGroupRoot({
  orientation = "horizontal",
  size = "md",
  variant = "ghost",
  multiple = true,
  children,
  spacing = 0,
  onValueChange,
  className,
  style,
  ...rest
}: ToggleGroupRootProps) {
  const slots = useMemo(() => toggleGroupRecipe({ orientation }), [orientation]);

  return (
    <ToggleGroupContext value={{ size, slots, spacing, variant }}>
      <ToggleGroupPrimitive.Root
        {...rest}
        className={slots.base({ className })}
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
  const { slots, variant, size, spacing } = useToggleGroup();

  return (
    <ToggleGroupPrimitive.Item asChild value={value}>
      <Toggle
        {...rest}
        className={slots.item({ className })}
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
