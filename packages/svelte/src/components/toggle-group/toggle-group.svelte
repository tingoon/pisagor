<script lang="ts">
import type { Snippet } from "svelte";
import ToggleGroupItem from "./toggle-group-item.svelte";
import ToggleGroupRoot from "./toggle-group-root.svelte";

type ToggleGroupPresetItem = {
  children: string;
  disabled?: boolean;
  value: string;
};

type Props = {
  children?: Snippet;
  class?: string | undefined;
  items?: ToggleGroupPresetItem[];
  multiple?: boolean;
  onValueChange?: (value: string[]) => void;
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  spacing?: number;
  variant?: "outline" | "ghost";
};

let { items, children, ...rest }: Props = $props();
</script>

<ToggleGroupRoot {...rest}>
  {#if children}
    {@render children()}
  {:else}
    {#each items ?? [] as item (item.value)}
      <ToggleGroupItem disabled={item.disabled} value={item.value}>
        {item.children}
      </ToggleGroupItem>
    {/each}
  {/if}
</ToggleGroupRoot>
