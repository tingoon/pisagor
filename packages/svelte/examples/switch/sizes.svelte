<script lang="ts">
import { Switch } from "@pisagor/svelte";
</script>

<div class="flex flex-wrap items-center gap-2">
  <Switch defaultChecked />
  <Switch
    class="[--size:--spacing(5)] sm:[--size:--spacing(6)]"
    defaultChecked
  />
</div>
