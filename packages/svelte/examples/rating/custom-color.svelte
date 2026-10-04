<script lang="ts">
import { Rating } from "@pisagor/svelte";
</script>

<div class="flex flex-wrap items-center gap-2">
  <Rating class="text-info" count={5} defaultValue={4} />
  <Rating class="text-success" count={5} defaultValue={4} />
</div>
