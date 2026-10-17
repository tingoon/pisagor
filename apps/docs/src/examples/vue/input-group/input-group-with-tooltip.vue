<script lang="ts">
import source from "./input-group-with-tooltip.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PhInfo } from "@phosphor-icons/vue";
import { Button, InputGroup, Tooltip } from "@pisagor/vue";
import { h } from "vue";

// `Tooltip` takes its trigger as a `children` VNode (closed API).
const infoTrigger = h(
  Button,
  {
    "aria-label": "More info",
    size: "icon-xs",
    type: "button",
    variant: "ghost",
  },
  () => h(PhInfo, { "aria-hidden": true }),
);
</script>

<template>
  <InputGroup>
    <InputGroup.Input placeholder="Enter value" />
    <InputGroup.Addon align="inline-end">
      <Tooltip
        content="Additional information about this field"
        :children="infoTrigger"
      />
    </InputGroup.Addon>
  </InputGroup>
</template>
