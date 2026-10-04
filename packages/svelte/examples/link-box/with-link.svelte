<script lang="ts">
import { LinkBox } from "@pisagor/svelte";
</script>

<LinkBox>
  {#snippet asChild(
    props,
  )}
    <article {...props()} class="flex flex-col gap-2 rounded-xl border p-4">
      <LinkBox.Overlay href="https://example.com/blog/simple-post">
        Blog post title
      </LinkBox.Overlay>
      <p class="text-muted-foreground text-sm">A sample blog post.</p>
      <a
        class="text-primary underline"
        href="https://example.com/blog/simple-post/details"
      >
        Inner link
      </a>
    </article>
  {/snippet}
</LinkBox>
