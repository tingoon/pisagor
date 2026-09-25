<script lang="ts">
import type {
  AngleSliderHiddenInputProps,
  AngleSliderRootProps,
} from "@ark-ui/svelte/angle-slider";
import { AngleSlider as AngleSliderPrimitive } from "@ark-ui/svelte/angle-slider";
import { circularSliderRecipe } from "@pisagor/recipes/circular-slider";
import { cn } from "@pisagor/utils";
import {
  type CircularSliderContextValue,
  setCircularSliderContext,
} from "./circular-slider.context";
import CircularSliderControl from "./circular-slider-control.svelte";

type Props = Omit<AngleSliderRootProps, "class" | "onValueChange" | "children"> &
  Partial<Pick<CircularSliderContextValue, "thickness" | "size">> & {
    class?: string | undefined;
    children?: import("svelte").Snippet;
    hiddenInputProps?: Omit<AngleSliderHiddenInputProps, "class">;
    markers?: boolean | number[];
    markersAtSteps?: boolean;
    onValueChange?: (value: number) => void;
    recipe?: typeof circularSliderRecipe;
  };

let {
  size = 100,
  step = 1,
  children,
  hiddenInputProps,
  markers,
  markersAtSteps = false,
  thickness = 6,
  onValueChange,
  recipe = circularSliderRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
const values = $derived({
  ringCircumference: 2 * Math.PI * (size / 2 - thickness / 2),
  ringRadius: size / 2 - thickness / 2,
  size,
  slots,
  thickness,
  thumbSize: Math.max(thickness + 8, 16),
});

setCircularSliderContext({
  get ringCircumference() {
    return values.ringCircumference;
  },
  get ringRadius() {
    return values.ringRadius;
  },
  get size() {
    return values.size;
  },
  get slots() {
    return values.slots;
  },
  get thickness() {
    return values.thickness;
  },
  get thumbSize() {
    return values.thumbSize;
  },
});

function handleValueChange(details: { value: number }) {
  onValueChange?.(details.value);
}
</script>

<AngleSliderPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  onValueChange={onValueChange ? handleValueChange : undefined}
  {step}
  style={`--thickness: ${thickness}px; height: ${size}px; width: ${size}px;`}
>
  <CircularSliderControl {markers} {markersAtSteps} {step} />
  {@render children?.()}
  <AngleSliderPrimitive.HiddenInput {...hiddenInputProps} />
</AngleSliderPrimitive.Root>
