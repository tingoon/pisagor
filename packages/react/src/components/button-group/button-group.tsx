import { ark } from "@ark-ui/react/factory";
import {
  type ButtonGroupVariantProps,
  buttonGroupSeparatorVariants,
  buttonGroupTextVariants,
  buttonGroupVariants,
} from "@pisagor/styles/ui/button-group";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";
import { Separator, type SeparatorProps } from "../separator";

// #region Types
export interface ButtonGroupProps
  extends ComponentProps<typeof ark.fieldset>,
    ButtonGroupVariantProps,
    WithTestId {}
// #endregion

// #region Parts
export function ButtonGroupRoot({ className, orientation, testId, ...rest }: ButtonGroupProps) {
  return (
    <ark.fieldset
      {...rest}
      className={buttonGroupVariants({ className, orientation })}
      data-orientation={orientation}
      data-part="root"
      data-scope="button-group"
      data-testid={testId}
    />
  );
}
ButtonGroupRoot.displayName = "ButtonGroup";

export function ButtonGroupText({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={buttonGroupTextVariants({ className })}
      data-part="text"
      data-scope="button-group"
    />
  );
}
ButtonGroupText.displayName = "ButtonGroup.Text";

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
ButtonGroupSeparator.displayName = "ButtonGroup.Separator";
// #endregion
