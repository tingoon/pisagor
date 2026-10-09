<script lang="ts">
import {
  ColorPicker as ColorPickerPrimitive,
  type ColorPickerSwatchTriggerProps,
} from "@ark-ui/svelte/color-picker";
import { cn } from "@pisagor/utils";
import { useColorPicker } from "./color-picker.context";

let {
  class: className,
  children,
  ...rest
}: ColorPickerSwatchTriggerProps = $props();
const styles = useColorPicker();
const slots = $derived(styles.slots);
</script>

<ColorPickerPrimitive.SwatchTrigger
  {...rest}
  class={slots.swatchTrigger({ class: cn(className) })}
>
  {@render children?.()}
</ColorPickerPrimitive.SwatchTrigger>
