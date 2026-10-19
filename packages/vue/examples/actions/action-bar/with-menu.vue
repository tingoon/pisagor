<script lang="ts" setup>
import {
  PhArchive,
  PhCopy,
  PhDotsThree,
  PhTrash,
  PhX,
} from "@phosphor-icons/vue";
import { ActionBar, Button, DropdownMenu } from "@pisagor/vue";
</script>

<template>
  <ActionBar.Root>
    <ActionBar.Trigger as-child>
      <Button variant="outline">Open</Button>
    </ActionBar.Trigger>
    <Teleport to="body">
      <ActionBar.Positioner>
        <ActionBar.Content aria-label="Bulk actions">
          <ActionBar.Value :count="3" />
          <ActionBar.Separator />
          <ActionBar.Body>
            <DropdownMenu.Root :positioning="{ placement: 'top' }">
              <DropdownMenu.Trigger as-child>
                <Button variant="ghost">
                  <PhDotsThree />
                  <span class="max-sm:sr-only">More</span>
                </Button>
              </DropdownMenu.Trigger>
              <Teleport to="body">
                <DropdownMenu.Positioner>
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
                </DropdownMenu.Positioner>
              </Teleport>
            </DropdownMenu.Root>
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
