<script lang="ts">
import type { ComponentProps } from "svelte";
import ComboboxItem from "../combobox/combobox-item.svelte";

let { class: className, ...rest }: ComponentProps<typeof ComboboxItem> =
  $props();
</script>

<ComboboxItem {...rest} class={className} showIndicator={false} />
