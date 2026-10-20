import { Portal } from "@ark-ui/react";
import { PercentIcon } from "@phosphor-icons/react";
import { ColorPicker, InputGroup, parseColor, Separator } from "@pisagor/react";

export function InputCompact() {
  return (
    <ColorPicker.Root
      defaultValue={parseColor("#0485F7").toString("hsla")}
      format="hsla"
    >
      <ColorPicker.Control>
        <InputGroup>
          <ColorPicker.Trigger asChild>
            <InputGroup.Addon>
              <ColorPicker.SwatchPreview aria-hidden />
            </InputGroup.Addon>
          </ColorPicker.Trigger>
          <ColorPicker.Input asChild channel="hex" className="flex-1">
            <InputGroup.Input />
          </ColorPicker.Input>
          <Separator orientation="vertical" />
          <ColorPicker.Input asChild channel="alpha">
            <InputGroup.Input
              aria-label="Opacity percentage"
              className="text-right"
            />
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
  );
}
