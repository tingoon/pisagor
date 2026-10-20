<script lang="ts" setup>
import { Button, Field, Input, Sheet } from "@pisagor/vue";
</script>

<template>
  <Sheet
    description="Make changes to your account here. Click save when you're done."
    title="Edit user"
  >
    <template #trigger>
      <Button variant="outline">Open</Button>
    </template>
    <Field.Group>
      <Field>
        <Field.Label>Name</Field.Label>
        <Input default-value="Jane Doe" />
      </Field>
      <Field>
        <Field.Label>Username</Field.Label>
        <Input default-value="@jane.doe" />
      </Field>
    </Field.Group>
    <template #actions>
      <Sheet.CloseTrigger as-child>
        <Button variant="outline">Cancel</Button>
      </Sheet.CloseTrigger>
      <Sheet.CloseTrigger as-child>
        <Button>Save changes</Button>
      </Sheet.CloseTrigger>
    </template>
  </Sheet>
</template>
