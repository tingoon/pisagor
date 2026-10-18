<script lang="ts">
  import { Button, File } from "@pisagor/svelte";
  import { DownloadSimpleIcon, TrashIcon } from "phosphor-svelte";
</script>

<File meta="PNG image" name="hero-banner.png" size={1_048_576}>
  {#snippet actions()}
    <Button aria-label="Download" size="icon-xs" variant="ghost">
      <DownloadSimpleIcon />
    </Button>
    <Button aria-label="Remove" size="icon-xs" variant="ghost">
      <TrashIcon />
    </Button>
  {/snippet}
</File>
