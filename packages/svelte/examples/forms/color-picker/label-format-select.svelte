<script lang="ts">
  import { ColorPicker, Input, parseColor } from "@pisagor/svelte";
</script>

<ColorPicker
  class="w-full"
  defaultValue={parseColor("#0485F7").toString("rgba")}
>
  <ColorPicker.Label>Brand color</ColorPicker.Label>
  <ColorPicker.Control class="min-w-0 flex-1">
    <ColorPicker.FormatSelect />
    <ColorPicker.ChannelInput channel="hex">
      {#snippet asChild(props)}
        <Input {...props()} />
      {/snippet}
    </ColorPicker.ChannelInput>
    <ColorPicker.SwatchPreview class="size-6" />
  </ColorPicker.Control>
</ColorPicker>
