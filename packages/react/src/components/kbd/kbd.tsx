import { ark } from "@ark-ui/react/factory";
import { type KbdVariantProps, kbdGroupVariants, kbdVariants } from "@pisagor/styles/ui/kbd";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
interface KbdProps extends ComponentProps<typeof ark.kbd>, KbdVariantProps, WithTestId {}
// #endregion

// #region Parts
export function KbdRoot({ variant = "default", className, testId, ...rest }: KbdProps) {
  return (
    <ark.kbd
      {...rest}
      className={cn(kbdVariants({ variant }), className)}
      data-part="root"
      data-scope="kbd"
      data-testid={testId}
    />
  );
}
KbdRoot.displayName = "Kbd";

export function KbdGroup({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(kbdGroupVariants(), className)}
      data-part="group"
      data-scope="kbd"
    />
  );
}
KbdGroup.displayName = "Kbd.Group";
// #endregion
