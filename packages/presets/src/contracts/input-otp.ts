import { tv, type VariantProps } from "tailwind-variants";

export const inputOtpRecipe = tv({
  defaultVariants: {
    /**
     * Size scale.
     */
    size: "md",
  },
  slots: {
    base: "group/input-otp",
    control: [
      "flex items-center gap-2",
      "*:data-[scope=pin-input]:data-[part=input]:size-9",
    ],
    input: ["relative p-0 text-center text-base tabular-nums"],
    separator: ["h-0.5 w-2 rounded-full bg-foreground"],
  },
  variants: {
    size: {
      lg: {
        control: "gap-2.5 *:data-[scope=pin-input]:data-[part=input]:size-11",
        input: "text-lg",
      },
      md: {},
      sm: {
        control: "gap-1.5 *:data-[scope=pin-input]:data-[part=input]:size-8",
        input: "text-sm",
      },
    },
  },
});

export type InputOtpRecipeFn = typeof inputOtpRecipe;
export type InputOtpRecipe = ReturnType<InputOtpRecipeFn>;
export type InputOtpRecipeSlot = keyof InputOtpRecipe;
export type InputOtpVariantProps = VariantProps<InputOtpRecipeFn>;
