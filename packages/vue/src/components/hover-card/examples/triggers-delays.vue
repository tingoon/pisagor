<script lang="ts" setup >
import { PhMapPin } from "@phosphor-icons/vue";
import { Avatar, Button } from "@pisagor/vue";
import { HoverCard } from "..";
</script>

<template>
        <HoverCard :close-delay="300" :open-delay="200">
          <HoverCard.Trigger as-child>
            <Button variant="link">Hover here</Button>
          </HoverCard.Trigger>
          <HoverCard.Content>
            <div class="flex gap-2">
              <Avatar fallback="JD" />
              <div class="flex flex-col gap-2">
                <a
                  class="font-medium text-sm underline underline-offset-4"
                  href="https://example.com/profile/jane.doe"
                  rel="noopener"
                  target="_blank"
                >
                  @jane.doe
                </a>
                <p class="text-muted-foreground text-sm">Frontend Developer</p>
                <p class="flex items-center gap-1 text-muted-foreground text-xs">
                  <PhMapPin class="size-4" />
                  Joined in 2016
                </p>
              </div>
            </div>
          </HoverCard.Content>
        </HoverCard>
  
</template>
