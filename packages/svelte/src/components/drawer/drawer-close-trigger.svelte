<script lang="ts">
import {
  type DrawerCloseTriggerProps,
  Drawer as DrawerPrimitive,
} from "@ark-ui/svelte/drawer";

let { children, ...rest }: DrawerCloseTriggerProps = $props();
</script>

<DrawerPrimitive.CloseTrigger {...rest}>
  {@render children?.()}
</DrawerPrimitive.CloseTrigger>
