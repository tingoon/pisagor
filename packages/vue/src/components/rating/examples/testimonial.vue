<script lang="ts" setup>
import { Avatar, Card } from "@pisagor/vue";
import { Rating } from "..";
</script>

<template>
  <Card>
    <Card.Content class="space-y-2">
      <Rating class="**:data-[slot=rating-item-indicator]:size-4" read-only :default-value="5" />
      <blockquote class="text-muted-foreground">
        &ldquo;This completely changed our workflow. Fast, reliable, and the team loves it. Would
        recommend to anyone.&rdquo;
      </blockquote>
      <div class="flex gap-2">
        <Avatar alt="jane.doe@example.com" fallback="JD" size="lg" />
        <div>
          <Card.Title class="font-medium text-sm">Jane Doe</Card.Title>
          <Card.Description>Frontend Developer</Card.Description>
        </div>
      </div>
    </Card.Content>
  </Card>
</template>
