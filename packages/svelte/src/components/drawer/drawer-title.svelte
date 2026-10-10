<script lang="ts">
import {
  Drawer as DrawerPrimitive,
  type DrawerTitleProps,
} from "@ark-ui/svelte/drawer";
import { withContext } from "./drawer.context";

let { children, ...rest }: DrawerTitleProps = $props();
const part = withContext(() => rest, { name: "Title" });
</script>

<DrawerPrimitive.Title {...part.props}>
  {@render children?.()}
</DrawerPrimitive.Title>
