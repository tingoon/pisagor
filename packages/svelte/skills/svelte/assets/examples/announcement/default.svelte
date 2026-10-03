<script lang="ts">
import { Announcement } from "@pisagor/svelte/announcement";
import { Badge } from "@pisagor/svelte/badge";
</script>

<Announcement title="v2.1.0 — Dark mode, faster builds, and 12 new components">
  {#snippet badge()}
    <Badge>Release</Badge>
  {/snippet}
</Announcement>
