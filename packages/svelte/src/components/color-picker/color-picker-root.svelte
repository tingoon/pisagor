<script lang="ts">
import {
  type ColorPickerRootProps as ArkRootProps,
  ColorPicker as ColorPickerPrimitive,
  parseColor,
} from "@ark-ui/svelte/color-picker";
import { colorPickerRecipe } from "@pisagor/recipes/color-picker";
import { cn } from "@pisagor/utils";
import { setColorPickerContext } from "./color-picker.context";

type Props = Omit<ArkRootProps, "class" | "defaultValue" | "value" | "onValueChange"> & {
  class?: string | undefined;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  recipe?: typeof colorPickerRecipe;
  value?: string;
};

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
setColorPickerContext({
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
