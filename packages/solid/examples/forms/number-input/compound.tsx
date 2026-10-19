import { MinusIcon, PlusIcon } from "@squidlab/phosphor-solid/icons";
import { Button, Input, NumberInput } from "@pisagor/solid";

export function Compound() {
  return (
    <NumberInput.Root defaultValue="1">
      <NumberInput.Control>
        <NumberInput.DecrementTrigger
          asChild={(props) => (
            <Button {...props()} variant="ghost">
              <MinusIcon aria-hidden />
            </Button>
          )}
        />
        <NumberInput.Input asChild={(props) => <Input {...props()} />} />
        <NumberInput.IncrementTrigger
          asChild={(props) => (
            <Button {...props()} variant="ghost">
              <PlusIcon aria-hidden />
            </Button>
          )}
        />
      </NumberInput.Control>
    </NumberInput.Root>
  );
}
