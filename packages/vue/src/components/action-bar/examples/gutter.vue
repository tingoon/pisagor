<script setup lang="ts">
import { PhArchive, PhDownload, PhPencilSimple, PhTrash, PhX } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { ref } from "vue";
import { ActionBar } from "..";

const isOpen = ref(false);
const gutters = ["24px", "32px"] as const;
</script>

<template>
        <div>
          <div class="flex flex-wrap gap-2">
            <Button
              v-for="value in gutters"
              :key="value"
              @click="select(value)"
              :variant="gutter === value && isOpen ? 'secondary' : 'outline'"
            >
              Gutter {{ value }}
            </Button>
          </div>
          <ActionBar
            @open-change="(next) => (isOpen = next)"
            :open="isOpen"
            :positioning="{ gutter, placement: 'bottom' }"
          >
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
        </div>
  
</template>
