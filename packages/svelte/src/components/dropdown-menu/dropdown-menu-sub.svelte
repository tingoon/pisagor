<script lang="ts">
  import { Menu as MenuPrimitive, type MenuRootProps } from "@ark-ui/svelte";
  import type { DropdownMenuRootContract } from "@pisagor/contracts";
  import { withProvider } from "./dropdown-menu.context";

  type Props = MenuRootProps & DropdownMenuRootContract;

  let { children, ...rest }: Props = $props();
  /** Nested menu root; opens to the side of its `TriggerItem`. */
  const root = withProvider(() => rest, {
    defaultProps: { positioning: { placement: "right-start" } },
    name: "Sub",
    slot: "base",
  });
</script>

<MenuPrimitive.Root {...root.props}>
  {@render children?.()}
</MenuPrimitive.Root>
