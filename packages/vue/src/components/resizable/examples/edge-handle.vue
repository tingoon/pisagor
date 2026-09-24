<script lang="ts" setup>
import { cn } from "@pisagor/utils";
import { ref } from "vue";
import { Resizable } from "..";

function _frameClass(heightClass = "h-96") {
  return cn("mx-auto w-full max-w-4xl", heightClass);
}

const width = ref(256);
function _onWidthChange(next: number) {
  width.value = next;
}
const onWidthChange = setWidth;
</script>

<template>
  <div :class="frameClass()">
    <div class="flex size-full overflow-hidden rounded-md border">
      <aside
        class="relative flex shrink-0 flex-col overflow-visible border-e bg-muted text-muted-foreground"
        :style="{ width: `${width}px` }"
      >
        <Resizable.EdgeHandle
          handle-position="top"
          label="Resize panel"
          placement="start"
          :on-resize-change="onWidthChange"
          :on-width-change="onWidthChange"
          :width="width"
        />
        <div class="flex flex-1 items-center justify-center p-4 text-sm">Panel</div>
      </aside>
      <div class="flex min-w-0 flex-1 items-center justify-center bg-muted/30 text-sm">Main</div>
    </div>
  </div>
</template>
