<script lang="ts">
  import { Menu as MenuPrimitive, type MenuRootProps } from "@ark-ui/svelte";
  import type { DropdownMenuRootContract } from "@pisagor/contracts";
  import { withProvider } from "./dropdown-menu.context";

  type Props = MenuRootProps & DropdownMenuRootContract;

  let { children, ...rest }: Props = $props();
  // The root renders no element; `base` is an empty slot.
  const root = withProvider(() => rest, {
    defaultProps: { positioning: { placement: "bottom-end" } },
    name: "Root",
    slot: "base",
  });
</script>

<MenuPrimitive.Root {...root.props}>
  {@render children?.()}
</MenuPrimitive.Root>
