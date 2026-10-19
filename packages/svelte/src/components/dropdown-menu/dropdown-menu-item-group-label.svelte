<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuItemGroupLabelProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./dropdown-menu.context";

  let { children, ...rest }: MenuItemGroupLabelProps = $props();
  const part = withContext(() => rest, {
    defaultProps: { "data-scope": "menu" },
    name: "ItemGroupLabel",
  });
</script>

<MenuPrimitive.ItemGroupLabel {...part.props}>
  {@render children?.()}
</MenuPrimitive.ItemGroupLabel>
