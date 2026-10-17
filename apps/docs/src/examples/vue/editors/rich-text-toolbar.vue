<script lang="ts">
import source from "./rich-text-toolbar.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import {
  PhTextB,
  PhTextItalic,
  PhTextStrikethrough,
  PhTextUnderline,
} from "@phosphor-icons/vue";
import { Button, Tooltip } from "@pisagor/vue";
import { type Component, h } from "vue";
import { richTextToolbarBlock } from "#/recipes/blocks/editors";

const styles = richTextToolbarBlock();

const actions: { label: string; icon: Component }[] = [
  { icon: PhTextB, label: "Bold" },
  { icon: PhTextItalic, label: "Italic" },
  { icon: PhTextUnderline, label: "Underline" },
  { icon: PhTextStrikethrough, label: "Strikethrough" },
];

// `Tooltip` takes its trigger as a `children` VNode (closed API).
function trigger(action: (typeof actions)[number]) {
  return h(
    Button,
    {
      "aria-label": action.label,
      size: "icon-md",
      type: "button",
      variant: "outline",
    },
    () => h(action.icon, { "aria-hidden": true }),
  );
}
</script>

<template>
  <div :class="styles.root()">
    <Tooltip
      v-for="action in actions"
      :key="action.label"
      :children="trigger(action)"
      :content="action.label"
    />
  </div>
</template>
