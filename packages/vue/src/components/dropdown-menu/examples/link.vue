<script lang="ts" setup>
import { PhArrowSquareOut } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { DropdownMenu } from "..";
</script>

<template>
  <DropdownMenu>
    <DropdownMenu.Trigger as-child>
      <Button variant="outline">Open</Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-40">
      <DropdownMenu.Item as-child value="docs">
        <a href="https://example.com/docs" rel="noopener noreferrer" target="_blank">
          External link
          <DropdownMenu.Shortcut>
            <PhArrowSquareOut />
          </DropdownMenu.Shortcut>
        </a>
      </DropdownMenu.Item>
      <DropdownMenu.Item as-child value="components">
        <a href="/docs/components">View docs</a>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu>
</template>
