import { DownloadTrigger as DownloadTriggerPrimitive } from "@ark-ui/react/download-trigger";
import type { ComponentProps } from "react";
// #region Types
export type DownloadTriggerProps = ComponentProps<typeof DownloadTriggerPrimitive>;
// #endregion

// #region Part
export function DownloadTrigger({ ...rest }: DownloadTriggerProps) {
  return <DownloadTriggerPrimitive {...rest} />;
}
// #endregion

// #region Display Names
DownloadTrigger.displayName = "DownloadTrigger";
// #endregion
