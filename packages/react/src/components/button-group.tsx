import { ark } from "@ark-ui/react/factory";
import type { ButtonGroupProps as BaseButtonGroupProps } from "@pisagor/props";
import { buttonGroupRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { Separator, type SeparatorProps } from "./separator";

// #region Context
const {
  useStyles: useButtonGroup,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "ButtonGroup",
  recipe: buttonGroupRecipe,
});
// #endregion

// #region Parts
export const ButtonGroupRoot = withProvider(ark.fieldset, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<
  ComponentProps<typeof ark.fieldset> & BaseButtonGroupProps
>;

export const ButtonGroupText = withContext(ark.div, {
  name: "Text",
  slot: "text",
});

export function ButtonGroupSeparator({
  orientation = "vertical",
  className,
  ...rest
}: SeparatorProps) {
  const { slots } = useButtonGroup();

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
