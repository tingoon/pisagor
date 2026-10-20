<script lang="ts" setup>
import {
  PhArchive,
  PhDownload,
  PhPencilSimple,
  PhTrash,
} from "@phosphor-icons/vue";
import { ActionBar, Button } from "@pisagor/vue";
</script>

<template>
  <ActionBar aria-label="Bulk actions" :count="3">
    <template #trigger>
      <Button variant="outline">Open</Button>
    </template>
    <Button variant="ghost">
      <PhPencilSimple />
      <span class="max-sm:sr-only">Edit</span>
    </Button>
    <Button variant="ghost">
      <PhDownload />
      <span class="max-sm:sr-only">Export</span>
    </Button>
    <Button variant="ghost">
      <PhArchive />
      <span class="max-sm:sr-only">Archive</span>
    </Button>
    <ActionBar.Separator />
    <Button variant="destructive">
      <PhTrash />
      <span class="max-sm:sr-only">Delete</span>
    </Button>
  </ActionBar>
</template>
