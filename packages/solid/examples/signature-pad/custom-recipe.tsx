import { signaturePadRecipe } from "@pisagor/recipes";
import { SignaturePad } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandSignaturePadRecipe = tv({
  extend: signaturePadRecipe,
  slots: {
    control: "border-emerald-500/40",
    guide: "border-emerald-500/40",
    segment: "fill-emerald-700 dark:fill-emerald-300",
  },
  variants: {},
});

export function CustomRecipe() {
  return <SignaturePad recipe={brandSignaturePadRecipe} />;
}
