<script lang="ts">
import { Badge } from "@pisagor/svelte";
import { Announcement } from "@pisagor/svelte/announcement";
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
