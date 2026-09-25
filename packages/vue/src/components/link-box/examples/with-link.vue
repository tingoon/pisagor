<script lang="ts" setup>
import { LinkBox } from "..";
</script>

<template>
  <LinkBox as-child>
    <article class="flex flex-col gap-2 rounded-xl border p-4">
      <LinkBox.Overlay as-child>
        <a href="https://example.com/blog/simple-post">Blog post title</a>
      </LinkBox.Overlay>
      <p class="text-muted-foreground text-sm">A sample blog post.</p>
      <a
        class="text-primary underline"
        href="https://example.com/blog/simple-post/details"
      >
        Inner link
      </a>
    </article>
  </LinkBox>
</template>
