<script lang="ts">
import type { Snippet } from "svelte";
import RadioGroupItem from "./radio-group-item.svelte";
import RadioGroupRoot from "./radio-group-root.svelte";

type RadioGroupPresetItem = {
  disabled?: boolean;
  label: string;
  value: string;
};

type Props = {
  class?: string | undefined;
  items?: RadioGroupPresetItem[];
  onValueChange?: (value: string | null) => void;
  orientation?: "horizontal" | "vertical";
  recipe?: typeof import("@pisagor/recipes/radio-group").radioGroupRecipe;
  value?: string | null;
  children?: Snippet;
};

let { items = [], children, ...rest }: Props = $props();
</script>

<RadioGroupRoot {...rest}>
  {#if children}
    {@render children()}
  {:else}
    {#each items as item (item.value)}
      <RadioGroupItem disabled={item.disabled} value={item.value}>
        {item.label}
      </RadioGroupItem>
    {/each}
  {/if}
</RadioGroupRoot>
