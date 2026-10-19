<script lang="ts" setup>
import { Button, Drawer, Field, Input } from "@pisagor/vue";
</script>

<template>
  <Drawer
    description="On larger screens, the drawer appears with rounded corners and padding."
    title="Inset drawer"
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
      <Drawer.CloseTrigger as-child>
        <Button variant="outline">Cancel</Button>
      </Drawer.CloseTrigger>
      <Drawer.CloseTrigger as-child>
        <Button>Save</Button>
      </Drawer.CloseTrigger>
    </template>
  </Drawer>
</template>
