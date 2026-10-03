<script lang="ts">
import { AlertDialog } from "@pisagor/svelte/alert-dialog";
import { Button } from "@pisagor/svelte/button";
</script>

<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button variant="outline">Open</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Header>
      <AlertDialog.Title>Allow accessory to connect?</AlertDialog.Title>
      <AlertDialog.Description>
        Do you want to allow the USB accessory to connect to this device?
      </AlertDialog.Description>
    </AlertDialog.Header>
    <AlertDialog.Footer>
      <AlertDialog.Cancel>Don't allow</AlertDialog.Cancel>
      <AlertDialog.CloseTrigger>
        <AlertDialog.Action>Allow</AlertDialog.Action>
      </AlertDialog.CloseTrigger>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog.Root>
