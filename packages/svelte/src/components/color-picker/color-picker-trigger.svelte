<script lang="ts">
import {
  ColorPicker as ColorPickerPrimitive,
  type ColorPickerTriggerProps,
} from "@ark-ui/svelte/color-picker";

let { children, ...rest }: ColorPickerTriggerProps = $props();
</script>

<ColorPickerPrimitive.Trigger {...rest}>
  {@render children?.()}
</ColorPickerPrimitive.Trigger>
