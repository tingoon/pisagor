<script lang="ts">
import { Announcement, Badge } from "@pisagor/svelte";
import SparkleIcon from "phosphor-svelte/lib/SparkleIcon";
</script>

<Announcement title="Dark mode and 12 new components available">
  {#snippet badge()}
    <Badge variant="info">
      <SparkleIcon />
      New features
    </Badge>
  {/snippet}
</Announcement>
