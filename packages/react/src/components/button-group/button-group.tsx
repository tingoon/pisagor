import { ark } from "@ark-ui/react/factory";
import {
  buttonGroupSeparatorVariants,
  buttonGroupTextVariants,
  buttonGroupVariants,
} from "@pisagor/styles/ui/button-group";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import type { WithTestId } from "../../internal/types";
import { Separator, type SeparatorProps } from "../separator";

// #region Variants

// #endregion

// #region Types
interface ButtonGroupProps
  extends ComponentProps<typeof ark.fieldset>,
    VariantProps<typeof buttonGroupVariants>,
    WithTestId {}
// #endregion

// #region Components
export function ButtonGroupRoot({ className, orientation, testId, ...rest }: ButtonGroupProps) {
  return (
    <ark.fieldset
      {...rest}
      className={cn(buttonGroupVariants({ orientation }), className)}
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
      className={cn(buttonGroupTextVariants(), className)}
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
      className={cn(buttonGroupSeparatorVariants(), className)}
      dataPart="separator"
      dataScope="button-group"
      orientation={orientation}
    />
  );
}
ButtonGroupSeparator.displayName = "ButtonGroup.Separator";

// #endregion
