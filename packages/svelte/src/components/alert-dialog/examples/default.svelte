<script lang="ts">
import { AlertDialog } from "../index";
</script>

<AlertDialog.Root>
  <AlertDialog.Trigger>Open alert</AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Header>
      <AlertDialog.Title>Are you sure?</AlertDialog.Title>
      <AlertDialog.Description> This action cannot be undone. </AlertDialog.Description>
    </AlertDialog.Header>
    <AlertDialog.Footer>
      <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
      <AlertDialog.Action variant="destructive">Delete</AlertDialog.Action>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog.Root>
