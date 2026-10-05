<script lang="ts">
import {
  type ColorPickerChannelInputProps,
  ColorPicker as ColorPickerPrimitive,
} from "@ark-ui/svelte/color-picker";

let { channel = "hex", ...rest }: ColorPickerChannelInputProps = $props();
</script>

<ColorPickerPrimitive.ChannelInput {...rest} {channel} />
