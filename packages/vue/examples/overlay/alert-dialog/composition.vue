<script lang="ts" setup>
import { AlertDialog, Button } from "@pisagor/vue";
</script>

<template>
  <AlertDialog.Root>
    <AlertDialog.Trigger as-child>
      <Button variant="outline">Open</Button>
    </AlertDialog.Trigger>
    <Teleport to="body">
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
    </Teleport>
  </AlertDialog.Root>
</template>
