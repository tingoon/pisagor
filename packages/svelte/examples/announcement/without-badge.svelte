<script module lang="ts">
  import source from "./without-badge.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Announcement } from "@pisagor/svelte";
  import ArrowUpRightIcon from "phosphor-svelte/lib/ArrowUpRightIcon";
</script>

<Announcement>
  {#snippet title()}
    New features added, check the logs for more details.
    <ArrowUpRightIcon />
  {/snippet}
</Announcement>
