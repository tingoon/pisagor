<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuItemGroupProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./dropdown-menu.context";

  let { children, ...rest }: MenuItemGroupProps = $props();
  const part = withContext(() => rest, {
    defaultProps: { "data-scope": "menu" },
    name: "ItemGroup",
  });
</script>

<MenuPrimitive.ItemGroup {...part.props}>
  {@render children?.()}
</MenuPrimitive.ItemGroup>
