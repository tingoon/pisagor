<script lang="ts">
import { Badge } from "@pisagor/svelte";
import { Announcement } from "@pisagor/svelte/announcement";
import ArrowUpRightIcon from "phosphor-svelte/lib/ArrowUpRightIcon";
import CheckCircleIcon from "phosphor-svelte/lib/CheckCircleIcon";
import WarningIcon from "phosphor-svelte/lib/WarningIcon";
</script>

<div class="flex flex-col gap-2">
  <Announcement title="v2.1.0 — Dark mode, faster builds, and 12 new components">
    {#snippet badge()}
      <Badge variant="default">Release</Badge>
    {/snippet}
  </Announcement>
  <Announcement
    title="Your last invoice couldn't be processed. Update your billing info."
  >
    {#snippet badge()}
      <Badge variant="destructive">
        <WarningIcon /> Payment failed
      </Badge>
    {/snippet}
  </Announcement>
  <Announcement
    title="Scheduled downtime tonight 2 to 4 a.m. UTC. No action needed."
  >
    {#snippet badge()}
      <Badge variant="info">Maintenance</Badge>
    {/snippet}
  </Announcement>
  <Announcement.Root>
    {#snippet asChild(props)}
      <a {...props()} href="https://example.com/announcement">
        <Badge variant="success">
          <CheckCircleIcon /> Deployed
        </Badge>
        <Announcement.Title>
          Production build completed in 2m 34s <ArrowUpRightIcon />
        </Announcement.Title>
      </a>
    {/snippet}
  </Announcement.Root>
  <Announcement title="Your free trial expires in 3 days. Upgrade to keep access.">
    {#snippet badge()}
      <Badge variant="warning">
        <WarningIcon /> Trial ending
      </Badge>
    {/snippet}
  </Announcement>
</div>
