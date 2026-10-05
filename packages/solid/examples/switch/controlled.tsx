import { Field, Switch } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function Controlled() {
  const [checked, setChecked] = createSignal(false);

  return (
    <Field.Group class="flex flex-col items-center gap-2">
      <Field orientation="horizontal">
        <Switch
          checked={checked()}
          onCheckedChange={({ checked }) => setChecked(checked === true)}
        />
        <Field.Content>
          <Field.Label>Enable notifications</Field.Label>
        </Field.Content>
      </Field>
      <p class="text-center">{checked() ? "✅" : "❌"}</p>
    </Field.Group>
  );
}
