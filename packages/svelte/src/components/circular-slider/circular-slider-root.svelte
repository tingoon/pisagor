<script lang="ts">
  import {
    AngleSlider as AngleSliderPrimitive,
    type AngleSliderRootProps,
  } from "@ark-ui/svelte";
  import type { CircularSliderRootContract } from "@pisagor/contracts";
  import { circularSliderRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { setCircularSliderContext } from "./circular-slider.context";

  type Props = Omit<AngleSliderRootProps, "onValueChange"> &
    CircularSliderRootContract & {
      /** Called with the angle in degrees when the value changes. */
      onValueChange?: (value: number) => void;
      /**
       * Diameter in pixels.
       *
       * @defaultValue 100
       */
      size?: number;
      /**
       * Ring thickness in pixels.
       *
       * @defaultValue 6
       */
      thickness?: number;
    };

  let {
    children,
    class: className,
    onValueChange,
    recipe = circularSliderRecipe,
    size = 100,
    step = 1,
    style,
    thickness = 6,
    ...rest
  }: Props = $props();

  const slots = $derived(recipe());
  const ringRadius = $derived(size / 2 - thickness / 2);

  setCircularSliderContext({
    get ringCircumference() {
      return 2 * Math.PI * ringRadius;
    },
    get ringRadius() {
      return ringRadius;
    },
    get size() {
      return size;
    },
    get slots() {
      return slots;
    },
    get thickness() {
      return thickness;
    },
    get thumbSize() {
      return Math.max(thickness + 8, 16);
    },
  });

  function handleValueChange(details: { value: number }) {
    onValueChange?.(details.value);
  }
</script>

<!-- Provides ring geometry; passes the numeric angle to `onValueChange`. -->
<AngleSliderPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  onValueChange={onValueChange ? handleValueChange : undefined}
  {step}
  style={`--thickness: ${thickness}px; height: ${size}px; width: ${size}px; ${style ?? ""}`}
>
  {@render children?.()}
</AngleSliderPrimitive.Root>
