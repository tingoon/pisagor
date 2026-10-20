<script lang="ts" setup>
import { Button, Drawer, Field, Input } from "@pisagor/vue";
</script>

<template>
  <Drawer
    description="Make changes to your account here. Swipe down to close."
    title="Edit profile"
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
      <Drawer.CloseTrigger as-child>
        <Button variant="outline">Cancel</Button>
      </Drawer.CloseTrigger>
      <Drawer.CloseTrigger as-child>
        <Button>Save changes</Button>
      </Drawer.CloseTrigger>
    </template>
  </Drawer>
</template>
