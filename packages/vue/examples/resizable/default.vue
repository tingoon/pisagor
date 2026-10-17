<script lang="ts">
import source from "./default.vue?raw";
export { source };
</script>

<script lang="ts" setup>
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
      :default-size="[50, 50]"
      :panels="[
        { id: '1', minSize: 10 },
        { id: '2', minSize: 10 },
      ]"
    >
      <Resizable.Panel id="1" :class="panelClassName()">One</Resizable.Panel>
      <Resizable.ResizeTrigger id="1:2" with-handle />
      <Resizable.Panel class="h-full min-h-0 min-w-0" id="2">
        <Resizable
          class="size-full"
          orientation="vertical"
          :default-size="[50, 50]"
          :panels="[
            { id: '3', minSize: 10 },
            { id: '4', minSize: 10 },
          ]"
        >
          <Resizable.Panel id="3" :class="panelClassName('vertical')">
            Two
          </Resizable.Panel>
          <Resizable.ResizeTrigger id="3:4" with-handle />
          <Resizable.Panel id="4" :class="panelClassName('vertical')">
            Three
          </Resizable.Panel>
        </Resizable>
      </Resizable.Panel>
    </Resizable>
  </div>
</template>
