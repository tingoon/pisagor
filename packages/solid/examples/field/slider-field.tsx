/** @jsxImportSource solid-js */
import { Field, Slider } from "@pisagor/solid";
export function SliderField() {
  return (
    <Field class="items-stretch gap-3">
      <Slider defaultValue={[50]} label="Volume" />
      <Field.Description>
        Adjust the volume of the media player
      </Field.Description>
    </Field>
  );
}
