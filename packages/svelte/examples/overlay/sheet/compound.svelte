<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { Button, Field, Input, ScrollArea, Sheet } from "@pisagor/svelte";
</script>

<Sheet.Root placement="right">
  <Sheet.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Open</Button>
    {/snippet}
  </Sheet.Trigger>
  <Portal>
    <Sheet.Backdrop />
    <Sheet.Positioner>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Edit user</Sheet.Title>
          <Sheet.Description>
            Make changes to your account here. Click save when you're done.
          </Sheet.Description>
        </Sheet.Header>
        <ScrollArea>
          <Sheet.Body>
            <Field.Group>
              <Field>
                <Field.Label>Name</Field.Label>
                <Input value="Jane Doe" />
              </Field>
              <Field>
                <Field.Label>Username</Field.Label>
                <Input value="@jane.doe" />
              </Field>
            </Field.Group>
          </Sheet.Body>
        </ScrollArea>
        <Sheet.Footer>
          <Sheet.CloseTrigger>
            {#snippet asChild(props)}
              <Button {...props()} variant="outline">Cancel</Button>
            {/snippet}
          </Sheet.CloseTrigger>
          <Sheet.CloseTrigger>
            {#snippet asChild(props)}
              <Button {...props()}>Save changes</Button>
            {/snippet}
          </Sheet.CloseTrigger>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet.Positioner>
  </Portal>
</Sheet.Root>
