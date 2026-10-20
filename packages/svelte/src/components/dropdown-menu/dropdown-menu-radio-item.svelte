<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuRadioItemProps,
  } from "@ark-ui/svelte";
  import type { DropdownMenuItemRootContract } from "@pisagor/contracts";
  import { withItemProvider } from "./dropdown-menu.context";

  /** Radio item; inset by default to leave room for `ItemIndicator`. */
  type Props = MenuRadioItemProps & DropdownMenuItemRootContract;

  let { inset = true, children, ...rest }: Props = $props();
  const part = withItemProvider(() => ({ ...rest, inset }), {
    defaultProps: { "data-scope": "menu" },
    name: "RadioItem",
    part: "item",
    slot: "base",
  });
</script>

<MenuPrimitive.RadioItem {...part.props}>
  {@render children?.()}
</MenuPrimitive.RadioItem>
