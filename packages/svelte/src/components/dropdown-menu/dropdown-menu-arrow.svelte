<script lang="ts">
  import { Menu as MenuPrimitive, type MenuArrowProps } from "@ark-ui/svelte";
  import { withContext } from "./dropdown-menu.context";
  import DropdownMenuArrowTip from "./dropdown-menu-arrow-tip.svelte";

  const ARROW_STYLE =
    "--arrow-background: var(--popover); --arrow-size: calc(1.5 * var(--spacing));";

  let { children, style, ...rest }: MenuArrowProps = $props();
  const part = withContext(
    () => ({ ...rest, style: style ? `${ARROW_STYLE} ${style}` : ARROW_STYLE }),
    { defaultProps: { "data-scope": "menu" }, name: "Arrow" },
  );
</script>

<MenuPrimitive.Arrow {...part.props}>
  {#if children}
    {@render children()}
  {:else}
    <DropdownMenuArrowTip />
  {/if}
</MenuPrimitive.Arrow>
