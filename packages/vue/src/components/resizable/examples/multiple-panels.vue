<script setup lang="ts">
import { cn } from "@pisagor/utils";
import { Resizable } from "..";

function _frameClass(heightClass = "h-96") {
  return cn("mx-auto w-full max-w-4xl", heightClass);
}

function _panelClassName(orientation: "horizontal" | "vertical" = "horizontal") {
  return cn(
    "flex items-center justify-center bg-muted/30 text-sm",
    orientation === "vertical" ? "min-h-0 h-full w-full" : "min-w-0 h-full w-full",
  );
}
</script>
<template>
  <div :class="frameClass()">
    <Resizable
      class="size-full rounded-md border"
      :default-size="[20, 60, 20]"
      :panels="[{ id: '1', minSize: 20 }, { id: '2', minSize: 40 }, { id: '3', minSize: 20 }]"
    >
      <Resizable.Panel :class="panelClassName()" id="1">Left</Resizable.Panel>
      <Resizable.ResizeTrigger id="1:2" with-handle />
      <Resizable.Panel :class="panelClassName()" id="2">Center</Resizable.Panel>
      <Resizable.ResizeTrigger id="2:3" with-handle />
      <Resizable.Panel :class="panelClassName()" id="3">Right</Resizable.Panel>
    </Resizable>
  </div>
</template>
