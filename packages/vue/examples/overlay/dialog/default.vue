<script lang="ts" setup>
import { Button, Dialog, Field, Input, Select } from "@pisagor/vue";

const branches = ["main", "develop", "feature/123", "release/1.0.0"];
</script>

<template>
  <Dialog
    description="Make changes to your project settings."
    title="Edit project"
  >
    <template #trigger>
      <Button variant="outline">Open</Button>
    </template>
    <Field.Set>
      <Field.Group>
        <Field>
          <Field.Label>Name</Field.Label>
          <Input placeholder="Your project" />
        </Field>
        <Field>
          <Field.Label>Main branch</Field.Label>
          <Select :items="branches" placeholder="Select branch" />
        </Field>
      </Field.Group>
    </Field.Set>
    <template #actions>
      <Dialog.CloseTrigger as-child>
        <Button variant="outline">Cancel</Button>
      </Dialog.CloseTrigger>
      <Dialog.CloseTrigger as-child>
        <Button>Save</Button>
      </Dialog.CloseTrigger>
    </template>
  </Dialog>
</template>
