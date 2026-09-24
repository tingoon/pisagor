<script lang="ts" setup>
import { Prose } from "..";

const html = '<p>Trusted <strong>HTML</strong> content with a <a href="#">link</a>.</p>';
</script>

<template>
  <div class="w-112 overflow-hidden rounded-xl border bg-card p-6">
    <Prose :html="html" />
  </div>
</template>
