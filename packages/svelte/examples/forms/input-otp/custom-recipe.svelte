<script lang="ts">
  import { inputOtpRecipe } from "@pisagor/recipes";
  import { InputOTP } from "@pisagor/svelte";
  import { tv } from "tailwind-variants";

  const brandInputOtpRecipe = tv({
    extend: inputOtpRecipe,
    slots: {
      input: "caret-emerald-600",
      separator: "bg-emerald-500",
    },
    variants: {},
  });
</script>

<InputOTP recipe={brandInputOtpRecipe} groupSize={3} />
