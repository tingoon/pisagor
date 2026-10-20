<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuArrowTipProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./dropdown-menu.context";

  let { children, ...rest }: MenuArrowTipProps = $props();
  const part = withContext(() => rest, {
    defaultProps: { "data-scope": "menu" },
    name: "ArrowTip",
  });
</script>

<MenuPrimitive.ArrowTip {...part.props}>
  {@render children?.()}
</MenuPrimitive.ArrowTip>
