<script lang="ts">
import { Button, Drawer, Field, Input } from "@pisagor/svelte";
</script>

<Drawer swipeDirection="down">
  <Drawer.Trigger>
    <Button variant="outline"> Open drawer </Button>
  </Drawer.Trigger>
  <Drawer.Content>
    <Drawer.ContentInner>
      <Drawer.Header
        description="Constrains width to max-w-sm and centers content. Use it to wrap the main body or footer actions."
        title="Container"
      />
      <Drawer.Body>
        <Field.Group>
          <Field>
            <Field.Label>Name</Field.Label>
            <Input value="Jane Doe" />
          </Field>
          <Field>
            <Field.Label>Email</Field.Label>
            <Input value="you@example.com" />
          </Field>
        </Field.Group>
      </Drawer.Body>
    </Drawer.ContentInner>
    <Drawer.Footer>
      <Drawer.ContentInner>
        <Drawer.CloseTrigger>
          <Button variant="outline"> Cancel </Button>
        </Drawer.CloseTrigger>
        <Drawer.CloseTrigger>
          {#snippet asChild(
            props: any,
          )}
            <Button {...props()}>Save</Button>
          {/snippet}
        </Drawer.CloseTrigger>
      </Drawer.ContentInner>
    </Drawer.Footer>
  </Drawer.Content>
</Drawer>
