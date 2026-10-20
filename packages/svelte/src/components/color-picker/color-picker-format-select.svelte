<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerFormatSelectProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let props: ColorPickerFormatSelectProps = $props();
  const part = withContext(() => props, { name: "FormatSelect" });
</script>

<ColorPickerPrimitive.FormatSelect {...part.props} />
