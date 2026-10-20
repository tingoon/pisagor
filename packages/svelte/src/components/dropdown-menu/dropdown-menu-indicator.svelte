<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuIndicatorProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./dropdown-menu.context";

  let { children, ...rest }: MenuIndicatorProps = $props();
  const part = withContext(() => rest, {
    defaultProps: { "data-scope": "menu" },
    name: "Indicator",
  });
</script>

<MenuPrimitive.Indicator {...part.props}>
  {@render children?.()}
</MenuPrimitive.Indicator>
