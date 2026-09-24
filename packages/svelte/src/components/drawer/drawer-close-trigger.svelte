<script lang="ts">
import type { DrawerCloseTriggerProps } from "@ark-ui/svelte/drawer";
import { Drawer as DrawerPrimitive } from "@ark-ui/svelte/drawer";

type Props = DrawerCloseTriggerProps;
let { children, ...rest }: Props = $props();
</script>

<DrawerPrimitive.CloseTrigger {...rest}> {@render children?.()} </DrawerPrimitive.CloseTrigger>
