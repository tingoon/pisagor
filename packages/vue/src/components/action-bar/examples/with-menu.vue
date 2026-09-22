<script setup lang="ts">
import { PhArchive, PhCopy, PhDotsThree, PhTrash, PhX } from "@phosphor-icons/vue";
import { Button, DropdownMenu } from "@pisagor/vue";
import { ActionBar } from "..";
</script>

<template>
        <ActionBar>
          <ActionBar.Trigger as-child>
            <Button variant="outline">Open</Button>
          </ActionBar.Trigger>
          <ActionBar.Content aria-label="Bulk actions">
            <ActionBar.Value :count="3" />
            <ActionBar.Separator />
            <ActionBar.Body>
              <DropdownMenu :positioning="{ placement: 'top' }">
                <DropdownMenu.Trigger as-child>
                  <Button variant="ghost">
                    <PhDotsThree />
                    <span class="max-sm:sr-only">More</span>
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item value="archive">
                    <PhArchive />
                    Archive
                  </DropdownMenu.Item>
                  <DropdownMenu.Item value="duplicate">
                    <PhCopy />
                    Duplicate
                  </DropdownMenu.Item>
                  <DropdownMenu.Item value="delete" variant="destructive">
                    <PhTrash />
                    Delete
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu>
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
