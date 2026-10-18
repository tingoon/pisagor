<script lang="ts">
  import {
    Checkbox as CheckboxPrimitive,
    type CheckboxLabelProps,
  } from "@ark-ui/svelte";
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
