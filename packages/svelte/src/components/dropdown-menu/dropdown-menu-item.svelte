<script lang="ts">
  import { Menu as MenuPrimitive, type MenuItemProps } from "@ark-ui/svelte";
  import type { DropdownMenuItemRootContract } from "@pisagor/contracts";
  import { withItemProvider } from "./dropdown-menu.context";

  type Props = MenuItemProps & DropdownMenuItemRootContract;

  let { children, ...rest }: Props = $props();
  const part = withItemProvider(() => rest, {
    defaultProps: { "data-scope": "menu" },
    name: "Item",
    slot: "base",
  });
</script>

<MenuPrimitive.Item {...part.props}>
  {@render children?.()}
</MenuPrimitive.Item>
