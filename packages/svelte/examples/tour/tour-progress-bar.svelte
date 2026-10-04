<script lang="ts">
import { useTourContext } from "@pisagor/svelte";

const { tour } = useTourContext();
</script>

<div class="absolute right-0 bottom-0 left-0 h-1 overflow-hidden rounded-b-2xl bg-muted">
  <div
    class="h-full bg-primary transition-[width]"
    style={`width: ${tour.getProgressPercent()}%`}
  ></div>
</div>
