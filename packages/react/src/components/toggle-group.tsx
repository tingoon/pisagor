import {
  type ToggleGroupItemProps,
  ToggleGroup as ToggleGroupPrimitive,
  type ToggleGroupRootProps as ToggleGroupPrimitiveRootProps,
} from "@ark-ui/react/toggle-group";
import type { ToggleGroupProps as BaseToggleGroupRootProps } from "@pisagor/props";
import { toggleGroupRecipe } from "@pisagor/recipes";
import type { ReactNode } from "react";
import { createContext, use, useMemo } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { Toggle, type ToggleProps } from "./toggle";

// #region Context
const { Context: ToggleGroupStylesContext, useStyles: useToggleGroupStyles } =
  createSlotRecipeContext({
    name: "ToggleGroup",
    recipe: toggleGroupRecipe,
  });

export interface ToggleGroupItemOptions
  extends Pick<ToggleProps, "variant" | "size"> {
  /**
   * Gap between items.
   *
   * @defaultValue 0
   */
  spacing?: number;
}

const ToggleGroupItemOptionsContext = createContext<ToggleGroupItemOptions>({
  size: "md",
  spacing: 0,
  variant: "ghost",
});

function useToggleGroup() {
  const styles = useToggleGroupStyles();
  const options = use(ToggleGroupItemOptionsContext);
  return { ...styles, ...options };
}
// #endregion

// #region Types
interface ToggleGroupPresetItem {
  value: string;
  children: ReactNode;
  disabled?: boolean;
}

export interface ToggleGroupRootProps
  extends Omit<ToggleGroupPrimitiveRootProps, "onValueChange">,
    ToggleGroupItemOptions,
    BaseToggleGroupRootProps {
  onValueChange?: (value: string | string[]) => void;
}

export interface ToggleGroupProps
  extends Omit<ToggleGroupRootProps, "children"> {
  items?: ToggleGroupPresetItem[];
}
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
  recipe = toggleGroupRecipe,
  className,
  style,
  ...rest
}: ToggleGroupRootProps) {
  const slots = useMemo(() => recipe({ orientation }), [orientation, recipe]);

  return (
    <ToggleGroupStylesContext
      value={{ slots, variants: { orientation } as never }}
    >
      <ToggleGroupItemOptionsContext value={{ size, spacing, variant }}>
        <ToggleGroupPrimitive.Root
          {...rest}
          className={slots.base({ className })}
          multiple={multiple}
          onValueChange={
            onValueChange
              ? (details) => onValueChange(details.value)
              : undefined
          }
          orientation={orientation}
          style={{
            ...style,
            "--gap": spacing,
          }}
        >
          {children}
        </ToggleGroupPrimitive.Root>
      </ToggleGroupItemOptionsContext>
    </ToggleGroupStylesContext>
  );
}

export function ToggleGroupItem({
  value,
  className,
  ...rest
}: ToggleGroupItemProps) {
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
        <ToggleGroupItem
          disabled={item.disabled}
          key={item.value}
          value={item.value}
        >
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

export type { ToggleGroupItemProps } from "@ark-ui/react/toggle-group";

export const ToggleGroup = Object.assign(ToggleGroupShorthand, {
  Item: ToggleGroupItem,
  Root: ToggleGroupRoot,
});
