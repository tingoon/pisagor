<script lang="ts">
  import { ColorPicker, Input, parseColor } from "@pisagor/svelte";

  let value = $state("#eb5e41");
</script>

<div class="flex flex-col gap-2">
  <ColorPicker.Root onValueChange={(v) => (value = v)} {value}>
    <ColorPicker.Control>
      <ColorPicker.Input channel="hex">
        {#snippet asChild(props)}
          <Input {...props()} />
        {/snippet}
      </ColorPicker.Input>
    </ColorPicker.Control>
  </ColorPicker.Root>
  <p class="text-muted-foreground text-center text-sm">
    {parseColor(value).toString("hex")}
  </p>
</div>
