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
      :default-size="[25, 75]"
      :panels="[
        { collapsedSize: 0, collapsible: true, id: 'sidebar', minSize: 15 },
        { id: 'main', minSize: 40 },
      ]"
    >
      <Resizable.Panel :class="panelClassName()" id="sidebar">Sidebar</Resizable.Panel>
      <Resizable.ResizeTrigger id="sidebar:main" with-handle />
      <Resizable.Panel :class="panelClassName()" id="main">Main</Resizable.Panel>
    </Resizable>
  </div>
</template>
