<script lang="ts">
  import {
    RadioGroup as RadioGroupPrimitive,
    type RadioGroupItemTextProps,
  } from "@ark-ui/svelte";
  import { fieldRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";

  let {
    children,
    class: className,
    ...rest
  }: RadioGroupItemTextProps = $props();
</script>

<RadioGroupPrimitive.ItemText
  {...rest}
  class={fieldRecipe().label({ class: cn(className) })}
>
  {@render children?.()}
</RadioGroupPrimitive.ItemText>
