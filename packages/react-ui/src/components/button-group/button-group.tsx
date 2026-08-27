import { ark } from "@ark-ui/react/factory";
import { type ButtonGroupVariantProps, buttonGroupVariants } from "@pisagor/recipes/button-group";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { Separator, type SeparatorProps } from "../separator";
import { ButtonGroupContext, useButtonGroup } from "./button-group.context";

// #region Types
export interface ButtonGroupProps
  extends ComponentProps<typeof ark.fieldset>,
    ButtonGroupVariantProps {}

export interface ButtonGroupTextProps extends ComponentProps<typeof ark.div> {}
// #endregion

// #region Parts
export function ButtonGroupRoot({ className, orientation, children, ...rest }: ButtonGroupProps) {
  const slots = useMemo(() => buttonGroupVariants({ orientation }), [orientation]);

  return (
    <ButtonGroupContext value={{ slots }}>
      <ark.fieldset
        {...rest}
        className={slots.base({ className })}
        data-orientation={orientation}
        data-part="root"
        data-scope="button-group"
      >
        {children}
      </ark.fieldset>
    </ButtonGroupContext>
  );
}

export function ButtonGroupText({ className, ...rest }: ButtonGroupTextProps) {
  const { slots } = useButtonGroup();

  return (
    <ark.div
      {...rest}
      className={slots.text({ className })}
      data-part="text"
      data-scope="button-group"
    />
  );
}

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

// #region Display Names
ButtonGroupRoot.displayName = "ButtonGroup";
ButtonGroupText.displayName = "ButtonGroup.Text";
ButtonGroupSeparator.displayName = "ButtonGroup.Separator";
// #endregion
