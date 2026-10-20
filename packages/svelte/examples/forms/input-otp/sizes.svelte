<script lang="ts">
  import { InputOTP } from "@pisagor/svelte";

  const sizes = ["sm", "md", "lg"] as const;
</script>

<div class="flex flex-col gap-2">
  {#each sizes as size (size)}
    <InputOTP {size} length={4} />
  {/each}
</div>
