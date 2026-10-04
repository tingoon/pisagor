<script lang="ts">
import { InputOTP } from "@pisagor/svelte";

let value = $state([""]);

const isCorrect = value.join("") === "1234";
</script>

<div class="flex flex-col gap-2">
  <p class="text-center text-muted-foreground text-sm">Enter the code 1234</p>
  <InputOTP onValueChange={(v) => (value = v)} {value}>
    <InputOTP.Slot index={0} />
    <InputOTP.Slot index={1} />
    <InputOTP.Slot index={2} />
    <InputOTP.Slot index={3} />
  </InputOTP>
  <p class="text-center text-muted-foreground text-sm">
    {isCorrect ? "✅" : "❌"}
  </p>
</div>
