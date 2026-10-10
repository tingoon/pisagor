<script lang="ts">
import { Portal } from "@ark-ui/svelte/portal";
import { Button, Dialog, Field, Input, Select } from "@pisagor/svelte";
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
                <Select
                  items={["main", "develop", "feature/123", "release/1.0.0"]}
                  placeholder="Select branch"
                />
              </Field>
            </Field.Group>
          </Field.Set>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger>
            <Button variant="outline">Cancel</Button>
          </Dialog.CloseTrigger>
          <Dialog.CloseTrigger>
            <Button>Save</Button>
          </Dialog.CloseTrigger>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
