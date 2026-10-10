<script lang="ts">
import {
  ColorPicker as ColorPickerPrimitive,
  type ColorPickerViewProps,
} from "@ark-ui/svelte/color-picker";
import { cn } from "@pisagor/utils";
import { useColorPicker } from "./color-picker.context";

let { children, class: className, ...rest }: ColorPickerViewProps = $props();
const styles = useColorPicker();
const slots = $derived(styles.slots);
</script>

<ColorPickerPrimitive.View
  {...rest}
  class={slots.view({ class: cn(className) })}
>
  {@render children?.()}
</ColorPickerPrimitive.View>
