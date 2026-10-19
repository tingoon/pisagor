<script lang="ts" setup>
import { PhTrash, PhX } from "@phosphor-icons/vue";
import { ActionBar, AlertDialog, Button } from "@pisagor/vue";
</script>

<template>
  <ActionBar.Root>
    <ActionBar.Trigger as-child>
      <Button variant="outline">Open</Button>
    </ActionBar.Trigger>
    <Teleport to="body">
      <ActionBar.Positioner>
        <ActionBar.Content aria-label="Order bulk actions">
          <ActionBar.Value :count="3" />
          <ActionBar.Separator />
          <ActionBar.Body>
            <AlertDialog
              description="This action cannot be undone."
              title="Delete selected orders?"
            >
              <template #trigger>
                <Button variant="destructive">
                  <PhTrash />
                  <span class="max-sm:sr-only">Delete</span>
                </Button>
              </template>
              <template #actions>
                <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                <AlertDialog.Action variant="destructive"
                  >Delete</AlertDialog.Action
                >
              </template>
            </AlertDialog>
          </ActionBar.Body>
          <ActionBar.Separator />
          <ActionBar.Close as-child>
            <Button size="icon-md" variant="ghost">
              <PhX />
            </Button>
          </ActionBar.Close>
        </ActionBar.Content>
      </ActionBar.Positioner>
    </Teleport>
  </ActionBar.Root>
</template>
