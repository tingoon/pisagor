<script lang="ts">
  import { Button, Field, Input, Sheet } from "@pisagor/svelte";
</script>

<Sheet
  description="This sheet uses the inset variant with rounded corners and padding."
  title="Inset sheet"
  variant="inset"
>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}
  {#snippet actions()}
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
</Sheet>
