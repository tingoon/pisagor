<script lang="ts" setup>
import { ContextMenu } from "@pisagor/vue";
import { ref } from "vue";

const showGrid = ref(true);
const zoom = ref("100");
</script>

<template>
  <ContextMenu>
    <ContextMenu.ContextTrigger
      class="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm"
    >
      Right-click or long press here
    </ContextMenu.ContextTrigger>
    <ContextMenu.Content class="w-44">
      <ContextMenu.CheckboxItem value="grid" v-model:checked="showGrid">
        Show grid
      </ContextMenu.CheckboxItem>
      <ContextMenu.Separator />
      <ContextMenu.RadioItemGroup v-model="zoom">
        <ContextMenu.ItemGroupLabel>Zoom</ContextMenu.ItemGroupLabel>
        <ContextMenu.RadioItem value="50">50%</ContextMenu.RadioItem>
        <ContextMenu.RadioItem value="100">100%</ContextMenu.RadioItem>
        <ContextMenu.RadioItem value="200">200%</ContextMenu.RadioItem>
      </ContextMenu.RadioItemGroup>
    </ContextMenu.Content>
  </ContextMenu>
</template>
