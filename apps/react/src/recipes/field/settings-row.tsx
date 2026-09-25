import { Checkbox, Field, Surface } from "@pisagor/react";

export function SettingsRow() {
  return (
    <Surface
      bordered
      className="w-full max-w-md"
      padding="md"
      rounded
      variant="secondary"
    >
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
    </Surface>
  );
}
