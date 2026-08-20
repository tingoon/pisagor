import { Checkbox, Field } from "@pisagor/react";

export function SettingsRow() {
  return (
    <Field.Label>
      <Field orientation="horizontal">
        <Checkbox />
        <Field.Content>
          <Field.Title>Enable notifications</Field.Title>
          <Field.Description>
            You can enable or disable notifications at any time.
          </Field.Description>
        </Field.Content>
      </Field>
    </Field.Label>
  );
}
