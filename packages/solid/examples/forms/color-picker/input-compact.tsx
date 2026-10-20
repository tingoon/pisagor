import { Portal } from "solid-js/web";
import { PercentIcon } from "@squidlab/phosphor-solid/icons";
import { ColorPicker, InputGroup, parseColor, Separator } from "@pisagor/solid";

export function InputCompact() {
  return (
    <ColorPicker.Root
      defaultValue={parseColor("#0485F7").toString("hsla")}
      format="hsla"
    >
      <ColorPicker.Control>
        <InputGroup>
          <ColorPicker.Trigger
            asChild={(props) => (
              <InputGroup.Addon {...props()}>
                <ColorPicker.SwatchPreview aria-hidden />
              </InputGroup.Addon>
            )}
          />
          <ColorPicker.Input
            channel="hex"
            class="flex-1"
            asChild={(props) => <InputGroup.Input {...props()} />}
          />
          <Separator orientation="vertical" />
          <ColorPicker.Input
            channel="alpha"
            asChild={(props) => (
              <InputGroup.Input
                {...props()}
                aria-label="Opacity percentage"
                class="text-right"
              />
            )}
          />
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
  );
}
