import FormatByte from "./format-byte.svelte";
import FormatNumber from "./format-number.svelte";
import FormatRelativeTime from "./format-relative-time.svelte";

export type {
  FormatByteProps,
  FormatNumberProps,
  FormatRelativeTimeProps,
} from "@ark-ui/svelte";

export const Format = {
  Byte: FormatByte,
  Number: FormatNumber,
  RelativeTime: FormatRelativeTime,
};
