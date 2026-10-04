<script lang="ts">
import { Alert } from "@pisagor/svelte";
import SparkleIcon from "phosphor-svelte/lib/SparkleIcon";
</script>

<Alert
  description="Icons can be added to alerts to provide visual context and improve user experience."
  title="New feature available"
>
  {#snippet icon()}
    <SparkleIcon />
  {/snippet}
</Alert>
