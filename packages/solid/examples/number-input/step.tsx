/** @jsxImportSource solid-js */
import { Field, NumberInput } from "@pisagor/solid";
export function Step() {
  return (
    <div class="flex flex-col gap-2">
      <NumberInput defaultValue="0" step={5}>
        <Field.Label>Step 5</Field.Label>
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
      <NumberInput defaultValue="0.1" step={0.1}>
        <Field.Label>Step 0.1</Field.Label>
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
    </div>
  );
}
