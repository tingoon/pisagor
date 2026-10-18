<script lang="ts">
  import { Announcement, Badge } from "@pisagor/svelte";
  import { ArrowUpRightIcon } from "phosphor-svelte";
</script>

<a class="block" href="/">
  <Announcement.Root>
    <Badge>Latest update</Badge>
    <Announcement.Title>
      New feature added
      <ArrowUpRightIcon aria-hidden />
    </Announcement.Title>
  </Announcement.Root>
</a>
