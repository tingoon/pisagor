<script lang="ts">
import { Menu as MenuPrimitive, type MenuRootProps } from "@ark-ui/svelte/menu";

let {
  positioning = { placement: "bottom-end" },
  children,
  ...rest
}: MenuRootProps = $props();
</script>

<MenuPrimitive.Root {...rest} {positioning}>
  {@render children?.()}
</MenuPrimitive.Root>
