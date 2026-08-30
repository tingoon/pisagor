import {
  type FormatByteProps,
  type FormatNumberProps,
  Format as FormatPrimitive,
  type FormatRelativeTimeProps,
} from "@ark-ui/react/format";

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
