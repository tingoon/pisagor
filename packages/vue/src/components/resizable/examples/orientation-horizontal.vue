<script lang="ts" setup>
import { cn } from "@pisagor/utils";
import { Resizable } from "..";

function _frameClass(heightClass = "h-96") {
  return cn("mx-auto w-full max-w-4xl", heightClass);
}

function _panelClassName(
  orientation: "horizontal" | "vertical" = "horizontal",
) {
  return cn(
    "flex items-center justify-center bg-muted/30 text-sm",
    orientation === "vertical"
      ? "min-h-0 h-full w-full"
      : "min-w-0 h-full w-full",
  );
}
</script>
<template>
  <div :class="frameClass()">
    <Resizable
      class="size-full rounded-md border"
      orientation="horizontal"
      :default-size="[50, 50]"
      :panels="[{ id: '1' }, { id: '2' }]"
    >
      <Resizable.Panel id="1" :class="panelClassName()">Left</Resizable.Panel>
      <Resizable.ResizeTrigger id="1:2" with-handle />
      <Resizable.Panel id="2" :class="panelClassName()">Right</Resizable.Panel>
    </Resizable>
  </div>
</template>
