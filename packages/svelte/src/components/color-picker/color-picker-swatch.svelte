<script lang="ts">
import {
  ColorPicker as ColorPickerPrimitive,
  type ColorPickerSwatchProps,
} from "@ark-ui/svelte/color-picker";
import { cn } from "@pisagor/utils";
import { useColorPicker } from "./color-picker.context";

let { class: className, children, ...rest }: ColorPickerSwatchProps = $props();
const styles = useColorPicker();
const slots = $derived(styles.slots);
</script>

<ColorPickerPrimitive.Swatch
  {...rest}
  class={slots.swatch({ class: cn(className) })}
>
  {@render children?.()}
</ColorPickerPrimitive.Swatch>
