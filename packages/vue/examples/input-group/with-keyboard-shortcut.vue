<script lang="ts" setup>
import { InputGroup, Kbd } from "@pisagor/vue";
</script>

<template>
  <InputGroup>
    <InputGroup.Input placeholder="Search..." />
    <InputGroup.Addon align="inline-end">
      <Kbd>⌘K</Kbd>
    </InputGroup.Addon>
  </InputGroup>
</template>
