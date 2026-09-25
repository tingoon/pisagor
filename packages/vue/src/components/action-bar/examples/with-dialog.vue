<script lang="ts" setup>
import { PhTrash, PhX } from "@phosphor-icons/vue";
import { AlertDialog, Button } from "@pisagor/vue";
import { ActionBar } from "..";
</script>

<template>
  <ActionBar>
    <ActionBar.Trigger as-child>
      <Button variant="outline">Open</Button>
    </ActionBar.Trigger>
    <ActionBar.Content aria-label="Order bulk actions">
      <ActionBar.Value :count="3" />
      <ActionBar.Separator />
      <ActionBar.Body>
        <AlertDialog>
          <AlertDialog.Trigger as-child>
            <Button variant="destructive">
              <PhTrash />
              <span class="max-sm:sr-only">Delete</span>
            </Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Header
              description="This action cannot be undone."
              title="Delete selected orders?"
            />
            <AlertDialog.Footer>
              <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
              <AlertDialog.CloseTrigger as-child>
                <AlertDialog.Action variant="destructive"
                  >Delete</AlertDialog.Action
                >
              </AlertDialog.CloseTrigger>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </ActionBar.Body>
      <ActionBar.Separator />
      <ActionBar.Close as-child>
        <Button size="icon-md" variant="ghost">
          <PhX />
        </Button>
      </ActionBar.Close>
    </ActionBar.Content>
  </ActionBar>
</template>
