<script lang="ts">
import source from "./html.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Prose } from "@pisagor/vue";

const html =
  '<p>Trusted <strong>HTML</strong> content with a <a href="#">link</a>.</p>';
</script>

<template>
  <div class="bg-card w-112 overflow-hidden rounded-xl border p-6">
    <Prose :html="html" />
  </div>
</template>
