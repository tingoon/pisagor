import { ColorPicker, InputGroup, parseColor, Separator } from "@pisagor/solid";
import { PercentIcon } from "@pisagor/solid/icons";
export function InputCompact() {
  return (
    <ColorPicker
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
            asChild={(props) => <InputGroup.Input {...props()} />}
            channel="hex"
            class="flex-1"
          />
          <Separator orientation="vertical" />
          <ColorPicker.Input
            asChild={(props) => (
              <InputGroup.Input
                {...props()}
                aria-label="Opacity percentage"
                class="text-right"
              />
            )}
            channel="alpha"
          />
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
