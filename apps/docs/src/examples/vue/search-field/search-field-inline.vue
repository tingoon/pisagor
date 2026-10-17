<script lang="ts">
import source from "./search-field-inline.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PhMagnifyingGlass } from "@phosphor-icons/vue";
import { Button, Field, Input } from "@pisagor/vue";
</script>

<template>
  <Field orientation="horizontal">
    <Input placeholder="Search..." />
    <Button aria-label="Search" size="icon-md" type="button">
      <PhMagnifyingGlass aria-hidden="true" />
    </Button>
  </Field>
</template>
