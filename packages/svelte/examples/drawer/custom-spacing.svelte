<script lang="ts">
import { Button, Drawer, Field, Input } from "@pisagor/svelte";
</script>

<Drawer>
      <Drawer.Trigger>
            <Button variant="outline">
            Open
          </Button>
          </Drawer.Trigger>
      <Drawer.Content class="[--bleed:2rem] [--space:--spacing(6)]">
        <Drawer.ContentInner>
          <Drawer.Header
            description="Tighter bleed and larger internal padding than defaults."
            title="Custom spacing"
          />
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
        </Drawer.ContentInner>
        <Drawer.Footer>
          <Drawer.ContentInner>
            <Drawer.CloseTrigger>
            <Button variant="outline">
                  Cancel
                </Button>
          </Drawer.CloseTrigger>
            <Drawer.CloseTrigger>
  {#snippet asChild(props)}
    <Button {...props()}>Save changes</Button>
  {/snippet}
</Drawer.CloseTrigger>
          </Drawer.ContentInner>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
