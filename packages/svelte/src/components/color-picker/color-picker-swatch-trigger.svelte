<script lang="ts">
import type { ColorPickerSwatchTriggerProps } from "@ark-ui/svelte/color-picker";
import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte/color-picker";
import { cn } from "@pisagor/utils";
import { useColorPicker } from "./color-picker.context";

type Props = Omit<ColorPickerSwatchTriggerProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useColorPicker();
</script>

<ColorPickerPrimitive.SwatchTrigger {...rest} class={slots.swatchTrigger({ class: cn(className) })}>
  {@render children?.()}
</ColorPickerPrimitive.SwatchTrigger>
