<script lang="ts" setup>
import {
  Checkbox,
  Field,
  Input,
  Select,
  Surface,
  Switch,
  Textarea,
} from "@pisagor/vue";

const teams = ["Design", "Engineering", "Marketing"];
</script>

<template>
  <Surface bordered padding="md" variant="default">
    <div class="mb-4">
      <h3 class="font-semibold text-sm">Settings</h3>
      <p class="text-muted-foreground text-sm">
        Grouped controls on a surface background.
      </p>
    </div>
    <Field.Group>
      <Field>
        <Field.Label>Email</Field.Label>
        <Input clearable placeholder="you@example.com" />
      </Field>
      <Field>
        <Field.Label>Notes</Field.Label>
        <Textarea placeholder="Add context…" :rows="3" />
      </Field>
      <Field>
        <Field.Label>Team</Field.Label>
        <Select placeholder="Choose a team" :items="teams" />
      </Field>
      <Field orientation="horizontal">
        <Switch />
        <Field.Content>
          <Field.Label>Email notifications</Field.Label>
        </Field.Content>
      </Field>
      <Field orientation="horizontal">
        <Checkbox />
        <Field.Content>
          <Field.Label>Accept terms</Field.Label>
        </Field.Content>
      </Field>
    </Field.Group>
  </Surface>
</template>
