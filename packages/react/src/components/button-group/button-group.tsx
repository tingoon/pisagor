import { ark } from "@ark-ui/react/factory";
import {
  type ButtonGroupVariantProps,
  buttonGroupSeparatorVariants,
  buttonGroupTextVariants,
  buttonGroupVariants,
} from "@pisagor/styles/ui/button-group";
import type { ComponentProps } from "react";
import { Separator, type SeparatorProps } from "../separator";

// #region Types
export interface ButtonGroupProps
  extends ComponentProps<typeof ark.fieldset>,
    ButtonGroupVariantProps {}

export interface ButtonGroupTextProps extends ComponentProps<typeof ark.div> {}
// #endregion

// #region Parts
export function ButtonGroupRoot({ className, orientation, ...rest }: ButtonGroupProps) {
  return (
    <ark.fieldset
      {...rest}
      className={buttonGroupVariants({ className, orientation })}
      data-orientation={orientation}
      data-part="root"
      data-scope="button-group"
    />
  );
}

export function ButtonGroupText({ className, ...rest }: ButtonGroupTextProps) {
  return (
    <ark.div
      {...rest}
      className={buttonGroupTextVariants({ className })}
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
  return (
    <Separator
      {...rest}
      className={buttonGroupSeparatorVariants({ className })}
      dataPart="separator"
      dataScope="button-group"
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
