<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerChannelInputProps,
  } from "@ark-ui/svelte";

  let { channel = "hex", ...rest }: ColorPickerChannelInputProps = $props();
</script>

<ColorPickerPrimitive.ChannelInput {...rest} {channel} />
