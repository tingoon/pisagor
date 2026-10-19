<script lang="ts" setup>
import { PhArchive, PhPaperPlaneTilt } from "@phosphor-icons/vue";
import { Button, DropdownMenu } from "@pisagor/vue";
</script>

<template>
  <DropdownMenu.Root>
    <DropdownMenu.Trigger as-child>
      <Button variant="outline">Open</Button>
    </DropdownMenu.Trigger>
    <Teleport to="body">
      <DropdownMenu.Positioner>
        <DropdownMenu.Content class="w-40">
          <DropdownMenu.ItemGroup>
            <DropdownMenu.Item value="forward">
              <PhPaperPlaneTilt />
              Forward
              <DropdownMenu.Shortcut>⌘F</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
            <DropdownMenu.Item value="archive">
              <PhArchive />
              Archive
            </DropdownMenu.Item>
          </DropdownMenu.ItemGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Positioner>
    </Teleport>
  </DropdownMenu.Root>
</template>
