import { Format as FormatPrimitive } from "@ark-ui/react/format";
import type { ComponentProps } from "react";
// #region Types
export type FormatByteProps = ComponentProps<typeof FormatPrimitive.Byte>;

export type FormatNumberProps = ComponentProps<typeof FormatPrimitive.Number>;

export type FormatRelativeTimeProps = ComponentProps<typeof FormatPrimitive.RelativeTime>;
// #endregion

// #region Parts
export function FormatByte({ ...rest }: FormatByteProps) {
  return <FormatPrimitive.Byte {...rest} />;
}

export function FormatNumber({ ...rest }: FormatNumberProps) {
  return <FormatPrimitive.Number {...rest} />;
}

export function FormatRelativeTime({ ...rest }: FormatRelativeTimeProps) {
  return <FormatPrimitive.RelativeTime {...rest} />;
}
// #endregion

// #region Display Names
FormatByte.displayName = "Format.Byte";
FormatNumber.displayName = "Format.Number";
FormatRelativeTime.displayName = "Format.RelativeTime";
// #endregion
