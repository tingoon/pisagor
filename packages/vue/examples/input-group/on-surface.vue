<script lang="ts" setup>
import { PhMagnifyingGlass } from "@phosphor-icons/vue";
import { InputGroup, Surface } from "@pisagor/vue";
</script>

<template>
  <Surface bordered padding="md" variant="default">
    <div class="flex flex-col gap-2">
      <InputGroup variant="primary">
        <InputGroup.Input placeholder="Primary" />
        <InputGroup.Addon>
          <PhMagnifyingGlass aria-hidden="true" />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup variant="secondary">
        <InputGroup.Input placeholder="Secondary" />
        <InputGroup.Addon>
          <PhMagnifyingGlass aria-hidden="true" />
        </InputGroup.Addon>
      </InputGroup>
    </div>
  </Surface>
</template>
