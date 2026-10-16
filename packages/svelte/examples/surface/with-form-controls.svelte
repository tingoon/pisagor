<script lang="ts">
  import { Surface } from "@pisagor/svelte";
  import FormControlsDemo from "./form-controls-demo.svelte";
</script>

<Surface bordered padding="md" variant="default">
  <div class="mb-4">
    <h3 class="text-sm font-semibold">Settings</h3>
    <p class="text-muted-foreground text-sm">
      Grouped controls on a surface background.
    </p>
  </div>
  <FormControlsDemo />
</Surface>
