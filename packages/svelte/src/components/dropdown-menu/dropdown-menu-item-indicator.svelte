<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuItemIndicatorProps,
  } from "@ark-ui/svelte";
  import { withItemContext } from "./dropdown-menu.context";

  let { children, ...rest }: MenuItemIndicatorProps = $props();
  const part = withItemContext(() => rest, {
    defaultProps: { "data-scope": "menu" },
    name: "ItemIndicator",
    slot: "indicator",
  });
</script>

<MenuPrimitive.ItemIndicator {...part.props}>
  {@render children?.()}
</MenuPrimitive.ItemIndicator>
