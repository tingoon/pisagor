<script lang="ts" setup>
import { InputGroup, Spinner } from "@pisagor/vue";
</script>

<template>
  <InputGroup data-disabled>
    <InputGroup.Input disabled placeholder="Loading..." />
    <InputGroup.Addon align="inline-end">
      <Spinner aria-label="Loading" />
    </InputGroup.Addon>
  </InputGroup>
</template>
