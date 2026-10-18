<script lang="ts" setup>
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import { Button, ButtonGroup } from "@pisagor/vue";
</script>

<template>
  <ButtonGroup>
    <Button size="icon-md" variant="secondary">
      <PhMinus />
    </Button>
    <ButtonGroup.Separator />
    <Button size="icon-md" variant="secondary">
      <PhPlus />
    </Button>
  </ButtonGroup>
</template>
