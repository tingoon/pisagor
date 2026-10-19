<script lang="ts">
  import { Menu as MenuPrimitive, type MenuTriggerProps } from "@ark-ui/svelte";
  import { withContext } from "./dropdown-menu.context";

  let { children, ...rest }: MenuTriggerProps = $props();
  const part = withContext(() => rest, {
    defaultProps: { "data-scope": "menu" },
    name: "Trigger",
  });
</script>

<MenuPrimitive.Trigger {...part.props}>
  {@render children?.()}
</MenuPrimitive.Trigger>
