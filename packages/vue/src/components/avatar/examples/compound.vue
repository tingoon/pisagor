<script setup lang="ts">
import { Avatar, AvatarGroup } from "..";

const users = [
  { name: "Colm Tuite", src: "https://i.pravatar.cc/150?u=a" },
  { name: "Christian", src: "https://i.pravatar.cc/150?u=b" },
  { name: "Pedro", src: "https://i.pravatar.cc/150?u=c" },
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
        </AvatarGroup.Root>
</template>
