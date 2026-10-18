import { Format as FormatPrimitive } from "@ark-ui/react";
import type {
  FormatByteProps,
  FormatNumberProps,
  FormatRelativeTimeProps,
} from "@ark-ui/react";

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

export type {
  FormatByteProps,
  FormatNumberProps,
  FormatRelativeTimeProps,
} from "@ark-ui/react";

export const Format = {
  Byte: FormatByte,
  Number: FormatNumber,
  RelativeTime: FormatRelativeTime,
};
