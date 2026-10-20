import { Input, NumberInput } from "@pisagor/solid";

export function FieldOnly() {
  return (
    <NumberInput.Root>
      <NumberInput.Control>
        <NumberInput.Input asChild={(props) => <Input {...props()} />} />
      </NumberInput.Control>
    </NumberInput.Root>
  );
}
