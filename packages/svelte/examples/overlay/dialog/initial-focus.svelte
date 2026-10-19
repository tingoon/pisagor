<script lang="ts">
  import { Button, Dialog, Field, Input } from "@pisagor/svelte";

  const initialFocusEl = () =>
    document.getElementById("dialog-initial-focus-input") as HTMLElement | null;
</script>

<Dialog
  description="The first input will be focused when the dialog opens."
  {initialFocusEl}
  title="Edit profile"
>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}
  {#snippet actions()}
    <Dialog.CloseTrigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Cancel</Button>
      {/snippet}
    </Dialog.CloseTrigger>
    <Dialog.CloseTrigger>
      {#snippet asChild(props)}
        <Button {...props()}>Save</Button>
      {/snippet}
    </Dialog.CloseTrigger>
  {/snippet}

  <Field.Group>
    <Field>
      <Field.Label>Name</Field.Label>
      <Input id="dialog-initial-focus-input" placeholder="John Doe" />
    </Field>
    <Field>
      <Field.Label>Email</Field.Label>
      <Input placeholder="john.doe@example.com" />
    </Field>
  </Field.Group>
</Dialog>
