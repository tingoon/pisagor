<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { AlertDialog, Button } from "@pisagor/svelte";
</script>

<AlertDialog.Root>
  <AlertDialog.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Open</Button>
    {/snippet}
  </AlertDialog.Trigger>
  <Portal>
    <AlertDialog.Backdrop />
    <AlertDialog.Positioner>
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>Allow accessory to connect?</AlertDialog.Title>
          <AlertDialog.Description>
            Do you want to allow the USB accessory to connect to this device?
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Don't allow</AlertDialog.Cancel>
          <AlertDialog.Action>Allow</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Positioner>
  </Portal>
</AlertDialog.Root>
