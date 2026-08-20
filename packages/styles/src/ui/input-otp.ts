import { tv, type VariantProps } from "tailwind-variants";

export const inputOtpControlVariants = tv({
  base: ["flex items-center gap-2", "*:data-[scope=pin-input]:data-[part=input]:size-9"],
});

export const inputOtpInlineVariants = tv({
  base: ["relative p-0 text-center text-base tabular-nums"],
});

export const inputOtpSeparatorVariants = tv({
  base: ["h-0.5 w-2 rounded-full bg-foreground"],
});

export const inputOtpVariants = tv({
  base: "group/input-otp",
});
export type InputOtpControlVariantProps = VariantProps<typeof inputOtpControlVariants>;
export type InputOtpInlineVariantProps = VariantProps<typeof inputOtpInlineVariants>;
export type InputOtpSeparatorVariantProps = VariantProps<typeof inputOtpSeparatorVariants>;
export type InputOtpVariantProps = VariantProps<typeof inputOtpVariants>;
