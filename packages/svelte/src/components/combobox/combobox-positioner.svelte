<script lang="ts">
import type { ComboboxPositionerProps } from "@ark-ui/svelte/combobox";
import { Combobox as ComboboxPrimitive } from "@ark-ui/svelte/combobox";

type Props = ComboboxPositionerProps;
let { children, ...rest }: Props = $props();
</script>

<ComboboxPrimitive.Positioner {...rest}> {@render children?.()} </ComboboxPrimitive.Positioner>
