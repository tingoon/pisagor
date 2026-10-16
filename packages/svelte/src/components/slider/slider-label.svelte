<script lang="ts">
  import {
    type SliderLabelProps,
    Slider as SliderPrimitive,
  } from "@ark-ui/svelte/slider";
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
