<script lang="ts">
import type { DrawerTriggerProps } from "@ark-ui/svelte/drawer";
import { Drawer as DrawerPrimitive } from "@ark-ui/svelte/drawer";

type Props = DrawerTriggerProps;
let { children, ...rest }: Props = $props();
</script>

<DrawerPrimitive.Trigger {...rest}> {@render children?.()} </DrawerPrimitive.Trigger>
