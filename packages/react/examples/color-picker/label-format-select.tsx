import { ColorPicker, Input, parseColor } from "@pisagor/react";

export function LabelFormatSelect() {
  return (
    <ColorPicker
      className="w-full"
      defaultValue={parseColor("#0485F7").toString("rgba")}
    >
      <ColorPicker.Label>Brand color</ColorPicker.Label>
      <ColorPicker.Control className="min-w-0 flex-1">
        <ColorPicker.FormatSelect />
        <ColorPicker.ChannelInput asChild channel="hex">
          <Input />
        </ColorPicker.ChannelInput>
        <ColorPicker.SwatchPreview className="size-6" />
      </ColorPicker.Control>
    </ColorPicker>
  );
}
