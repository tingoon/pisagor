<script lang="ts" setup>
import { Button, Dialog, Field, Input } from "@pisagor/vue";
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger as-child>
      <Button variant="outline">Open</Button>
    </Dialog.Trigger>
    <Teleport to="body">
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Manage team member</Dialog.Title>
            <Dialog.Description>
              View and manage a user in your team.
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Body class="grid gap-2">
            <div class="grid gap-1">
              <p class="text-muted-foreground text-sm">Name</p>
              <p class="text-sm font-medium">Jane Doe</p>
            </div>
            <div class="grid gap-1">
              <p class="text-muted-foreground text-sm">Email</p>
              <p class="text-sm font-medium">you@example.com</p>
            </div>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Root>
              <Dialog.Trigger as-child>
                <Button variant="outline">Edit details</Button>
              </Dialog.Trigger>
              <Teleport to="body">
                <Dialog.Backdrop />
                <Dialog.Positioner>
                  <Dialog.Content>
                    <Dialog.Header>
                      <Dialog.Title>Edit details</Dialog.Title>
                      <Dialog.Description>
                        Make changes to the member's information.
                      </Dialog.Description>
                    </Dialog.Header>
                    <Dialog.Body>
                      <Field.Group>
                        <Field>
                          <Field.Label>Name</Field.Label>
                          <Input default-value="Jane Doe" type="text" />
                        </Field>
                        <Field>
                          <Field.Label>Email</Field.Label>
                          <Input default-value="you@example.com" type="text" />
                        </Field>
                      </Field.Group>
                    </Dialog.Body>
                    <Dialog.Footer>
                      <Dialog.CloseTrigger as-child>
                        <Button variant="ghost">Cancel</Button>
                      </Dialog.CloseTrigger>
                      <Button type="submit">Save changes</Button>
                    </Dialog.Footer>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Teleport>
            </Dialog.Root>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Teleport>
  </Dialog.Root>
</template>
