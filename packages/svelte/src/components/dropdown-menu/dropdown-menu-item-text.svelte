<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuItemTextProps,
  } from "@ark-ui/svelte";
  import { withItemContext } from "./dropdown-menu.context";

  let { children, ...rest }: MenuItemTextProps = $props();
  const part = withItemContext(() => rest, {
    defaultProps: { "data-scope": "menu" },
    name: "ItemText",
    slot: "text",
  });
</script>

<MenuPrimitive.ItemText {...part.props}>
  {@render children?.()}
</MenuPrimitive.ItemText>
