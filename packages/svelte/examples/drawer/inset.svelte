<script lang="ts">
import { Button, Drawer, Field, Input } from "@pisagor/svelte";
</script>

<Drawer>
  <Drawer.Trigger>
    <Button variant="outline"> Open </Button>
  </Drawer.Trigger>
  <Drawer.Content variant="inset">
    <Drawer.ContentInner>
      <Drawer.Header
        description="On larger screens, the drawer appears with rounded corners and padding."
        title="Inset drawer"
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
