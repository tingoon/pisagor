<script lang="ts">
import { Input, parseColor } from "@pisagor/svelte";
import { ColorPicker } from "@pisagor/svelte/color-picker";

let value = $state("#eb5e41");
</script>

<div class="flex flex-col gap-2">
  <ColorPicker onValueChange={(v) => (value = v)} value={value}>
    <ColorPicker.Control>
      <ColorPicker.Input>
        {#snippet asChild(props)}
          <Input {...props()} />
        {/snippet}
      </ColorPicker.Input>
    </ColorPicker.Control>
  </ColorPicker>
  <p class="text-center text-muted-foreground text-sm">
    {parseColor(value).toString("hex")}
  </p>
</div>
