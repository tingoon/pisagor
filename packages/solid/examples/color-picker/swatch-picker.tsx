import { ColorPicker } from "@pisagor/solid";

export function SwatchPicker() {
  const swatches = ["#0485F7", "#EF4444", "#F59E0B", "#10B981"];
  return (
    <ColorPicker inline>
      <ColorPicker.SwatchGroup>
        {swatches.map((color) => (
          <ColorPicker.SwatchTrigger value={color}>
            <ColorPicker.Swatch value={color}>
              <ColorPicker.SwatchIndicator />
            </ColorPicker.Swatch>
          </ColorPicker.SwatchTrigger>
        ))}
      </ColorPicker.SwatchGroup>
    </ColorPicker>
  );
}
