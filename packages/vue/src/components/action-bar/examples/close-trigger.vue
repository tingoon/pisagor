<script lang="ts" setup>
import {
  PhArchive,
  PhDownload,
  PhPencilSimple,
  PhTrash,
  PhX,
} from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { ref } from "vue";
import { ActionBar } from "..";

const isOpen = ref(false);
</script>

<template>
  <ActionBar :open="isOpen" @open-change="(next) => (isOpen = next)">
    <ActionBar.Trigger as-child>
      <Button variant="outline">Open</Button>
    </ActionBar.Trigger>
    <ActionBar.Content aria-label="Bulk actions">
      <ActionBar.Value :count="3" />
      <ActionBar.Separator />
      <ActionBar.Body>
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
