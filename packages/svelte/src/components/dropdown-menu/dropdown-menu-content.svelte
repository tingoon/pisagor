<script lang="ts">
  import { Menu as MenuPrimitive, type MenuContentProps } from "@ark-ui/svelte";
  import { withContext } from "./dropdown-menu.context";

  let { children, ...rest }: MenuContentProps = $props();
  const part = withContext(() => rest, {
    defaultProps: { "data-scope": "menu" },
    name: "Content",
  });
</script>

<MenuPrimitive.Content {...part.props}>
  {@render children?.()}
</MenuPrimitive.Content>
