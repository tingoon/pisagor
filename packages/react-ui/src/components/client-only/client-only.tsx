import { ClientOnly as ClientOnlyPrimitive } from "@ark-ui/react/client-only";
import type { ComponentProps } from "react";

// #region Types
export interface ClientOnlyProps extends ComponentProps<typeof ClientOnlyPrimitive> {}
// #endregion

// #region Part
export function ClientOnly(props: ClientOnlyProps) {
  return <ClientOnlyPrimitive {...props} />;
}
// #endregion
