import { ColorPicker } from "..";

export function SwatchPickerDisabled() {
  const swatches = ["#0485F7", "#EF4444", "#F59E0B", "#10B981"];
  return (
    <ColorPicker disabled>
      <ColorPicker.SwatchGroup>
        {swatches.map((color) => (
          <ColorPicker.SwatchTrigger key={color} value={color}>
            <ColorPicker.Swatch value={color}>
              <ColorPicker.SwatchIndicator />
            </ColorPicker.Swatch>
          </ColorPicker.SwatchTrigger>
        ))}
      </ColorPicker.SwatchGroup>
    </ColorPicker>
  );
}
