<script lang="ts" setup>
import { PhCheck, PhMinus } from "@phosphor-icons/vue";
import { Checkbox } from "@pisagor/vue";
</script>

<template>
  <Checkbox.Root default-checked>
    <Checkbox.Control>
      <Checkbox.Indicator>
        <PhCheck />
      </Checkbox.Indicator>
      <Checkbox.Indicator indeterminate>
        <PhMinus />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
</template>
