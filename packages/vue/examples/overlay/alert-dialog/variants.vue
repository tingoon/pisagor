<script lang="ts" setup>
import { AlertDialog, Button } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <AlertDialog
      description="Do you want to allow the USB accessory to connect to this device?"
      title="Allow accessory to connect?"
    >
      <template #trigger>
        <Button variant="outline">Default</Button>
      </template>
      <template #actions>
        <AlertDialog.Cancel>Don't allow</AlertDialog.Cancel>
        <AlertDialog.Action variant="default">Allow</AlertDialog.Action>
      </template>
    </AlertDialog>
    <AlertDialog
      description="This action cannot be undone. This will permanently delete the project and remove all data."
      title="Delete project"
    >
      <template #trigger>
        <Button variant="outline">Destructive</Button>
      </template>
      <template #actions>
        <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
        <AlertDialog.Action variant="destructive">
          Delete project
        </AlertDialog.Action>
      </template>
    </AlertDialog>
  </div>
</template>
