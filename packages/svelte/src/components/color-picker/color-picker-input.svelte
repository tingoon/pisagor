<script lang="ts">
import type { ColorPickerChannelInputProps } from "@ark-ui/svelte/color-picker";
import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte/color-picker";

let { channel = "hex", ...rest }: ColorPickerChannelInputProps = $props();
</script>

<ColorPickerPrimitive.ChannelInput {...rest} {channel} />
