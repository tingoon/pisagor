<script lang="ts">
  import { InputOTP } from "@pisagor/svelte";

  let value = $state([""]);

  const isCorrect = $derived(value.join("") === "1234");
</script>

<InputOTP
  invalid={!isCorrect}
  onValueChange={(v) => (value = v)}
  {value}
  length={4}
/>
