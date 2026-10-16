<script lang="ts">
  import {
    type CheckboxLabelProps,
    Checkbox as CheckboxPrimitive,
  } from "@ark-ui/svelte/checkbox";
  import { checkboxRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";

  type Props = CheckboxLabelProps & { recipe?: typeof checkboxRecipe };

  let {
    children,
    recipe = checkboxRecipe,
    class: className,
    ...rest
  }: Props = $props();
</script>

<CheckboxPrimitive.Label
  {...rest}
  class={recipe().label({ class: cn(className) })}
>
  {@render children?.()}
</CheckboxPrimitive.Label>
