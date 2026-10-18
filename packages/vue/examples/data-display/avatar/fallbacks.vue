<script lang="ts" setup>
import { PhUser } from "@phosphor-icons/vue";
import { Avatar } from "@pisagor/vue";
import { h } from "vue";

const userIcon = h(PhUser);
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Avatar alt="Jane Doe" fallback="JD" />
    <Avatar alt="John Doe" fallback="JD" />
    <Avatar alt="Guest user" :fallback="userIcon" />
  </div>
</template>
