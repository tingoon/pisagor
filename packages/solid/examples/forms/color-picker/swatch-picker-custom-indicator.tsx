import { ColorPicker } from "@pisagor/solid";
import { SparkleIcon } from "@pisagor/solid/icons";

export function SwatchPickerCustomIndicator() {
  const swatches = ["#0485F7", "#EF4444", "#F59E0B", "#10B981"];
  return (
    <ColorPicker inline>
      <ColorPicker.SwatchGroup>
        {swatches.map((color) => (
          <ColorPicker.SwatchTrigger value={color}>
            <ColorPicker.Swatch value={color}>
              <ColorPicker.SwatchIndicator>
                <SparkleIcon />
              </ColorPicker.SwatchIndicator>
            </ColorPicker.Swatch>
          </ColorPicker.SwatchTrigger>
        ))}
      </ColorPicker.SwatchGroup>
    </ColorPicker>
  );
}
