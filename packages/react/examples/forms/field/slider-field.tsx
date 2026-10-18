import { Field, Slider } from "@pisagor/react";
export function SliderField() {
  return (
    <Field className="items-stretch gap-3">
      <Slider defaultValue={[50]} label="Volume" />
      <Field.Description>
        Adjust the volume of the media player
      </Field.Description>
    </Field>
  );
}
