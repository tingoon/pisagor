<script lang="ts" setup>
import { LinkBox } from "..";
</script>

<template>
  <LinkBox as-child>
    <article class="rounded-xl border p-4">
      <h2 class="font-medium text-lg">
        <LinkBox.Overlay href="https://example.com">Clickable card title</LinkBox.Overlay>
      </h2>
      <p class="text-muted-foreground text-sm">
        The overlay expands the title link to cover the card for a larger click target.
      </p>
    </article>
  </LinkBox>
</template>
