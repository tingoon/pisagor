<script lang="ts" setup>
import { PhPlay, PhSkipBack, PhSkipForward } from "@phosphor-icons/vue";
import { Button, ButtonGroup } from "@pisagor/vue";
</script>

<template>
  <ButtonGroup>
    <Button size="icon-md" variant="outline">
      <PhSkipBack />
    </Button>
    <Button size="icon-md" variant="outline">
      <PhPlay />
    </Button>
    <Button size="icon-md" variant="outline">
      <PhSkipForward />
    </Button>
  </ButtonGroup>
</template>
