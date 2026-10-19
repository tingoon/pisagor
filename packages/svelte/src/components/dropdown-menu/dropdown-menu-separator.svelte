<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuSeparatorProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./dropdown-menu.context";

  let { children, ...rest }: MenuSeparatorProps = $props();
  const part = withContext(() => rest, {
    defaultProps: { "data-scope": "menu" },
    name: "Separator",
  });
</script>

<MenuPrimitive.Separator {...part.props}>
  {@render children?.()}
</MenuPrimitive.Separator>
