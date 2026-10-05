import { ark } from "@ark-ui/solid/factory";
import type { ButtonGroupProps as BaseButtonGroupProps } from "@pisagor/props";
import { buttonGroupRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Separator, type SeparatorProps } from "../separator";
import { ButtonGroupContext, useButtonGroup } from "./button-group.context";

export interface ButtonGroupProps
  extends ComponentProps<typeof ark.fieldset>,
    BaseButtonGroupProps {}

export type ButtonGroupTextProps = ComponentProps<typeof ark.div>;

export function ButtonGroupRoot(props: ButtonGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "orientation",
    "children",
    "recipe",
    "class",
  ]);
  const slots = () =>
    (local.recipe ?? buttonGroupRecipe)({ orientation: local.orientation });

  return (
    <ButtonGroupContext value={{ slots: slots() }}>
      <ark.fieldset
        {...rest}
        class={slots().base({ class: local.class })}
        data-orientation={local.orientation}
        data-part="root"
        data-scope="button-group"
      >
        {local.children}
      </ark.fieldset>
    </ButtonGroupContext>
  );
}

export function ButtonGroupText(props: ButtonGroupTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useButtonGroup();

  return (
    <ark.div
      {...rest}
      class={slots.text({ class: local.class })}
      data-part="text"
      data-scope="button-group"
    />
  );
}

export function ButtonGroupSeparator(props: SeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["orientation", "class"]);
  const { slots } = useButtonGroup();

  return (
    <Separator
      {...rest}
      class={slots.separator({ class: local.class })}
      data-part="separator"
      data-scope="button-group"
      orientation={local.orientation ?? "vertical"}
    />
  );
}
