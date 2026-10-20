import { ColorPicker, Field, Input, parseColor } from "@pisagor/solid";

export function InputChannel() {
  return (
    <div class="flex flex-col gap-2">
      <ColorPicker.Root
        class="w-full"
        defaultValue={parseColor("#0485F7").toString("rgba")}
        format="rgba"
      >
        <ColorPicker.View format="rgba">
          <Field orientation="horizontal">
            <Field.Label>RGB</Field.Label>
            <ColorPicker.Input
              channel="red"
              class="w-full"
              asChild={(props) => <Input {...props()} />}
            />
            <ColorPicker.Input
              channel="green"
              class="w-full"
              asChild={(props) => <Input {...props()} />}
            />
            <ColorPicker.Input
              channel="blue"
              class="w-full"
              asChild={(props) => <Input {...props()} />}
            />
            <ColorPicker.SwatchPreview class="size-6" />
          </Field>
        </ColorPicker.View>
      </ColorPicker.Root>
      <ColorPicker.Root
        class="w-full"
        defaultValue={parseColor("#EF4444").toString("hsba")}
        format="hsba"
      >
        <ColorPicker.View format="hsba">
          <Field orientation="horizontal">
            <Field.Label>HSB</Field.Label>
            <ColorPicker.Input
              channel="hue"
              class="w-full"
              asChild={(props) => <Input {...props()} />}
            />
            <ColorPicker.Input
              channel="saturation"
              class="w-full"
              asChild={(props) => <Input {...props()} />}
            />
            <ColorPicker.Input
              channel="brightness"
              class="w-full"
              asChild={(props) => <Input {...props()} />}
            />
            <ColorPicker.SwatchPreview class="size-6" />
          </Field>
        </ColorPicker.View>
      </ColorPicker.Root>
      <ColorPicker.Root
        class="w-full"
        defaultValue={parseColor("#F59E0B").toString("hsla")}
        format="hsla"
      >
        <ColorPicker.View format="hsla">
          <Field orientation="horizontal">
            <Field.Label>HSL</Field.Label>
            <ColorPicker.Input
              channel="hue"
              class="w-full"
              asChild={(props) => <Input {...props()} />}
            />
            <ColorPicker.Input
              channel="saturation"
              class="w-full"
              asChild={(props) => <Input {...props()} />}
            />
            <ColorPicker.Input
              channel="lightness"
              class="w-full"
              asChild={(props) => <Input {...props()} />}
            />
            <ColorPicker.SwatchPreview class="size-6" />
          </Field>
        </ColorPicker.View>
      </ColorPicker.Root>
      <ColorPicker.Root
        class="w-full items-center"
        defaultValue={parseColor("#10B981").toString("hex")}
      >
        <Field.Label>Hex</Field.Label>
        <Field orientation="horizontal">
          <ColorPicker.Control class="min-w-0 flex-1">
            <ColorPicker.Input
              channel="hex"
              asChild={(props) => <Input {...props()} />}
            />
            <ColorPicker.Input
              channel="alpha"
              asChild={(props) => <Input {...props()} />}
            />
            <ColorPicker.SwatchPreview class="size-6" />
          </ColorPicker.Control>
        </Field>
      </ColorPicker.Root>
    </div>
  );
}
