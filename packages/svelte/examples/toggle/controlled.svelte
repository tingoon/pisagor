<script lang="ts">
import { Toggle } from "@pisagor/svelte/toggle";

let pressed = $state(false);

</script>

<div class="flex flex-col items-center gap-2">
      <Toggle onPressedChange={(v) => { pressed = v; }} pressed={pressed} variant="outline">
        Toggle
      </Toggle>
      <p class="text-muted-foreground text-sm">{pressed ? "✅" : "❌"}</p>
    </div>
