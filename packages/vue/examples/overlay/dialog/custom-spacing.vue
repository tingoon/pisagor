<script lang="ts" setup>
import { Button, Dialog, Field, Input, Select } from "@pisagor/vue";

const branches = ["main", "develop"];
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger as-child>
      <Button variant="outline">Open</Button>
    </Dialog.Trigger>
    <Teleport to="body">
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content
          class="[--space:--spacing(4)] sm:[--space:--spacing(8)]"
        >
          <Dialog.Header>
            <Dialog.Title>Edit project</Dialog.Title>
            <Dialog.Description>
              Make changes to your project settings.
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Body>
            <Field.Set>
              <Field.Group>
                <Field>
                  <Field.Label>Name</Field.Label>
                  <Input placeholder="Your project" />
                </Field>
                <Field>
                  <Field.Label>Main branch</Field.Label>
                  <Select placeholder="Select branch" :items="branches" />
                </Field>
              </Field.Group>
            </Field.Set>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.CloseTrigger as-child>
              <Button variant="outline">Cancel</Button>
            </Dialog.CloseTrigger>
            <Dialog.CloseTrigger as-child>
              <Button>Save</Button>
            </Dialog.CloseTrigger>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Teleport>
  </Dialog.Root>
</template>
