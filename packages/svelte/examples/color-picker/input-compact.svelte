<script lang="ts">
import { InputGroup, parseColor, Separator } from "@pisagor/svelte";
import { ColorPicker } from "@pisagor/svelte/color-picker";
import { PercentIcon } from "@pisagor/svelte/icons";
</script>

<ColorPicker format="hsla" value={parseColor("#0485F7").toString("hsla")}>
  <ColorPicker.Control>
    <InputGroup>
      <ColorPicker.Trigger>
        <InputGroup.Addon>
          <ColorPicker.SwatchPreview aria-hidden />
        </InputGroup.Addon>
      </ColorPicker.Trigger>
      <ColorPicker.Input channel="hex" class="flex-1">
        {#snippet asChild(props)}
          <InputGroup.Input {...props()} />
        {/snippet}
      </ColorPicker.Input>
      <Separator orientation="vertical" />
      <ColorPicker.Input channel="alpha">
        {#snippet asChild(props)}
          <InputGroup.Input
            {...props()}
            aria-label="Opacity percentage"
            class="text-right"
          />
        {/snippet}
      </ColorPicker.Input>
      <InputGroup.Addon align="inline-end">
        <PercentIcon aria-hidden />
      </InputGroup.Addon>
    </InputGroup>
  </ColorPicker.Control>
  <ColorPicker.Content>
    <ColorPicker.Area showDots>
      <ColorPicker.AreaThumb />
    </ColorPicker.Area>
    <ColorPicker.View format="hsla">
      <ColorPicker.ChannelSlider channel="hue" />
      <ColorPicker.ChannelSlider channel="saturation" />
      <ColorPicker.ChannelSlider channel="lightness" />
      <ColorPicker.ChannelSlider channel="alpha">
        <ColorPicker.TransparencyGrid />
      </ColorPicker.ChannelSlider>
    </ColorPicker.View>
  </ColorPicker.Content>
</ColorPicker>
