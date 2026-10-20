<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuTriggerItemProps,
  } from "@ark-ui/svelte";
  import type { DropdownMenuItemRootContract } from "@pisagor/contracts";
  import { withItemProvider } from "./dropdown-menu.context";

  type Props = MenuTriggerItemProps & DropdownMenuItemRootContract;

  let { children, ...rest }: Props = $props();
  const part = withItemProvider(() => rest, {
    defaultProps: { "data-scope": "menu" },
    name: "TriggerItem",
    slot: "base",
  });
</script>

<MenuPrimitive.TriggerItem {...part.props}>
  {@render children?.()}
</MenuPrimitive.TriggerItem>
