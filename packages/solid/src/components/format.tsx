import {
  type FormatByteProps,
  type FormatNumberProps,
  Format as FormatPrimitive,
  type FormatRelativeTimeProps,
} from "@ark-ui/solid/format";
import type { JSX } from "solid-js";

export function FormatByte(props: FormatByteProps): JSX.Element {
  return <FormatPrimitive.Byte {...props} />;
}

export function FormatNumber(props: FormatNumberProps): JSX.Element {
  return <FormatPrimitive.Number {...props} />;
}

export function FormatRelativeTime(
  props: FormatRelativeTimeProps,
): JSX.Element {
  return <FormatPrimitive.RelativeTime {...props} />;
}

export type {
  FormatByteProps,
  FormatNumberProps,
  FormatRelativeTimeProps,
} from "@ark-ui/solid/format";

export const Format = {
  Byte: FormatByte,
  Number: FormatNumber,
  RelativeTime: FormatRelativeTime,
};
