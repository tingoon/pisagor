<script lang="ts" setup>
import { PhArrowLeft, PhDotsThree } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { ButtonGroup } from "..";
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
