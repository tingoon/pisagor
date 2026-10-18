<script lang="ts">
  import {
    Slider as SliderPrimitive,
    type SliderLabelProps,
  } from "@ark-ui/svelte";
  import { fieldRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";

  let { children, class: className, ...rest }: SliderLabelProps = $props();
</script>

<SliderPrimitive.Label
  {...rest}
  class={fieldRecipe().label({ class: cn(className) })}
>
  {@render children?.()}
</SliderPrimitive.Label>
