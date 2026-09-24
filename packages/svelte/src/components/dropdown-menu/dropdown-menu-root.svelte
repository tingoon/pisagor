<script lang="ts">
import type { MenuRootProps } from "@ark-ui/svelte/menu";
import { Menu as MenuPrimitive } from "@ark-ui/svelte/menu";

type Props = MenuRootProps;

let { positioning = { placement: "bottom-end" }, children, ...rest }: Props = $props();
</script>

<MenuPrimitive.Root {...rest} {positioning}> {@render children?.()} </MenuPrimitive.Root>
