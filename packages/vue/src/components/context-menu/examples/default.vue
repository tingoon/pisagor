<script setup lang="ts">
import { PhCopy, PhPencil, PhTrash } from "@phosphor-icons/vue";
import { ContextMenu } from "..";
</script>

<template>
        <ContextMenu>
          <ContextMenu.ContextTrigger class="flex h-32 w-64 items-center justify-center rounded-lg border border-dashed text-sm">
            Right click here
          </ContextMenu.ContextTrigger>
          <ContextMenu.Content class="w-48">
            <ContextMenu.Item value="edit"><PhPencil /> Edit</ContextMenu.Item>
            <ContextMenu.Item value="copy"><PhCopy /> Copy</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item value="delete" variant="destructive"><PhTrash /> Delete</ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu>
  
</template>
