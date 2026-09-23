<script lang="ts" setup >
import { PhCopy, PhPencil, PhTrash } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { DropdownMenu } from "..";
</script>

<template>
        <DropdownMenu>
          <DropdownMenu.Trigger as-child>
            <Button variant="outline">Open</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content class="w-40">
            <DropdownMenu.Item value="edit">
              <PhPencil />
              Edit
            </DropdownMenu.Item>
            <DropdownMenu.Item value="duplicate">
              <PhCopy />
              Duplicate
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item value="delete" variant="destructive">
              <PhTrash />
              Delete
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
  
</template>
