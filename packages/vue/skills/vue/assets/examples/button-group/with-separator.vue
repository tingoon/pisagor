<script lang="ts" setup>
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { ButtonGroup } from "../../../../../src/components/button-group";
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
