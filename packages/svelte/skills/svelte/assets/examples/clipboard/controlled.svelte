<script lang="ts">
import { Button } from "@pisagor/svelte";
import { Clipboard } from "@pisagor/svelte/clipboard";

let value = $state("https://example.com/docs");

</script>

<div class="flex flex-col gap-2">
      <Clipboard value={value} />
      <Button
        onClick={() => value = "https://example.com/docs/alternate"}
        variant="secondary"
      >
        Change URL
      </Button>
    </div>
