<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuCheckboxItemProps,
  } from "@ark-ui/svelte";
  import type { DropdownMenuItemRootContract } from "@pisagor/contracts";
  import { withItemProvider } from "./dropdown-menu.context";

  /** Checkbox item; inset by default to leave room for `ItemIndicator`. */
  type Props = MenuCheckboxItemProps & DropdownMenuItemRootContract;

  let { inset = true, children, ...rest }: Props = $props();
  const part = withItemProvider(() => ({ ...rest, inset }), {
    defaultProps: { "data-scope": "menu" },
    name: "CheckboxItem",
    part: "item",
    slot: "base",
  });
</script>

<MenuPrimitive.CheckboxItem {...part.props}>
  {@render children?.()}
</MenuPrimitive.CheckboxItem>
