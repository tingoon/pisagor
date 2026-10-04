<script lang="ts">
import { Announcement, Badge } from "@pisagor/svelte";
import ArrowUpRightIcon from "phosphor-svelte/lib/ArrowUpRightIcon";
</script>

<Announcement.Root>
  {#snippet asChild(props)}
    <a {...props()} href="/">
      <Badge>Latest update</Badge>
      <Announcement.Title>
        New feature added
        <ArrowUpRightIcon aria-hidden />
      </Announcement.Title>
    </a>
  {/snippet}
</Announcement.Root>
