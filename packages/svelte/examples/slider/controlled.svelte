<script lang="ts">
import { Field, Slider } from "@pisagor/svelte";

let value: number[] = $state([40]);

const isGreaterThan80 = $derived((value[0] ?? 0) > 80);
</script>

<div class="flex flex-col gap-2">
      <p class="text-center text-sm">Greater than 80</p>
      <Field>
        <Slider
          label="Temperature"
          onValueChange={(v) => { value = v; }}
          showValue
          value={value}
        />
      </Field>
      <p class="text-center">{isGreaterThan80 ? "✅" : "❌"}</p>
    </div>
