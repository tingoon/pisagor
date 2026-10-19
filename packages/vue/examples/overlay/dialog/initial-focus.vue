<script lang="ts" setup>
import { Button, Dialog, Field, Input } from "@pisagor/vue";

const initialFocusEl = () =>
  document.getElementById("dialog-initial-focus-input");
</script>

<template>
  <Dialog
    :initial-focus-el="initialFocusEl"
    description="The first input will be focused when the dialog opens."
    title="Edit profile"
  >
    <template #trigger>
      <Button variant="outline">Open</Button>
    </template>
    <Field.Group>
      <Field>
        <Field.Label>Name</Field.Label>
        <Input id="dialog-initial-focus-input" placeholder="John Doe" />
      </Field>
      <Field>
        <Field.Label>Email</Field.Label>
        <Input placeholder="john.doe@example.com" />
      </Field>
    </Field.Group>
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
