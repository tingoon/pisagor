import type { ButtonGroupRootContract } from "@pisagor/contracts";
import { buttonGroupRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent } from "react";
import { createSlotRecipeContext } from "../internal";
import { Separator, type SeparatorProps } from "./separator";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "ButtonGroup",
  recipe: buttonGroupRecipe,
});
// #endregion

// #region Parts
export const ButtonGroupRoot = withProvider<
  ComponentProps<"fieldset"> & ButtonGroupRootContract
>("fieldset", {
  name: "Root",
  slot: "base",
}) as FunctionComponent<ComponentProps<"fieldset"> & ButtonGroupRootContract>;

export const ButtonGroupText = withContext<ComponentProps<"div">>("div", {
  name: "Text",
  slot: "text",
});

export function ButtonGroupSeparator({
  orientation = "vertical",
  className,
  ...rest
}: SeparatorProps) {
  const { slots } = useStyles();

  return (
    <Separator
      {...rest}
      className={slots.separator({ className })}
      data-part="separator"
      data-scope="button-group"
      orientation={orientation}
    />
  );
}
// #endregion

// #region Types
export type ButtonGroupProps = ComponentProps<typeof ButtonGroupRoot>;
export type ButtonGroupTextProps = ComponentProps<typeof ButtonGroupText>;
// #endregion

ButtonGroupSeparator.displayName = "ButtonGroup.Separator";

export const ButtonGroup = Object.assign(ButtonGroupRoot, {
  Separator: ButtonGroupSeparator,
  Text: ButtonGroupText,
});
