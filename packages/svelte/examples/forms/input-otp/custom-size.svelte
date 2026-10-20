<script lang="ts">
  import { InputOTP } from "@pisagor/svelte";
</script>

<InputOTP.Root>
  <InputOTP.Control>
    {#each [0, 1, 2, 3] as index (index)}
      <InputOTP.Input class="size-12 text-lg" {index} />
    {/each}
  </InputOTP.Control>
</InputOTP.Root>
