<script lang="ts">
  import {
    Slider as SliderPrimitive,
    type SliderRootProps,
  } from "@ark-ui/svelte";
  import type { SliderProps as BaseSliderProps } from "@pisagor/props";
  import { sliderRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { setSliderContext } from "./slider.context";

  type FormControlVariant = "primary" | "secondary";

  type Props = SliderRootProps & {
    /** Visual shell variant. Defaults to `primary`. */
    variant?: FormControlVariant;
  } & BaseSliderProps;

  let {
    variant: variantProp,
    children,
    recipe = sliderRecipe,
    class: className,
    ...rest
  }: Props = $props();

  const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
  const slots = $derived(recipe());

  setSliderContext({
    get slots() {
      return slots;
    },
    get thumbShadowClass() {
      return variant === "secondary" ? "shadow-none" : undefined;
    },
    get trackVariantClass() {
      return variant === "secondary" ? "bg-muted/40" : "bg-input/64";
    },
  });
</script>

<SliderPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-variant={variant}
>
  {@render children?.()}
</SliderPrimitive.Root>
