<script module lang="ts">
  import source from "./input-controlled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { ColorPicker, Input, parseColor } from "@pisagor/svelte";

  let value = $state("#eb5e41");
</script>

<div class="flex flex-col gap-2">
  <ColorPicker onValueChange={(v) => (value = v)} {value}>
    <ColorPicker.Control>
      <ColorPicker.Input channel="hex">
        {#snippet asChild(props)}
          <Input {...props()} />
        {/snippet}
      </ColorPicker.Input>
    </ColorPicker.Control>
  </ColorPicker>
  <p class="text-muted-foreground text-center text-sm">
    {parseColor(value).toString("hex")}
  </p>
</div>
