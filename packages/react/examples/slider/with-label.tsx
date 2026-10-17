import { Field, Slider } from "@pisagor/react";
export function WithLabel() {
  return (
    <Field>
      <Slider defaultValue={[50]} label="Opacity" showValue />
    </Field>
  );
}
