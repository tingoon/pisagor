import { DownloadTrigger as DownloadTriggerPrimitive } from "@ark-ui/react/download-trigger";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
interface DownloadTriggerProps
  extends ComponentProps<typeof DownloadTriggerPrimitive>,
    WithTestId {}
// #endregion

// #region Component
export function DownloadTrigger({ testId, ...rest }: DownloadTriggerProps) {
  return <DownloadTriggerPrimitive {...rest} data-testid={testId} />;
}
// #endregion
