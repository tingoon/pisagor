<script lang="ts" setup>
import { PhDotsSixVertical } from "@phosphor-icons/vue";
import { cn } from "@pisagor/utils";
import { Resizable } from "@pisagor/vue";

function frameClass(heightClass = "h-96") {
  return cn("mx-auto w-full max-w-4xl", heightClass);
}

function panelClassName(orientation: "horizontal" | "vertical" = "horizontal") {
  return cn(
    "bg-muted/30 flex items-center justify-center text-sm",
    orientation === "vertical"
      ? "h-full min-h-0 w-full"
      : "h-full w-full min-w-0",
  );
}
</script>
<template>
  <div :class="frameClass()">
    <Resizable
      class="size-full rounded-md border"
      :default-size="[20, 60, 20]"
      :panels="[
        { id: '1', minSize: 20 },
        { id: '2', minSize: 40 },
        { id: '3', minSize: 20 },
      ]"
    >
      <Resizable.Panel id="1" :class="panelClassName()">Left</Resizable.Panel>
      <Resizable.ResizeTrigger id="1:2">
        <Resizable.ResizeTriggerHandle>
          <PhDotsSixVertical class="size-2.5" />
        </Resizable.ResizeTriggerHandle>
      </Resizable.ResizeTrigger>
      <Resizable.Panel id="2" :class="panelClassName()">Center</Resizable.Panel>
      <Resizable.ResizeTrigger id="2:3">
        <Resizable.ResizeTriggerHandle>
          <PhDotsSixVertical class="size-2.5" />
        </Resizable.ResizeTriggerHandle>
      </Resizable.ResizeTrigger>
      <Resizable.Panel id="3" :class="panelClassName()">Right</Resizable.Panel>
    </Resizable>
  </div>
</template>
