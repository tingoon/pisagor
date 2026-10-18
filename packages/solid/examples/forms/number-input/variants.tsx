import { NumberInput } from "@pisagor/solid";

export function Variants() {
  return (
    <div class="flex flex-col gap-2">
      <NumberInput defaultValue="1" variant="primary">
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
      <NumberInput defaultValue="1" variant="secondary">
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
    </div>
  );
}
