<script lang="ts">
import { Button } from "@pisagor/svelte";
import PlusIcon from "phosphor-svelte/lib/PlusIcon";

const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
</script>

<div class="flex flex-col gap-2">
  {#each sizes as size}
    <div class="flex items-center gap-2">
      <Button {size}>Button</Button>
      <Button size={`icon-${size}`}>
        <PlusIcon />
      </Button>
    </div>
  {/each}
</div>
