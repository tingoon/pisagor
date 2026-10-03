<script lang="ts">
import { Button } from "@pisagor/svelte/button";
import PlusIcon from "phosphor-svelte/lib/PlusIcon";
</script>

<div class="flex flex-col gap-2">
      {#each (["xs", "sm", "md", "lg", "xl"]) as size}
<div class="flex items-center gap-2">
          <Button size={size}>Button</Button>
          <Button size={`icon-${size}`}>
            <PlusIcon />
          </Button>
        </div>
{/each}
    </div>
