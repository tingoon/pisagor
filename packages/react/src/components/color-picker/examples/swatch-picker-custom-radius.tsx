import { ColorPicker } from "..";

export function SwatchPickerCustomRadius() {
  return (
    <ColorPicker inline>
      <ColorPicker.SwatchGroup>
        <ColorPicker.SwatchTrigger className="rounded-xs" value="#0485F7">
          <ColorPicker.Swatch value="#0485F7">
            <ColorPicker.SwatchIndicator />
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
      </ColorPicker.SwatchGroup>
      <ColorPicker.SwatchGroup>
        <ColorPicker.SwatchTrigger className="rounded-md" value="#EF4444">
          <ColorPicker.Swatch value="#EF4444">
            <ColorPicker.SwatchIndicator />
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
      </ColorPicker.SwatchGroup>
      <ColorPicker.SwatchGroup>
        <ColorPicker.SwatchTrigger className="rounded-lg" value="#F59E0B">
          <ColorPicker.Swatch value="#F59E0B">
            <ColorPicker.SwatchIndicator />
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
      </ColorPicker.SwatchGroup>
      <ColorPicker.SwatchGroup>
        <ColorPicker.SwatchTrigger className="rounded-xl" value="#10B981">
          <ColorPicker.Swatch value="#10B981">
            <ColorPicker.SwatchIndicator />
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
      </ColorPicker.SwatchGroup>
    </ColorPicker>
  );
}
