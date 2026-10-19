<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuPositionerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./dropdown-menu.context";

  let { children, ...rest }: MenuPositionerProps = $props();
  const part = withContext(() => rest, {
    defaultProps: { "data-scope": "menu" },
    name: "Positioner",
  });
</script>

<MenuPrimitive.Positioner {...part.props}>
  {@render children?.()}
</MenuPrimitive.Positioner>
