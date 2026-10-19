<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import {
    ColorPicker,
    InputGroup,
    parseColor,
    Separator,
  } from "@pisagor/svelte";
  import { PercentIcon } from "phosphor-svelte";
</script>

<ColorPicker.Root format="hsla" value={parseColor("#0485F7").toString("hsla")}>
  <ColorPicker.Control>
    <InputGroup>
      <ColorPicker.Trigger>
        {#snippet asChild(props)}
          <InputGroup.Addon {...props()}>
            <ColorPicker.SwatchPreview aria-hidden />
          </InputGroup.Addon>
        {/snippet}
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
  <Portal>
    <ColorPicker.Positioner>
      <ColorPicker.Content>
        <ColorPicker.Area showDots>
          <ColorPicker.AreaBackground />
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>
        <ColorPicker.View format="hsla">
          <ColorPicker.ChannelSlider channel="hue">
            <ColorPicker.ChannelSliderTrack />
            <ColorPicker.ChannelSliderThumb />
          </ColorPicker.ChannelSlider>
          <ColorPicker.ChannelSlider channel="saturation">
            <ColorPicker.ChannelSliderTrack />
            <ColorPicker.ChannelSliderThumb />
          </ColorPicker.ChannelSlider>
          <ColorPicker.ChannelSlider channel="lightness">
            <ColorPicker.ChannelSliderTrack />
            <ColorPicker.ChannelSliderThumb />
          </ColorPicker.ChannelSlider>
          <ColorPicker.ChannelSlider channel="alpha">
            <ColorPicker.TransparencyGrid />
            <ColorPicker.ChannelSliderTrack />
            <ColorPicker.ChannelSliderThumb />
          </ColorPicker.ChannelSlider>
        </ColorPicker.View>
      </ColorPicker.Content>
    </ColorPicker.Positioner>
  </Portal>
</ColorPicker.Root>
