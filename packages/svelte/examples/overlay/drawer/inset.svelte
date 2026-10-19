<script lang="ts">
  import { Button, Drawer, Field, Input } from "@pisagor/svelte";
</script>

<Drawer
  description="On larger screens, the drawer appears with rounded corners and padding."
  title="Inset drawer"
  variant="inset"
>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}
  {#snippet actions()}
    <Drawer.CloseTrigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Cancel</Button>
      {/snippet}
    </Drawer.CloseTrigger>
    <Drawer.CloseTrigger>
      {#snippet asChild(props)}
        <Button {...props()}>Save</Button>
      {/snippet}
    </Drawer.CloseTrigger>
  {/snippet}

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
</Drawer>
