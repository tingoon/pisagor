<script lang="ts">
import { ToggleGroup } from "@pisagor/svelte";
</script>

<div class="flex flex-wrap items-center gap-2">
      <ToggleGroup
        defaultValue={["bold"]}
        items={items}
        multiple
        variant="ghost"
      />
      <ToggleGroup defaultValue={["bold"]} items={items} multiple />
      <ToggleGroup
        defaultValue={["bold"]}
        items={items}
        multiple
        variant="outline"
      />
    </div>
