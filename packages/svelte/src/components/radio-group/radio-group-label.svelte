<script lang="ts">
  import {
    RadioGroup as RadioGroupPrimitive,
    type RadioGroupLabelProps,
  } from "@ark-ui/svelte";
  import { fieldRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";

  let { children, class: className, ...rest }: RadioGroupLabelProps = $props();
</script>

<RadioGroupPrimitive.Label
  {...rest}
  class={fieldRecipe().label({ class: cn(className) })}
>
  {@render children?.()}
</RadioGroupPrimitive.Label>
