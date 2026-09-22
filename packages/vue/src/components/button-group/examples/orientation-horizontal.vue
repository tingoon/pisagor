<script setup lang="ts">
import { PhPlay, PhSkipBack, PhSkipForward } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { ButtonGroup } from "..";
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
