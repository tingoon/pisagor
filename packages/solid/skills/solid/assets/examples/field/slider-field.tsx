/** @jsxImportSource solid-js */
import { Slider } from "@pisagor/solid";
import { Field } from "@pisagor/solid/field";
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
