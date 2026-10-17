<script lang="ts" setup>
import { PhHeart } from "@phosphor-icons/vue";
import { Rating } from "@pisagor/vue";
import { h } from "vue";

const heartIcon = h(PhHeart);
</script>

<template>
  <Rating allow-half class="text-destructive" :icon="heartIcon" />
</template>
