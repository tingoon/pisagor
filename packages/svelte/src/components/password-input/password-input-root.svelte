<script lang="ts">
  import {
    PasswordInput as PasswordInputPrimitive,
    type PasswordInputRootProps,
  } from "@ark-ui/svelte";
  import { passwordInputRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";

  type Props = PasswordInputRootProps & { recipe?: typeof passwordInputRecipe };

  let {
    children,
    recipe = passwordInputRecipe,
    class: className,
    ...rest
  }: Props = $props();
</script>

<PasswordInputPrimitive.Root
  {...rest}
  class={recipe().base({ class: cn(className) })}
>
  {@render children?.()}
</PasswordInputPrimitive.Root>
