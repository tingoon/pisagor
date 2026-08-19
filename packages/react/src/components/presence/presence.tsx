import { Presence as PresencePrimitive } from "@ark-ui/react/presence";
import type { ComponentProps } from "react";

// #region Component
export function Presence({
  lazyMount = true,
  unmountOnExit = true,
  ...rest
}: ComponentProps<typeof PresencePrimitive>) {
  return <PresencePrimitive {...rest} lazyMount={lazyMount} unmountOnExit={unmountOnExit} />;
}
// #endregion
