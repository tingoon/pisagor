<script lang="ts">
  import { Button, Drawer, Field, Input } from "@pisagor/svelte";
</script>

<Drawer
  classNames={{ content: "[--bleed:2rem] [--space:--spacing(6)]" }}
  description="Tighter bleed and larger internal padding than defaults."
  title="Custom spacing"
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
        <Button {...props()}>Save changes</Button>
      {/snippet}
    </Drawer.CloseTrigger>
  {/snippet}

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
</Drawer>
