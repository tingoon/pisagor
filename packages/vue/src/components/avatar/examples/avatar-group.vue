<script lang="ts" setup>
import { AvatarGroup } from "..";

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
  <AvatarGroup :max="4" :users="users" />
</template>
