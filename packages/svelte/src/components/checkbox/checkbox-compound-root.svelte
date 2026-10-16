<script lang="ts">
  import {
    Checkbox as CheckboxPrimitive,
    type CheckboxRootProps,
  } from "@ark-ui/svelte/checkbox";
  import { checkboxRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";

  type Props = CheckboxRootProps & { recipe?: typeof checkboxRecipe };

  let {
    children,
    recipe = checkboxRecipe,
    class: className,
    ...rest
  }: Props = $props();
</script>

<CheckboxPrimitive.Root
  {...rest}
  class={recipe().root({ class: cn(className) })}
>
  {@render children?.()}
</CheckboxPrimitive.Root>
