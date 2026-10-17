<script module lang="ts">
  import source from "./nested.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal";
  import { Button, Dialog, Field, Input } from "@pisagor/svelte";
</script>

<Dialog.Root>
  <Dialog.Trigger>
    <Button variant="outline">Open</Button>
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop />
    <Dialog.Positioner>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Manage team member</Dialog.Title>
          <Dialog.Description
            >View and manage a user in your team.</Dialog.Description
          >
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
            <Dialog.Trigger>
              <Button variant="outline">Edit details</Button>
            </Dialog.Trigger>
            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content showCloseButton={false}>
                  <Dialog.Header>
                    <Dialog.Title>Edit details</Dialog.Title>
                    <Dialog.Description
                      >Make changes to the member&apos;s information.</Dialog.Description
                    >
                  </Dialog.Header>
                  <Dialog.Body>
                    <Field.Group>
                      <Field>
                        <Field.Label>Name</Field.Label>
                        <Input type="text" value="Jane Doe" />
                      </Field>
                      <Field>
                        <Field.Label>Email</Field.Label>
                        <Input type="text" value="you@example.com" />
                      </Field>
                    </Field.Group>
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Dialog.CloseTrigger>
                      <Button variant="ghost">Cancel</Button>
                    </Dialog.CloseTrigger>
                    <Button type="submit">Save changes</Button>
                  </Dialog.Footer>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
