/** @jsxImportSource solid-js */
import { Field, Input, parseColor } from "@pisagor/solid";
import { ColorPicker } from "@pisagor/solid/color-picker";
export function InputChannel() {
  return (
    <div class="flex flex-col gap-2">
      <ColorPicker
        class="w-full"
        defaultValue={parseColor("#0485F7").toString("rgba")}
        format="rgba"
      >
        <ColorPicker.View format="rgba">
          <Field orientation="horizontal">
            <Field.Label>RGB</Field.Label>
            <ColorPicker.Input
              asChild={(props) => <Input {...props()} />}
              channel="red"
              class="w-full"
            />
            <ColorPicker.Input
              asChild={(props) => <Input {...props()} />}
              channel="green"
              class="w-full"
            />
            <ColorPicker.Input
              asChild={(props) => <Input {...props()} />}
              channel="blue"
              class="w-full"
            />
            <ColorPicker.SwatchPreview class="size-6" />
          </Field>
        </ColorPicker.View>
      </ColorPicker>
      <ColorPicker
        class="w-full"
        defaultValue={parseColor("#EF4444").toString("hsba")}
        format="hsba"
      >
        <ColorPicker.View format="hsba">
          <Field orientation="horizontal">
            <Field.Label>HSB</Field.Label>
            <ColorPicker.Input
              asChild={(props) => <Input {...props()} />}
              channel="hue"
              class="w-full"
            />
            <ColorPicker.Input
              asChild={(props) => <Input {...props()} />}
              channel="saturation"
              class="w-full"
            />
            <ColorPicker.Input
              asChild={(props) => <Input {...props()} />}
              channel="brightness"
              class="w-full"
            />
            <ColorPicker.SwatchPreview class="size-6" />
          </Field>
        </ColorPicker.View>
      </ColorPicker>
      <ColorPicker
        class="w-full"
        defaultValue={parseColor("#F59E0B").toString("hsla")}
        format="hsla"
      >
        <ColorPicker.View format="hsla">
          <Field orientation="horizontal">
            <Field.Label>HSL</Field.Label>
            <ColorPicker.Input
              asChild={(props) => <Input {...props()} />}
              channel="hue"
              class="w-full"
            />
            <ColorPicker.Input
              asChild={(props) => <Input {...props()} />}
              channel="saturation"
              class="w-full"
            />
            <ColorPicker.Input
              asChild={(props) => <Input {...props()} />}
              channel="lightness"
              class="w-full"
            />
            <ColorPicker.SwatchPreview class="size-6" />
          </Field>
        </ColorPicker.View>
      </ColorPicker>
      <ColorPicker
        class="w-full items-center"
        defaultValue={parseColor("#10B981").toString("hex")}
      >
        <Field.Label>Hex</Field.Label>
        <Field orientation="horizontal">
          <ColorPicker.Control class="min-w-0 flex-1">
            <ColorPicker.Input
              asChild={(props) => <Input {...props()} />}
              channel="hex"
            />
            <ColorPicker.Input
              asChild={(props) => <Input {...props()} />}
              channel="alpha"
            />
            <ColorPicker.SwatchPreview class="size-6" />
          </ColorPicker.Control>
        </Field>
      </ColorPicker>
    </div>
  );
}
