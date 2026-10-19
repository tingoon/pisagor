<script lang="ts">
  import { InputOTP } from "@pisagor/svelte";

  let value = $state([""]);

  const isCorrect = $derived(value.join("") === "1234");
</script>

<div class="flex flex-col gap-2">
  <p class="text-muted-foreground text-center text-sm">Enter the code 1234</p>
  <InputOTP onValueChange={(v) => (value = v)} {value} length={4} />
  <p class="text-muted-foreground text-center text-sm">
    {isCorrect ? "✅" : "❌"}
  </p>
</div>
