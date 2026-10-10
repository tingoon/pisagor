<script lang="ts">
import { phoneInputRecipe } from "@pisagor/recipes";
import { PhoneInput } from "@pisagor/svelte/phone-input";
import { tv } from "tailwind-variants";

const brandPhoneInputRecipe = tv({
  extend: phoneInputRecipe,
  slots: { input: "caret-emerald-600 placeholder:text-emerald-700/50" },
  variants: {},
});
</script>

<PhoneInput recipe={brandPhoneInputRecipe} />
