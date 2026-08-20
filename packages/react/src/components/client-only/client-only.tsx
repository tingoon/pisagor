import { ClientOnly as ClientOnlyPrimitive } from "@ark-ui/react/client-only";
import type { ComponentProps } from "react";

// #region Part
export function ClientOnly(props: ComponentProps<typeof ClientOnlyPrimitive>) {
  return <ClientOnlyPrimitive {...props} />;
}
// #endregion
