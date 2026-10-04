<script lang="ts">
import { AlertDialog, Button } from "@pisagor/svelte";
</script>

<div class="flex flex-wrap gap-2">
  <AlertDialog
    description="Do you want to allow the USB accessory to connect to this device?"
    title="Allow accessory to connect?"
  >
    {#snippet trigger()}
      <Button variant="outline">Default</Button>
    {/snippet}
    {#snippet actions()}
      <AlertDialog.Cancel>Don't allow</AlertDialog.Cancel>
      <AlertDialog.CloseTrigger>
        <AlertDialog.Action variant="default">Allow</AlertDialog.Action>
      </AlertDialog.CloseTrigger>
    {/snippet}
  </AlertDialog>
  <AlertDialog
    description="This action cannot be undone. This will permanently delete the project and remove all data."
    title="Delete project"
  >
    {#snippet trigger()}
      <Button variant="outline">Destructive</Button>
    {/snippet}
    {#snippet actions()}
      <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
      <AlertDialog.CloseTrigger>
        <AlertDialog.Action variant="destructive">Delete project</AlertDialog.Action>
      </AlertDialog.CloseTrigger>
    {/snippet}
  </AlertDialog>
</div>
