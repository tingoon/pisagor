<script lang="ts">
import type { ColorPickerTriggerProps } from "@ark-ui/svelte/color-picker";
import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte/color-picker";

let { children, ...rest }: ColorPickerTriggerProps = $props();
</script>

<ColorPickerPrimitive.Trigger {...rest}> {@render children?.()} </ColorPickerPrimitive.Trigger>
