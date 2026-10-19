<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerRootProps as ArkRootProps,
    parseColor,
  } from "@ark-ui/svelte";
  import type { ColorPickerRootContract } from "@pisagor/contracts";
  import { colorPickerRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { Context } from "./color-picker.context";

  type Props = Omit<
    ArkRootProps,
    "defaultValue" | "value" | "onValueChange"
  > & {
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    value?: string;
  } & ColorPickerRootContract;

  let {
    positioning = { placement: "top-start" },
    defaultValue,
    value = $bindable(defaultValue),
    children,
    onValueChange,
    recipe = colorPickerRecipe,
    class: className,
    ...rest
  }: Props = $props();

  const slots = $derived(recipe());
  Context.set({
    get slots() {
      return slots;
    },
  });

  const parsed = $derived(value ? parseColor(value) : undefined);

  function handleValueChange(details: { valueAsString: string }) {
    value = details.valueAsString;
    onValueChange?.(details.valueAsString);
  }
</script>

<ColorPickerPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  onValueChange={handleValueChange}
  {positioning}
  value={parsed}
>
  {@render children?.()}
  <ColorPickerPrimitive.HiddenInput />
</ColorPickerPrimitive.Root>
