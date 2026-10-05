<script lang="ts">
import type { ClassValue } from "svelte/elements";
import InputGroupAddon from "../input-group/input-group-addon.svelte";
import InputClearButton from "./input-clear-button.svelte";

type Props = {
  class?: ClassValue;
  onClear: () => void;
};

let { onClear, class: className, ...rest }: Props = $props();
</script>

<InputGroupAddon align="inline-end" class={className}>
  <InputClearButton {...rest} {onClear} />
</InputGroupAddon>
