<script lang="ts">
import { Button, DropdownMenu } from "@pisagor/svelte";

const items = Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`);
</script>

<DropdownMenu>
      <DropdownMenu.Trigger>
            <Button variant="outline">
            Open
          </Button>
          </DropdownMenu.Trigger>
      <DropdownMenu.Content class="max-h-60 min-w-40">
        {#each items as label}
          <DropdownMenu.Item value={`item-${index + 1}`}>
            {label}
          </DropdownMenu.Item>
        {/each}
      </DropdownMenu.Content>
    </DropdownMenu>
