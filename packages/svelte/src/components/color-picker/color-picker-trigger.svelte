<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerTriggerProps = $props();
  const part = withContext(() => rest, { name: "Trigger" });
</script>

<ColorPickerPrimitive.Trigger {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.Trigger>
