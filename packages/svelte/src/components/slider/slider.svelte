<script lang="ts">
import type { SliderRootProps } from "@ark-ui/svelte/slider";
import { Slider as SliderPrimitive } from "@ark-ui/svelte/slider";
import { type SliderRecipeSlot, sliderRecipe } from "@pisagor/recipes/slider";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import { setSliderContext } from "./slider.context";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<SliderRootProps, "class" | "children" | "onValueChange"> & {
  children?: Snippet;
  class?: string | undefined;
  classNames?: Partial<Record<SliderRecipeSlot, string>>;
  label?: string;
  markerInterval?: number;
  markerLabels?: string[];
  onValueChange?: (value: number[]) => void;
  recipe?: typeof sliderRecipe;
  showMarkers?: boolean;
  showValue?: boolean;
  tabindex?: number | null;
  variant?: FormControlVariant;
};

let {
  variant: variantProp,
  defaultValue,
  max = 100,
  min = 0,
  showMarkers = false,
  showValue = false,
  tabindex,
  value = $bindable<number[] | undefined>(undefined),
  children,
  label,
  markerInterval = 1,
  markerLabels = [],
  onValueChange,
  class: className,
  classNames,
  recipe = sliderRecipe,
  ...rest
}: Props = $props();

const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
const slots = $derived(recipe());
const thumbShadowClass = $derived(variant === "secondary" ? "shadow-none" : undefined);
const trackVariantClass = $derived(variant === "secondary" ? "bg-muted/40" : "bg-input/64");

const thumbCount = $derived.by(() => {
  if (Array.isArray(value)) return value.length;
  if (Array.isArray(defaultValue)) return defaultValue.length;
  return 1;
});

setSliderContext({
  get slots() {
    return slots;
  },
  get thumbShadowClass() {
    return thumbShadowClass;
  },
  get trackVariantClass() {
    return trackVariantClass;
  },
});

function handleValueChange(details: Parameters<NonNullable<SliderRootProps["onValueChange"]>>[0]) {
  onValueChange?.(details.value);
}
</script>

<SliderPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-variant={variant}
  {defaultValue}
  {max}
  {min}
  onValueChange={onValueChange ? handleValueChange : undefined}
  bind:value
>
  {#if label !== undefined || showValue}
    <div class={slots.header({ class: cn(classNames?.header) })}>
      {#if label !== undefined}
        <SliderPrimitive.Label>{label}</SliderPrimitive.Label>
      {/if}
      {#if showValue}
        <SliderPrimitive.ValueText class={slots.value({ class: cn(classNames?.value) })} />
      {/if}
    </div>
  {/if}

  {@render children?.()}

  <SliderPrimitive.Control class={slots.control({ class: cn(classNames?.control) })}>
    <SliderPrimitive.Track class={slots.track({ class: cn(trackVariantClass, classNames?.track) })}>
      <SliderPrimitive.Range class={slots.range({ class: cn(classNames?.range) })} />
    </SliderPrimitive.Track>

    {#each Array.from({ length: thumbCount }) as _, index (index)}
      <SliderPrimitive.Thumb
        class={slots.thumb({ class: cn(thumbShadowClass, classNames?.thumb) })}
        {index}
        {tabindex}
      >
        <SliderPrimitive.HiddenInput />
      </SliderPrimitive.Thumb>
    {/each}
  </SliderPrimitive.Control>

  {#if showMarkers}
    <SliderPrimitive.MarkerGroup class={slots.markerGroup({ class: cn(classNames?.markerGroup) })}>
      {#each Array.from({ length: max + 1 }) as _, index (index)}
        <SliderPrimitive.Marker
          class={slots.marker({ class: cn(classNames?.marker) })}
          data-interval={index % markerInterval === 0 ? undefined : ""}
          value={index}
        >
          <span class={slots.markerTick({ class: cn(classNames?.markerTick) })}></span>
          <span class={slots.markerLabel({ class: cn(classNames?.markerLabel) })}>
            {markerLabels[index] ?? index}
          </span>
        </SliderPrimitive.Marker>
      {/each}
    </SliderPrimitive.MarkerGroup>
  {/if}
</SliderPrimitive.Root>
