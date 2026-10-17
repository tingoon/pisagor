<script lang="ts">
import source from "./compound.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Avatar, AvatarGroup } from "@pisagor/vue";

const users = [
  {
    fallback: "JD",
    name: "Jane Doe",
    src: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    fallback: "JD",
    name: "John Doe",
    src: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    fallback: "JD",
    name: "Jane Doe",
    src: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    fallback: "JD",
    name: "John Doe",
    src: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];
</script>

<template>
  <AvatarGroup.Root>
    <Avatar.Root v-for="user in users" :key="user.src">
      <Avatar.Image :alt="user.name" :src="user.src" />
      <Avatar.Fallback>{{ user.fallback }}</Avatar.Fallback>
    </Avatar.Root>
  </AvatarGroup.Root>
</template>
