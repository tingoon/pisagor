import { CheckIcon } from "@phosphor-icons/react";
import { ColorPicker } from "@pisagor/react";

export function SwatchPickerDisabled() {
  const swatches = ["#0485F7", "#EF4444", "#F59E0B", "#10B981"];

  return (
    <ColorPicker.Root disabled>
      <ColorPicker.SwatchGroup>
        {swatches.map((color) => (
          <ColorPicker.SwatchTrigger key={color} value={color}>
            <ColorPicker.Swatch value={color}>
              <ColorPicker.SwatchIndicator>
                <CheckIcon />
              </ColorPicker.SwatchIndicator>
            </ColorPicker.Swatch>
          </ColorPicker.SwatchTrigger>
        ))}
      </ColorPicker.SwatchGroup>
    </ColorPicker.Root>
  );
}
