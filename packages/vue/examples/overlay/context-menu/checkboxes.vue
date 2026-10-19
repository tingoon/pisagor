<script lang="ts" setup>
import { PhCheck } from "@phosphor-icons/vue";
import { ContextMenu } from "@pisagor/vue";
import { ref } from "vue";

const showGrid = ref(true);
const zoom = ref("100");
</script>

<template>
  <ContextMenu.Root>
    <ContextMenu.ContextTrigger
      class="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm"
    >
      Right-click or long press here
    </ContextMenu.ContextTrigger>
    <Teleport to="body">
      <ContextMenu.Positioner>
        <ContextMenu.Content class="w-44">
          <ContextMenu.CheckboxItem value="grid" v-model:checked="showGrid">
            <ContextMenu.ItemIndicator>
              <PhCheck />
            </ContextMenu.ItemIndicator>
            <ContextMenu.ItemText>Show grid</ContextMenu.ItemText>
          </ContextMenu.CheckboxItem>
          <ContextMenu.Separator />
          <ContextMenu.RadioItemGroup v-model="zoom">
            <ContextMenu.ItemGroupLabel>Zoom</ContextMenu.ItemGroupLabel>
            <ContextMenu.RadioItem value="50">
              <ContextMenu.ItemIndicator>
                <PhCheck />
              </ContextMenu.ItemIndicator>
              <ContextMenu.ItemText>50%</ContextMenu.ItemText>
            </ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="100">
              <ContextMenu.ItemIndicator>
                <PhCheck />
              </ContextMenu.ItemIndicator>
              <ContextMenu.ItemText>100%</ContextMenu.ItemText>
            </ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="200">
              <ContextMenu.ItemIndicator>
                <PhCheck />
              </ContextMenu.ItemIndicator>
              <ContextMenu.ItemText>200%</ContextMenu.ItemText>
            </ContextMenu.RadioItem>
          </ContextMenu.RadioItemGroup>
        </ContextMenu.Content>
      </ContextMenu.Positioner>
    </Teleport>
  </ContextMenu.Root>
</template>
