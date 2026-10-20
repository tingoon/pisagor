<script lang="ts" setup>
import { Button, Drawer, Field, Input, ScrollArea } from "@pisagor/vue";
</script>

<template>
  <Drawer.Root>
    <Drawer.Trigger as-child>
      <Button variant="outline">Open</Button>
    </Drawer.Trigger>
    <Teleport to="body">
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Grabber>
            <Drawer.GrabberIndicator />
          </Drawer.Grabber>
          <Drawer.ContentInner>
            <Drawer.Header>
              <Drawer.Title>Edit profile</Drawer.Title>
              <Drawer.Description>
                Make changes to your account here. Swipe down to close.
              </Drawer.Description>
            </Drawer.Header>
            <ScrollArea>
              <Drawer.Body>
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
              </Drawer.Body>
            </ScrollArea>
          </Drawer.ContentInner>
          <Drawer.Footer>
            <Drawer.ContentInner>
              <Drawer.CloseTrigger as-child>
                <Button variant="outline">Cancel</Button>
              </Drawer.CloseTrigger>
              <Drawer.CloseTrigger as-child>
                <Button>Save changes</Button>
              </Drawer.CloseTrigger>
            </Drawer.ContentInner>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Teleport>
  </Drawer.Root>
</template>
