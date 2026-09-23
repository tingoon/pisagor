<script lang="ts" setup >
import { Kbd } from "@pisagor/vue";
import { InputGroup } from "..";
</script>

<template>
        <InputGroup>
          <InputGroup.Input placeholder="Search..." />
          <InputGroup.Addon align="inline-end">
            <Kbd>⌘K</Kbd>
          </InputGroup.Addon>
        </InputGroup>
  
</template>
