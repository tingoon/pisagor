import { Field, Input, parseColor } from "@pisagor/react";
import { ColorPicker } from "..";
export function InputChannel() {
  return (
    <div className="flex flex-col gap-2">
      <ColorPicker
        className="w-full"
        defaultValue={parseColor("#0485F7").toString("rgba")}
        format="rgba"
      >
        <ColorPicker.View format="rgba">
          <Field orientation="horizontal">
            <Field.Label>RGB</Field.Label>
            <ColorPicker.Input asChild channel="red" className="w-full">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.Input asChild channel="green" className="w-full">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.Input asChild channel="blue" className="w-full">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.SwatchPreview className="size-6" />
          </Field>
        </ColorPicker.View>
      </ColorPicker>
      <ColorPicker
        className="w-full"
        defaultValue={parseColor("#EF4444").toString("hsba")}
        format="hsba"
      >
        <ColorPicker.View format="hsba">
          <Field orientation="horizontal">
            <Field.Label>HSB</Field.Label>
            <ColorPicker.Input asChild channel="hue" className="w-full">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.Input asChild channel="saturation" className="w-full">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.Input asChild channel="brightness" className="w-full">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.SwatchPreview className="size-6" />
          </Field>
        </ColorPicker.View>
      </ColorPicker>
      <ColorPicker
        className="w-full"
        defaultValue={parseColor("#F59E0B").toString("hsla")}
        format="hsla"
      >
        <ColorPicker.View format="hsla">
          <Field orientation="horizontal">
            <Field.Label>HSL</Field.Label>
            <ColorPicker.Input asChild channel="hue" className="w-full">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.Input asChild channel="saturation" className="w-full">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.Input asChild channel="lightness" className="w-full">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.SwatchPreview className="size-6" />
          </Field>
        </ColorPicker.View>
      </ColorPicker>
      <ColorPicker
        className="w-full items-center"
        defaultValue={parseColor("#10B981").toString("hex")}
      >
        <Field.Label>Hex</Field.Label>
        <Field orientation="horizontal">
          <ColorPicker.Control className="min-w-0 flex-1">
            <ColorPicker.Input asChild channel="hex">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.Input asChild channel="alpha">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.SwatchPreview className="size-6" />
          </ColorPicker.Control>
        </Field>
      </ColorPicker>
    </div>
  );
}
