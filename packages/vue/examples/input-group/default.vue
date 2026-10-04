<script lang="ts" setup>
import { PhMagnifyingGlass } from "@phosphor-icons/vue";
import { InputGroup } from "@pisagor/vue";
</script>

<template>
  <InputGroup>
    <InputGroup.Input placeholder="Search..." />
    <InputGroup.Addon>
      <PhMagnifyingGlass />
    </InputGroup.Addon>
  </InputGroup>
</template>
