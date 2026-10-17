<script module lang="ts">
  import source from "./controlled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { CircularSlider } from "@pisagor/svelte";

  let value = $state(45);
</script>

<div class="flex flex-col gap-2">
  <div class="text-muted-foreground text-sm">More than: 180</div>
  <CircularSlider
    aria-label="Angle"
    onValueChange={(v) => (value = v)}
    {value}
  />
  <div class="text-muted-foreground text-center text-sm">
    {value > 180 ? "✅" : "❌"}
  </div>
</div>
