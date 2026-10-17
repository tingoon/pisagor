<script lang="ts">
import source from "./invalid.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { InputGroup } from "@pisagor/vue";
</script>

<template>
  <InputGroup>
    <InputGroup.Addon>
      <InputGroup.Text>https://</InputGroup.Text>
    </InputGroup.Addon>
    <InputGroup.Input aria-invalid class="pl-1!" placeholder="example.com" />
  </InputGroup>
</template>
