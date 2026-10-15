<script lang="ts">
import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte/color-picker";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "svelte";
import { useColorPicker } from "./color-picker.context";

let {
  class: className,
  ...rest
}: ComponentProps<typeof ColorPickerPrimitive.FormatSelect> = $props();
const styles = useColorPicker();
</script>

<ColorPickerPrimitive.FormatSelect
  {...rest}
  class={styles.slots.formatSelect({ class: cn(className) })}
/>
