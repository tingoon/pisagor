<script lang="ts">
  import {
    type PasswordInputInputProps,
    PasswordInput as PasswordInputPrimitive,
  } from "@ark-ui/svelte/password-input";
  import { inputGroupControlRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";

  let { class: className, ...rest }: PasswordInputInputProps = $props();
</script>

<PasswordInputPrimitive.Input
  {...rest}
  class={cn(inputGroupControlRecipe(), className)}
/>
