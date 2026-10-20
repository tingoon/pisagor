import { MinusIcon, PlusIcon } from "@squidlab/phosphor-solid/icons";
import { Button, Field, Input, NumberInput } from "@pisagor/solid";

export function NumberInputStory() {
  return (
    <Field>
      <NumberInput.Root defaultValue="50" max={100} min={1}>
        <NumberInput.Scrubber
          asChild={(props) => (
            <NumberInput.Label
              {...props()}
              asChild={(props) => (
                <Field.Label {...props()}>Quantity</Field.Label>
              )}
            />
          )}
        />
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
    </Field>
  );
}
