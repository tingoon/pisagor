<script lang="ts" setup>
import { PhMagnifyingGlass } from "@phosphor-icons/vue";
import { InputGroup } from "../../../../../src/components/input-group";
</script>

<template>
  <InputGroup>
    <InputGroup.Input placeholder="Search..." />
    <InputGroup.Addon>
      <PhMagnifyingGlass />
    </InputGroup.Addon>
  </InputGroup>
</template>
