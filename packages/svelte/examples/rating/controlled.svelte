<script lang="ts">
import { Rating } from "@pisagor/svelte";

let value = $state(0);

const isCorrectRating = value === 5;
</script>

<div class="flex flex-col gap-2 text-center text-sm">
  <p>Select the rating 5</p>
  <Rating onValueChange={(value) => (value = value ?? 0)} {value} />
  <p class="text-center">{isCorrectRating ? "✅" : "❌"}</p>
</div>
