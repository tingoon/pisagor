<script lang="ts" setup>
import { Avatar, AvatarGroup } from "..";

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
    <Avatar
      v-for="user in users"
      :key="user.src"
      :alt="user.name"
      :fallback="user.fallback"
      :src="user.src"
    />
    <AvatarGroup.Count>+5</AvatarGroup.Count>
  </AvatarGroup.Root>
</template>
