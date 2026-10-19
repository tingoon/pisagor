import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { Button, Input, NumberInput } from "@pisagor/react";

export function Compound() {
  return (
    <NumberInput.Root defaultValue="1">
      <NumberInput.Control>
        <NumberInput.DecrementTrigger asChild>
          <Button variant="ghost">
            <MinusIcon aria-hidden />
          </Button>
        </NumberInput.DecrementTrigger>
        <NumberInput.Input asChild>
          <Input />
        </NumberInput.Input>
        <NumberInput.IncrementTrigger asChild>
          <Button variant="ghost">
            <PlusIcon aria-hidden />
          </Button>
        </NumberInput.IncrementTrigger>
      </NumberInput.Control>
    </NumberInput.Root>
  );
}
