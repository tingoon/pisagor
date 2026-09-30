<script lang="ts">
import { Presence } from "@pisagor/svelte/presence";

let present = $state(true);
</script>

<button onclick={() => (present = !present)} type="button">Toggle</button>
<Presence {present}>
  <div>Present content</div>
</Presence>
