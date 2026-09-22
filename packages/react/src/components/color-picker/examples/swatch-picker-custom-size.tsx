import { ColorPicker } from "..";

export function SwatchPickerCustomSize() {
  return (
    <ColorPicker className="w-full flex-wrap justify-center gap-2" inline>
      <ColorPicker.SwatchGroup>
        <ColorPicker.SwatchTrigger className="size-4" value="#0485F7">
          <ColorPicker.Swatch value="#0485F7" />
        </ColorPicker.SwatchTrigger>
        <ColorPicker.SwatchTrigger className="size-6" value="#EF4444">
          <ColorPicker.Swatch value="#EF4444">
            <ColorPicker.SwatchIndicator />
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
        <ColorPicker.SwatchTrigger className="size-8" value="#F59E0B">
          <ColorPicker.Swatch value="#F59E0B">
            <ColorPicker.SwatchIndicator />
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
        <ColorPicker.SwatchTrigger className="size-10" value="#10B981">
          <ColorPicker.Swatch value="#10B981">
            <ColorPicker.SwatchIndicator />
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
      </ColorPicker.SwatchGroup>
    </ColorPicker>
  );
}
