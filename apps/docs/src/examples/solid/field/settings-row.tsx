/** @jsxImportSource solid-js */

import { Checkbox, Field, Surface } from "@pisagor/solid";
import { settingsRowBlock } from "#/recipes/blocks/field";

const styles = settingsRowBlock();

export function SettingsRow() {
  return (
    <Surface
      bordered
      class={styles.root()}
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
