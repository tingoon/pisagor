import { Button, ColorPicker } from "@pisagor/solid";
export function PopoverWithSwatchPicker() {
  const swatches = [
    "#ef4444",
    "#f97316",
    "#eab308",
    "#22c55e",
    "#06b6d4",
    "#3b82f6",
    "#8b5cf6",
    "#ec4899",
    "#f43f5e",
  ];
  return (
    <ColorPicker defaultValue="#eb5e41" format="hsla">
      <ColorPicker.Control>
        <ColorPicker.Trigger
          asChild={(props) => (
            <Button {...props()} size="lg" variant="ghost">
              <ColorPicker.SwatchPreview class="size-6" />
              Pick a color
            </Button>
          )}
        />
      </ColorPicker.Control>
      <ColorPicker.Content>
        <ColorPicker.Area>
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>
        <ColorPicker.View format="hsla">
          <ColorPicker.ChannelSlider channel="hue" />
        </ColorPicker.View>
        <ColorPicker.SwatchGroup>
          {swatches.map((color) => (
            <ColorPicker.SwatchTrigger class="size-4" value={color}>
              <ColorPicker.Swatch value={color} />
            </ColorPicker.SwatchTrigger>
          ))}
        </ColorPicker.SwatchGroup>
      </ColorPicker.Content>
    </ColorPicker>
  );
}
