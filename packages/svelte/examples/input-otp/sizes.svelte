<script module lang="ts">
  import source from "./sizes.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { InputOTP } from "@pisagor/svelte";

  const sizes = ["sm", "md", "lg"] as const;
</script>

<div class="flex flex-col gap-2">
  {#each sizes as size (size)}
    <InputOTP {size}>
      <InputOTP.Slot index={0} />
      <InputOTP.Slot index={1} />
      <InputOTP.Slot index={2} />
      <InputOTP.Slot index={3} />
    </InputOTP>
  {/each}
</div>
