<script lang="ts">
  import { Clipboard } from "@pisagor/svelte";
  import { SparkleIcon } from "phosphor-svelte";
</script>

<Clipboard value="https://example.com/docs" variant="button">
  {#snippet copiedIcon()}
    <SparkleIcon />
  {/snippet}
  {#snippet copyIcon()}
    <SparkleIcon />
  {/snippet}
</Clipboard>
