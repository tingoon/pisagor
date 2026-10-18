import { QrCode } from "@pisagor/react";
import { qrCodeRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandQrCodeRecipe = tv({
  extend: qrCodeRecipe,
  slots: {
    frame: "rounded-xl fill-emerald-800",
    overlay: "bg-emerald-700",
  },
  variants: {},
});

export function CustomRecipe() {
  return <QrCode recipe={brandQrCodeRecipe} value="https://example.com" />;
}
