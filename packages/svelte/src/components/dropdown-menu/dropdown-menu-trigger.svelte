<script lang="ts">
import type { MenuTriggerProps } from "@ark-ui/svelte/menu";
import { Menu as MenuPrimitive } from "@ark-ui/svelte/menu";

type Props = MenuTriggerProps;
let { children, ...rest }: Props = $props();
</script>

<MenuPrimitive.Trigger {...rest}> {@render children?.()} </MenuPrimitive.Trigger>
