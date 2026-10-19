import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { Button, Field, Input, NumberInput } from "@pisagor/react";

export function NumberInputStory() {
  return (
    <Field>
      <NumberInput.Root defaultValue="50" max={100} min={1}>
        <NumberInput.Scrubber asChild>
          <NumberInput.Label asChild>
            <Field.Label>Quantity</Field.Label>
          </NumberInput.Label>
        </NumberInput.Scrubber>
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
    </Field>
  );
}
