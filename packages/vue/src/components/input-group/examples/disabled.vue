<script lang="ts" setup>
import { PhMagnifyingGlass } from "@phosphor-icons/vue";
import { InputGroup } from "..";
</script>

<template>
  <InputGroup>
    <InputGroup.Input disabled placeholder="Search..." />
    <InputGroup.Addon>
      <PhMagnifyingGlass aria-hidden="true" />
    </InputGroup.Addon>
  </InputGroup>
</template>
