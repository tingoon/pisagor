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
      :default-size="[50, 50]"
      :panels="[{ id: '1', minSize: 10 }, { id: '2', minSize: 10 }]"
    >
      <Resizable.Panel :class="panelClassName()" id="1">One</Resizable.Panel>
      <Resizable.ResizeTrigger id="1:2" with-handle />
      <Resizable.Panel class="min-h-0 h-full min-w-0" id="2">
        <Resizable
          class="size-full"
          :default-size="[50, 50]"
          orientation="vertical"
          :panels="[{ id: '3', minSize: 10 }, { id: '4', minSize: 10 }]"
        >
          <Resizable.Panel :class="panelClassName('vertical')" id="3">Two</Resizable.Panel>
          <Resizable.ResizeTrigger id="3:4" with-handle />
          <Resizable.Panel :class="panelClassName('vertical')" id="4">Three</Resizable.Panel>
        </Resizable>
      </Resizable.Panel>
    </Resizable>
  </div>
</template>
