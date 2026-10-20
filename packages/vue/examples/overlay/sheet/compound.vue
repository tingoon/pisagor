<script lang="ts" setup>
import { Button, Field, Input, Sheet } from "@pisagor/vue";
</script>

<template>
  <Sheet.Root placement="right">
    <Sheet.Trigger as-child>
      <Button variant="outline">Open</Button>
    </Sheet.Trigger>
    <Teleport to="body">
      <Sheet.Backdrop />
      <Sheet.Positioner>
        <Sheet.Content>
          <Sheet.Header>
            <Sheet.Title>Edit user</Sheet.Title>
            <Sheet.Description>
              Make changes to your account here. Click save when you're done.
            </Sheet.Description>
          </Sheet.Header>
          <Sheet.Body>
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
          </Sheet.Body>
          <Sheet.Footer>
            <Sheet.CloseTrigger as-child>
              <Button variant="outline">Cancel</Button>
            </Sheet.CloseTrigger>
            <Sheet.CloseTrigger as-child>
              <Button>Save changes</Button>
            </Sheet.CloseTrigger>
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet.Positioner>
    </Teleport>
  </Sheet.Root>
</template>
