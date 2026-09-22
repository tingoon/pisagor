<script setup lang="ts">
import { Button } from "@pisagor/vue";
import { HoverCard } from "..";
</script>

<template>
        <HoverCard disabled>
          <HoverCard.Trigger as-child>
            <Button variant="link">Hover here</Button>
          </HoverCard.Trigger>
          <HoverCard.Content>IT WILL NOT OPEN</HoverCard.Content>
        </HoverCard>
  
</template>
