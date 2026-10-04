<script lang="ts">
import { Button, Clipboard } from "@pisagor/svelte";

let value = $state("https://example.com/docs");
</script>

<div class="flex flex-col gap-2">
  <Clipboard {value} />
  <Button
    onclick={() => (value = "https://example.com/docs/alternate")}
    variant="secondary"
  >
    Change URL
  </Button>
</div>
