import { Field, Switch } from "@pisagor/solid";

export function Compound() {
  return (
    <Field class="flex-row items-center gap-2">
      <Switch.Root defaultChecked>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.HiddenInput />
      </Switch.Root>
      <Field.Label>Airplane mode</Field.Label>
    </Field>
  );
}
