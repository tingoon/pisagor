<script lang="ts" setup>
import { Button, Field, Input, Sheet } from "@pisagor/vue";
</script>

<template>
  <Sheet
    description="This sheet uses the inset variant with rounded corners and padding."
    title="Inset sheet"
    variant="inset"
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
        <Field.Label>Email</Field.Label>
        <Input default-value="you@example.com" />
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
