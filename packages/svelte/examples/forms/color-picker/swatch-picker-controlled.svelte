<script lang="ts">
  import { ColorPicker, parseColor } from "@pisagor/svelte";

  let value = $state("#0485F7");

  const swatches = ["#0485F7", "#EF4444", "#F59E0B", "#10B981"];
</script>

<div class="flex flex-col items-center gap-2">
  <ColorPicker.Root inline onValueChange={(v) => (value = v)} {value}>
    <ColorPicker.SwatchGroup>
      {#each swatches as color}
        <ColorPicker.SwatchTrigger value={color}>
          <ColorPicker.Swatch value={color}>
            <ColorPicker.SwatchIndicator />
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
      {/each}
    </ColorPicker.SwatchGroup>
  </ColorPicker.Root>
  <p class="text-muted-foreground text-center text-sm">
    {parseColor(value).toString("hex")}
  </p>
</div>
