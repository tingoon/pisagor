import { Format as FormatPrimitive } from "@ark-ui/react/format";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
interface FormatByteProps extends ComponentProps<typeof FormatPrimitive.Byte>, WithTestId {}

interface FormatNumberProps extends ComponentProps<typeof FormatPrimitive.Number>, WithTestId {}

interface FormatRelativeTimeProps
  extends ComponentProps<typeof FormatPrimitive.RelativeTime>,
    WithTestId {}
// #endregion

// #region Components
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
