<script lang="ts" setup>
import {
  PhArchive,
  PhDownload,
  PhPencilSimple,
  PhTrash,
  PhX,
} from "@phosphor-icons/vue";
import { actionBarRecipe } from "@pisagor/recipes";
import { ActionBar, Button } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandActionBarRecipe = tv({
  extend: actionBarRecipe,
  slots: { content: "border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950" },
  variants: {},
});
</script>

<template>
  <ActionBar :recipe="brandActionBarRecipe">
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
        <Button aria-label="Close" size="icon-md" variant="ghost">
          <PhX />
        </Button>
      </ActionBar.Close>
    </ActionBar.Content>
  </ActionBar>
</template>
