<script lang="ts" setup>
import { PhArrowLeft, PhDotsThree } from "@phosphor-icons/vue";
import { Button, ButtonGroup } from "@pisagor/vue";
</script>

<template>
  <ButtonGroup>
    <ButtonGroup class="hidden sm:flex">
      <Button aria-label="Go back" size="icon-md" variant="outline">
        <PhArrowLeft />
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button variant="outline">Archive</Button>
      <Button variant="outline">Report</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button variant="outline">Snooze</Button>
      <Button aria-label="More options" size="icon-md" variant="outline">
        <PhDotsThree />
      </Button>
    </ButtonGroup>
  </ButtonGroup>
</template>
