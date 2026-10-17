<script lang="ts">
import source from "./search-field-button-group.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PhMagnifyingGlass } from "@phosphor-icons/vue";
import { Button, InputGroup } from "@pisagor/vue";
</script>

<template>
  <InputGroup>
    <InputGroup.Input placeholder="Search..." type="search" />
    <InputGroup.Addon align="inline-end">
      <Button aria-label="Search" type="button" variant="outline">
        <PhMagnifyingGlass aria-hidden="true" />
      </Button>
    </InputGroup.Addon>
  </InputGroup>
</template>
