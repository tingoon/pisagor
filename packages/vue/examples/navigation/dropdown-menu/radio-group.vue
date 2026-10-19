<script lang="ts" setup>
import { PhCheck } from "@phosphor-icons/vue";
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
          <DropdownMenu.RadioItemGroup value="dark">
            <DropdownMenu.RadioItem value="light">
              <DropdownMenu.ItemIndicator>
                <PhCheck />
              </DropdownMenu.ItemIndicator>
              <DropdownMenu.ItemText>Light</DropdownMenu.ItemText>
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="dark">
              <DropdownMenu.ItemIndicator>
                <PhCheck />
              </DropdownMenu.ItemIndicator>
              <DropdownMenu.ItemText>Dark</DropdownMenu.ItemText>
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="system">
              <DropdownMenu.ItemIndicator>
                <PhCheck />
              </DropdownMenu.ItemIndicator>
              <DropdownMenu.ItemText>System</DropdownMenu.ItemText>
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioItemGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Positioner>
    </Teleport>
  </DropdownMenu.Root>
</template>
