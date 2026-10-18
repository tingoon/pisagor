<script lang="ts">
  import {
    PasswordInput as PasswordInputPrimitive,
    type PasswordInputInputProps,
  } from "@ark-ui/svelte";
  import { inputGroupControlRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";

  let { class: className, ...rest }: PasswordInputInputProps = $props();
</script>

<PasswordInputPrimitive.Input
  {...rest}
  class={cn(inputGroupControlRecipe(), className)}
/>
