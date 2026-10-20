<script lang="ts">
  import { QrCode } from "@pisagor/svelte";
  import { FishIcon } from "phosphor-svelte";
</script>

<QrCode value="https://example.com">
  {#snippet overlay()}
    <FishIcon />
  {/snippet}
</QrCode>
