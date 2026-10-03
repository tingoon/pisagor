/** @jsxImportSource solid-js */
import { createListCollection } from "@ark-ui/solid/collection";
import {
  Checkbox,
  Field,
  Input,
  Select,
  Switch,
  Textarea,
} from "@pisagor/solid";
import { Surface } from "@pisagor/solid/surface";

const selectCollection = createListCollection({
  items: ["Design", "Engineering", "Marketing"],
});

function FormControlsDemo() {
  return (
    <Field.Group>
      <Field>
        <Field.Label for="surface-email">Email</Field.Label>
        <Input clearable id="surface-email" placeholder="you@example.com" />
      </Field>

      <Field>
        <Field.Label for="surface-notes">Notes</Field.Label>
        <Textarea id="surface-notes" placeholder="Add context…" rows={3} />
      </Field>

      <Field>
        <Field.Label for="surface-team">Team</Field.Label>
        <Select.Root collection={selectCollection} id="surface-team">
          <Select.Trigger>
            <Select.ValueText placeholder="Choose a team" />
          </Select.Trigger>
          <Select.Content>
            {selectCollection.items.map((item) => (
              <Select.Item item={item}>{item}</Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </Field>

      <Field orientation="horizontal">
        <Switch id="surface-notify" />
        <Field.Content>
          <Field.Label for="surface-notify">Email notifications</Field.Label>
        </Field.Content>
      </Field>

      <Field orientation="horizontal">
        <Checkbox id="surface-terms" />
        <Field.Content>
          <Field.Label for="surface-terms">Accept terms</Field.Label>
        </Field.Content>
      </Field>
    </Field.Group>
  );
}

export function WithFormControls() {
  return (
    <Surface bordered padding="md" variant="default">
      <div class="mb-4">
        <h3 class="font-semibold text-sm">Settings</h3>
        <p class="text-muted-foreground text-sm">
          Grouped controls on a surface background.
        </p>
      </div>
      <FormControlsDemo />
    </Surface>
  );
}
