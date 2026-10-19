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
          <DropdownMenu.ItemGroup>
            <DropdownMenu.ItemGroupLabel>
              Appearance
            </DropdownMenu.ItemGroupLabel>
            <DropdownMenu.CheckboxItem checked value="save">
              <DropdownMenu.ItemIndicator>
                <PhCheck />
              </DropdownMenu.ItemIndicator>
              <DropdownMenu.ItemText>Status bar</DropdownMenu.ItemText>
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem value="notifications" :checked="false">
              <DropdownMenu.ItemIndicator>
                <PhCheck />
              </DropdownMenu.ItemIndicator>
              <DropdownMenu.ItemText>Activity bar</DropdownMenu.ItemText>
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem
              disabled
              value="dark-mode"
              :checked="false"
            >
              <DropdownMenu.ItemIndicator>
                <PhCheck />
              </DropdownMenu.ItemIndicator>
              <DropdownMenu.ItemText>Panel</DropdownMenu.ItemText>
            </DropdownMenu.CheckboxItem>
          </DropdownMenu.ItemGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Positioner>
    </Teleport>
  </DropdownMenu.Root>
</template>
