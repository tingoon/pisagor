<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { Button, Drawer, Field, Input, ScrollArea } from "@pisagor/svelte";
</script>

<Drawer.Root>
  <Drawer.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Open</Button>
    {/snippet}
  </Drawer.Trigger>
  <Portal>
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
                  <Input value="Jane Doe" />
                </Field>
                <Field>
                  <Field.Label>Username</Field.Label>
                  <Input value="@jane.doe" />
                </Field>
              </Field.Group>
            </Drawer.Body>
          </ScrollArea>
        </Drawer.ContentInner>
        <Drawer.Footer>
          <Drawer.ContentInner>
            <Drawer.CloseTrigger>
              {#snippet asChild(props)}
                <Button {...props()} variant="outline">Cancel</Button>
              {/snippet}
            </Drawer.CloseTrigger>
            <Drawer.CloseTrigger>
              {#snippet asChild(props)}
                <Button {...props()}>Save changes</Button>
              {/snippet}
            </Drawer.CloseTrigger>
          </Drawer.ContentInner>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Positioner>
  </Portal>
</Drawer.Root>
