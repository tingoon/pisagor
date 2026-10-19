<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerChannelInputProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  type Props = Partial<ColorPickerChannelInputProps>;

  let props: Props = $props();
  const part = withContext(() => ({ channel: "hex" as const, ...props }), {
    name: "ChannelInput",
    slot: "channelInput",
  });
</script>

<ColorPickerPrimitive.ChannelInput {...part.props} />
