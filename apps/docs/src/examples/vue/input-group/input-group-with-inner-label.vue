<script lang="ts" setup>
import { PhInfo } from "@phosphor-icons/vue";
import { Button, Field, InputGroup, Tooltip } from "@pisagor/vue";
import { h } from "vue";
import { inputGroupWithInnerLabelBlock } from "#/recipes/blocks/input-group";

const styles = inputGroupWithInnerLabelBlock();

// `Tooltip` takes its trigger as a `children` VNode (closed API).
const infoTrigger = h(
  Button,
  {
    "aria-label": "More info",
    class: styles.info(),
    size: "icon-xs",
    type: "button",
    variant: "ghost",
  },
  () => h(PhInfo, { "aria-hidden": true }),
);
</script>

<template>
  <Field>
    <InputGroup>
      <InputGroup.Input placeholder="John Doe" />
      <InputGroup.Addon align="block-start">
        <Field.Label>Username</Field.Label>
        <Tooltip
          content="Enter a username for your account"
          :children="infoTrigger"
        />
      </InputGroup.Addon>
    </InputGroup>
  </Field>
</template>
