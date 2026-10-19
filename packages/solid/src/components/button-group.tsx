import type { ButtonGroupRootContract } from "@pisagor/contracts";
import { buttonGroupRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";
import { Separator, type SeparatorProps } from "./separator";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "ButtonGroup",
  recipe: buttonGroupRecipe,
});
// #endregion

// #region Types
export type ButtonGroupProps = ComponentProps<"fieldset"> &
  ButtonGroupRootContract;

export type ButtonGroupTextProps = ComponentProps<"div">;
// #endregion

// #region Parts
export const ButtonGroupRoot: Component<ButtonGroupProps> = withProvider<
  ComponentProps<"fieldset"> & ButtonGroupRootContract
>("fieldset", {
  name: "Root",
  slot: "base",
});

export const ButtonGroupText = withContext<ComponentProps<"div">>("div", {
  name: "Text",
});

export function ButtonGroupSeparator(props: SeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["orientation", "class"]);
  const styles = useStyles();

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
