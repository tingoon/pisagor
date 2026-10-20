<script lang="ts">
  import { ColorPicker } from "@pisagor/svelte";
</script>

<div class="flex flex-col gap-2">
  <ColorPicker defaultValue="#eb5e41" format="hsla" variant="primary" />
  <ColorPicker defaultValue="#eb5e41" format="hsla" variant="secondary" />
</div>
