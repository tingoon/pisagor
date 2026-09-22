import { PercentIcon } from "@phosphor-icons/react";
import { InputGroup, parseColor, Separator } from "@pisagor/react";
import { ColorPicker } from "..";
export function InputCompact() {
  return (
    <ColorPicker defaultValue={parseColor("#0485F7").toString("hsla")} format="hsla">
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
            <InputGroup.Input aria-label="Opacity percentage" className="text-right" />
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
  );
}
