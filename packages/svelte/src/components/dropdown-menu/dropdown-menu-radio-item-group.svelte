<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuRadioItemGroupProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./dropdown-menu.context";

  let { children, ...rest }: MenuRadioItemGroupProps = $props();
  const part = withContext(() => rest, {
    defaultProps: { "data-scope": "menu" },
    name: "RadioItemGroup",
    part: "item-group",
  });
</script>

<MenuPrimitive.RadioItemGroup {...part.props}>
  {@render children?.()}
</MenuPrimitive.RadioItemGroup>
