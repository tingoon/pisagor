import { tv, type VariantProps } from "tailwind-variants";

export const inputOtpVariants = tv({
  slots: {
    base: "group/input-otp",
    control: ["flex items-center gap-2", "*:data-[scope=pin-input]:data-[part=input]:size-9"],
    input: ["relative p-0 text-center text-base tabular-nums"],
    separator: ["h-0.5 w-2 rounded-full bg-foreground"],
  },
});

export type InputOtpVariantProps = VariantProps<typeof inputOtpVariants>;
export type InputOtpVariants = ReturnType<typeof inputOtpVariants>;
export type InputOtpSlots = keyof InputOtpVariants;
