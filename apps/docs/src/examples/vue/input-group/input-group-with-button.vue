<script lang="ts">
import source from "./input-group-with-button.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { InputGroup } from "@pisagor/vue";
</script>

<template>
  <InputGroup>
    <InputGroup.Input placeholder="Your email" type="email" />
    <InputGroup.Addon align="inline-end">
      <InputGroup.Button size="xs" type="button" variant="ghost">
        Subscribe
      </InputGroup.Button>
    </InputGroup.Addon>
  </InputGroup>
</template>
