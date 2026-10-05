<script lang="ts">
import type { ComponentProps } from "svelte";
import ComboboxItem from "../combobox/combobox-item.svelte";

type Props = ComponentProps<typeof ComboboxItem>;

let { class: className, ...rest }: Props = $props();
</script>

<ComboboxItem {...rest} class={className} showIndicator={false} />
