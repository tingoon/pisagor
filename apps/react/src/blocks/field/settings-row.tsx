import { Checkbox, Field, Surface } from "@pisagor/react";
import { settingsRowBlock } from "@pisagor/recipes/blocks/field";

const styles = settingsRowBlock();

export function SettingsRow() {
  return (
    <Surface
      bordered
      className={styles.root()}
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
