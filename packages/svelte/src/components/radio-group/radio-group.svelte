<script lang="ts">
import type { RadioGroupProps as RadioGroupSharedProps } from "@pisagor/props";
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
  value?: string | null;
  children?: Snippet;
  } & RadioGroupSharedProps;

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
