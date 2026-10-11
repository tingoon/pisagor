<script lang="ts" setup>
import { Badge, Field, Input } from "@pisagor/vue";
import { labelAccessoryBlock } from "#/recipes/blocks/field";

const styles = labelAccessoryBlock();
</script>

<template>
  <Field>
    <Field.Label :class="styles.label()">
      Webhook URL
      <Badge variant="info" :class="styles.badge()">Beta</Badge>
    </Field.Label>
    <Input placeholder="https://example.com/webhook" />
  </Field>
</template>
