import { NumberInput } from "..";

export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      <NumberInput defaultValue="10" size="sm">
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
      <NumberInput defaultValue="10" size="md">
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
      <NumberInput defaultValue="10" size="lg">
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
    </div>
  );
}
