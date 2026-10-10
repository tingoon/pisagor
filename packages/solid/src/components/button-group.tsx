import { ark } from "@ark-ui/solid/factory";
import type { ButtonGroupProps as BaseButtonGroupProps } from "@pisagor/props";
import { buttonGroupRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
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

// #region Types
export interface ButtonGroupProps
  extends ComponentProps<typeof ark.fieldset>,
    BaseButtonGroupProps {}

export type ButtonGroupTextProps = ComponentProps<typeof ark.div>;
// #endregion

// #region Parts
export const ButtonGroupRoot: Component<ButtonGroupProps> = withProvider(
  ark.fieldset,
  { name: "Root", slot: "base" },
);

export const ButtonGroupText = withContext(ark.div, { name: "Text" });

export function ButtonGroupSeparator(props: SeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["orientation", "class"]);
  const styles = useButtonGroup();

  return (
    <Separator
      {...rest}
      class={styles.slots.separator({ class: local.class })}
      data-part="separator"
      data-scope="button-group"
      orientation={local.orientation ?? "vertical"}
    />
  );
}
// #endregion

export const ButtonGroup = Object.assign(ButtonGroupRoot, {
  Separator: ButtonGroupSeparator,
  Text: ButtonGroupText,
});
