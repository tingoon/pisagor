import { ToggleGroup as ToggleGroupPrimitive } from "@ark-ui/react/toggle-group";
import { toggleGroupInlineVariants, toggleGroupVariants } from "@pisagor/styles/ui/toggle-group";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils";
import { Toggle, type ToggleProps } from "../toggle";

// #region Variants

// #endregion

// #region Types
type ToggleGroupContextProps = Pick<ToggleProps, "variant" | "size"> & {
  /**
   * Gap between items.
   *
   * @defaultValue 0
   */
  spacing?: number;
};

interface ToggleGroupPresetItem {
  value: string;
  children: ReactNode;
  disabled?: boolean;
}

type ToggleGroupRootProps = Omit<
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

interface ToggleGroupItemProps extends ComponentProps<typeof ToggleGroupPrimitive.Item> {}
// #endregion

// #region Context
const [ToggleGroupContext, useToggleGroupContext] = createContext<ToggleGroupContextProps>({
  name: "ToggleGroup",
});

// #endregion

// #region Components
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
        className={cn(toggleGroupVariants({ orientation }), className)}
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
ToggleGroupRoot.displayName = "ToggleGroup.Root";

export function ToggleGroupItem({ value, className, ...rest }: ToggleGroupItemProps) {
  const { variant, size, spacing } = useToggleGroupContext();

  return (
    <ToggleGroupPrimitive.Item asChild value={value}>
      <Toggle
        {...rest}
        className={cn(toggleGroupInlineVariants(), className)}
        data-spacing={spacing}
        data-variant={variant}
        size={size}
        variant={variant}
      />
    </ToggleGroupPrimitive.Item>
  );
}
ToggleGroupItem.displayName = "ToggleGroup.Item";

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
ToggleGroupShorthand.displayName = "ToggleGroup";
// #endregion
