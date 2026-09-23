<script lang="ts" setup >
import { Avatar } from "..";

const src = "https://randomuser.me/api/portraits/women/5.jpg";
</script>

<template>
        <div class="flex flex-wrap items-center gap-4">
          <Avatar alt="John Doe" fallback="JD" :src="src" />
          <Avatar alt="John Doe" fallback="JD" size="sm" :src="src" />
          <Avatar alt="John Doe" fallback="JD" size="lg" :src="src" />
        </div>
  
</template>
