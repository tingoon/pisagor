import { ColorPicker, Input, parseColor } from "@pisagor/solid";

export function LabelFormatSelect() {
  return (
    <ColorPicker.Root
      class="w-full"
      defaultValue={parseColor("#0485F7").toString("rgba")}
    >
      <ColorPicker.Label>Brand color</ColorPicker.Label>
      <ColorPicker.Control class="min-w-0 flex-1">
        <ColorPicker.FormatSelect />
        <ColorPicker.ChannelInput
          channel="hex"
          asChild={(props) => <Input {...props()} />}
        />
        <ColorPicker.SwatchPreview class="size-6" />
      </ColorPicker.Control>
    </ColorPicker.Root>
  );
}
