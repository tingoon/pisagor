import { tv } from "tailwind-variants";

export const passwordInputRecipe = tv({
  slots: {
    base: ["group/password-input flex w-full flex-col items-start gap-2"],
    clearAddon: [
      "hidden [[data-scope=password-input][data-part=control]:has(input:not(:placeholder-shown))_&]:flex",
    ],
    control: [
      "in-data-[size=lg]:h-9 in-data-[size=sm]:h-7",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
    ],
    indicator: [],
    input: [],
    label: [],
    visibilityTrigger: [],
  },
});

export type PasswordInputRecipeFn = typeof passwordInputRecipe;
export type PasswordInputRecipe = ReturnType<PasswordInputRecipeFn>;
export type PasswordInputRecipeSlot = keyof PasswordInputRecipe;
