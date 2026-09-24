<script lang="ts">
import type { ColorPickerSwatchProps } from "@ark-ui/svelte/color-picker";
import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte/color-picker";
import { cn } from "@pisagor/utils";
import { useColorPicker } from "./color-picker.context";

type Props = Omit<ColorPickerSwatchProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useColorPicker();
</script>

<ColorPickerPrimitive.Swatch {...rest} class={slots.swatch({ class: cn(className) })}>
  {@render children?.()}
</ColorPickerPrimitive.Swatch>
