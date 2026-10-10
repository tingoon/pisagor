<script lang="ts" setup>
import { resizableRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { Resizable } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandResizableRecipe = tv({
  extend: resizableRecipe,
  slots: {
    resizeTrigger:
      "hover:bg-emerald-500/40 focus-visible:bg-emerald-500/40 active:bg-emerald-500",
  },
  variants: {},
});

const panelClass = (orientation: "horizontal" | "vertical" = "horizontal") =>
  cn(
    "flex h-full w-full items-center justify-center bg-muted/30 text-sm",
    orientation === "vertical" ? "min-h-0" : "min-w-0",
  );
</script>

<template>
  <div class="h-96 w-full">
    <Resizable
      class="size-full rounded-md border"
      :default-size="[50, 50]"
      :panels="[
        { id: '1', minSize: 10 },
        { id: '2', minSize: 10 },
      ]"
      :recipe="brandResizableRecipe"
    >
      <Resizable.Panel id="1" :class="panelClass()">One</Resizable.Panel>
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
          <Resizable.Panel id="3" :class="panelClass('vertical')">
            Two
          </Resizable.Panel>
          <Resizable.ResizeTrigger id="3:4" with-handle />
          <Resizable.Panel id="4" :class="panelClass('vertical')">
            Three
          </Resizable.Panel>
        </Resizable>
      </Resizable.Panel>
    </Resizable>
  </div>
</template>
