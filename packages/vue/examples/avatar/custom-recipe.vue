<script lang="ts" setup>
import { avatarRecipe } from "@pisagor/recipes";
import { Avatar } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandAvatarRecipe = tv({
  extend: avatarRecipe,
  slots: {
    base: "ring-2 ring-emerald-500 ring-offset-2 ring-offset-background",
    fallback:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});
</script>

<template>
  <Avatar
    alt="Jane Doe"
    fallback="JD"
    src="https://randomuser.me/api/portraits/women/5.jpg"
    :recipe="brandAvatarRecipe"
  />
</template>
