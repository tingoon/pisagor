<script setup lang="ts">
import { Avatar } from "..";
</script>

<template>
        <div class="flex flex-wrap items-end gap-2">
          <Avatar
            alt="Jane Doe"
            fallback="JD"
            size="sm"
            src="https://randomuser.me/api/portraits/women/5.jpg"
          />
          <Avatar
            alt="Jane Doe"
            fallback="JD"
            size="md"
            src="https://randomuser.me/api/portraits/women/5.jpg"
          />
          <Avatar
            alt="Jane Doe"
            fallback="JD"
            size="lg"
            src="https://randomuser.me/api/portraits/women/5.jpg"
          />
          <Avatar
            alt="Jane Doe"
            class="size-16"
            fallback="JD"
            src="https://randomuser.me/api/portraits/women/5.jpg"
          />
        </div>
  
</template>
