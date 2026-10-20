<script lang="ts" setup>
import { PhMapPin } from "@phosphor-icons/vue";
import { Avatar, Button, HoverCard } from "@pisagor/vue";
</script>

<template>
  <HoverCard :close-delay="300" :open-delay="200">
    <template #trigger>
      <Button variant="link">Hover here</Button>
    </template>
    <div class="flex gap-2">
      <Avatar fallback="JD" />
      <div class="flex flex-col gap-2">
        <a
          class="text-sm font-medium underline underline-offset-4"
          href="https://example.com/profile/jane.doe"
          rel="noopener"
          target="_blank"
        >
          @jane.doe
        </a>
        <p class="text-muted-foreground text-sm">Frontend Developer</p>
        <p class="text-muted-foreground flex items-center gap-1 text-xs">
          <PhMapPin class="size-4" />
          Joined in 2016
        </p>
      </div>
    </div>
  </HoverCard>
</template>
