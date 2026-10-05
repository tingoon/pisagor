<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import {
  Checkbox,
  Field,
  Input,
  Select,
  Switch,
  Textarea,
} from "@pisagor/svelte";

const selectCollection = createListCollection({
  items: ["Design", "Engineering", "Marketing"],
});
</script>

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
        {#each selectCollection.items as item}
          <Select.Item {item}>
            {item}
          </Select.Item>
        {/each}
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
