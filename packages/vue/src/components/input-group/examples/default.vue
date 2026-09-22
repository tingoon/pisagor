<script setup lang="ts">
import { PhMagnifyingGlass } from "@phosphor-icons/vue";
import { InputGroup } from "..";
</script>

<template>
        <InputGroup>
          <InputGroup.Input placeholder="Search..." />
          <InputGroup.Addon>
            <PhMagnifyingGlass />
          </InputGroup.Addon>
        </InputGroup>
  
</template>
