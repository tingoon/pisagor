<script setup lang="ts">
import { Avatar } from "..";

const src = "https://randomuser.me/api/portraits/women/5.jpg";
</script>

<template>
        <div class="flex flex-wrap items-center gap-4">
          <Avatar :src="src" alt="John Doe" fallback="JD" />
          <Avatar :src="src" alt="John Doe" fallback="JD" size="sm" />
          <Avatar :src="src" alt="John Doe" fallback="JD" size="lg" />
        </div>
  
</template>
