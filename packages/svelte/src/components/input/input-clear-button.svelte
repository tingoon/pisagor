<script lang="ts">
import XIcon from "phosphor-svelte/lib/XIcon";
import type { ClassValue } from "svelte/elements";
import InputGroupButton from "../input-group/input-group-button.svelte";

type Props = {
  class?: ClassValue;
  onClear: () => void;
};

let {
  onClear,
  class: className,
  children,
  ...rest
}: Props & { children?: import("svelte").Snippet } = $props();
</script>

<InputGroupButton
  {...rest}
  aria-label="Clear"
  class={className}
  data-part="clear-button"
  data-scope="input"
  onclick={onClear}
  size="icon-xs"
  type="button"
  variant="ghost"
>
  {#if children}
    {@render children()}
  {:else}
    <XIcon />
  {/if}
</InputGroupButton>
