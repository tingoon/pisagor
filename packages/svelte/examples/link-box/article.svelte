<script module lang="ts">
  import source from "./article.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { LinkBox } from "@pisagor/svelte";
</script>

<LinkBox class="rounded-xl border p-4">
  <span class="text-muted-foreground text-sm">
    <time datetime="2026-03-03T15:30:00Z">3 days ago</time>
  </span>
  <h2 class="my-2 text-lg font-medium">
    <LinkBox.Overlay href="https://example.com/articles/a11y-link-overlay">
      A11y Link Overlay
    </LinkBox.Overlay>
  </h2>
  <p class="text-muted-foreground mb-3 text-sm">
    Learn how to construct a screen reader friendly link overlay for
    accessibility and usability.
  </p>
  <a href="https://example.com/articles/a11y-link-overlay">
    Read the full article
  </a>
</LinkBox>
