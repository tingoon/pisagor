<script lang="ts" setup>
import { LinkBox } from "..";
</script>

<template>
  <LinkBox as-child>
    <article class="rounded-xl border p-4">
      <span class="text-muted-foreground text-sm">
        <time datetime="2026-03-03T15:30:00Z">3 days ago</time>
      </span>
      <h2 class="my-2 font-medium text-lg">
        <LinkBox.Overlay href="https://example.com/articles/a11y-link-overlay">
          A11y Link Overlay
        </LinkBox.Overlay>
      </h2>
      <p class="mb-3 text-muted-foreground text-sm">
        Learn how to construct a screen reader friendly link overlay for accessibility and
        usability.
      </p>
      <a href="https://example.com/articles/a11y-link-overlay">Read the full article</a>
    </article>
  </LinkBox>
</template>
