import { Field, NumberInput } from "@pisagor/react";
export function NumberInputStory() {
  return (
    <Field>
      <NumberInput defaultValue="50" max={100} min={1}>
        <NumberInput.Scrubber>Quantity</NumberInput.Scrubber>
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
    </Field>
  );
}
