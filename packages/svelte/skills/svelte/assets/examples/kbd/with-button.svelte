<script lang="ts">
import { Button } from "@pisagor/svelte";
import { Kbd } from "@pisagor/svelte/kbd";
import FloppyDiskIcon from "phosphor-svelte/lib/FloppyDiskIcon";
</script>

<Button variant="outline">
      <FloppyDiskIcon />
      Save
      <Kbd.Group class="translate-x-0.5">
        <Kbd variant="outline">Ctrl+S</Kbd>
      </Kbd.Group>
    </Button>
