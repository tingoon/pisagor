<script lang="ts">
import { InputOTP } from "@pisagor/svelte";

let value = $state([""]);

const isCorrect = value.join("") === "1234";
</script>

<InputOTP invalid={!isCorrect} onValueChange={(v) => { value = v; }} value={value}>
      <InputOTP.Slot index={0} />
      <InputOTP.Slot index={1} />
      <InputOTP.Slot index={2} />
      <InputOTP.Slot index={3} />
    </InputOTP>
