import { ark } from "@ark-ui/react/factory";
import { kbdGroupVariants, kbdVariants } from "@pisagor/styles/ui/kbd";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import type { WithTestId } from "../../internal/types";

// #region Variants

// #endregion

// #region Types
interface KbdProps
  extends ComponentProps<typeof ark.kbd>,
    VariantProps<typeof kbdVariants>,
    WithTestId {}
// #endregion

// #region Components
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
