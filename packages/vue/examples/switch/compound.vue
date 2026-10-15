<script lang="ts" setup>
import { Field, Switch } from "@pisagor/vue";
</script>

<template>
  <Field class="flex-row items-center gap-2">
    <Switch.Root default-checked>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.HiddenInput />
    </Switch.Root>
    <Field.Label>Airplane mode</Field.Label>
  </Field>
</template>
