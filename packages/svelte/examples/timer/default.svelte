<script lang="ts">
import { Timer } from "@pisagor/svelte";
</script>

<Timer countdown isControlsVisible startMs={60_000} units={["minutes", "seconds"]} />
