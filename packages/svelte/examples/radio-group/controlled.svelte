<script lang="ts">
import { RadioGroup } from "@pisagor/svelte/radio-group";

let value: string | null = $state(null);

const isCorrectOption = value === "comfortable";
</script>

<div class="flex flex-col items-center gap-2 text-center text-sm">
      <p>Select the option comfortable</p>
      <RadioGroup
        items={[
          { label: "Default", value: "default" },
          { label: "Comfortable", value: "comfortable" },
          { label: "Compact", value: "compact" },
        ]}
        onValueChange={(v) => { value = v; }}
        value={value}
      />
      <p class="text-center">{isCorrectOption ? "✅" : "❌"}</p>
    </div>
