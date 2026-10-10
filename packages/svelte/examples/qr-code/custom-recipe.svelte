<script lang="ts">
import { qrCodeRecipe } from "@pisagor/recipes";
import { QrCode } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandQrCodeRecipe = tv({
  extend: qrCodeRecipe,
  slots: {
    frame: "rounded-xl fill-emerald-800",
    overlay: "bg-emerald-700",
  },
  variants: {},
});
</script>

<QrCode recipe={brandQrCodeRecipe} value="https://example.com" />
