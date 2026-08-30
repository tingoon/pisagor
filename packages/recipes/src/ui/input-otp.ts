import { tv, type VariantProps } from "tailwind-variants";

export const inputOtpRecipe = tv({
  slots: {
    base: "group/input-otp",
    control: ["flex items-center gap-2", "*:data-[scope=pin-input]:data-[part=input]:size-9"],
    input: ["relative p-0 text-center text-base tabular-nums"],
    separator: ["h-0.5 w-2 rounded-full bg-foreground"],
  },
});

export type InputOtpVariantProps = VariantProps<typeof inputOtpRecipe>;
export type InputOtpRecipe = ReturnType<typeof inputOtpRecipe>;
export type InputOtpRecipeSlot = keyof InputOtpRecipe;
