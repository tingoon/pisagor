import { Format as FormatPrimitive } from "@ark-ui/react/format";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
export type FormatByteProps = ComponentProps<typeof FormatPrimitive.Byte> & WithTestId;

export type FormatNumberProps = ComponentProps<typeof FormatPrimitive.Number> & WithTestId;

export type FormatRelativeTimeProps = ComponentProps<typeof FormatPrimitive.RelativeTime> &
  WithTestId;
// #endregion

// #region Parts
export function FormatByte({ testId, ...rest }: FormatByteProps) {
  return <FormatPrimitive.Byte {...rest} data-testid={testId} />;
}

export function FormatNumber({ testId, ...rest }: FormatNumberProps) {
  return <FormatPrimitive.Number {...rest} data-testid={testId} />;
}

export function FormatRelativeTime({ testId, ...rest }: FormatRelativeTimeProps) {
  return <FormatPrimitive.RelativeTime {...rest} data-testid={testId} />;
}
// #endregion
