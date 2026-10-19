<script lang="ts">
  import { Menu as MenuPrimitive, type MenuItemProps } from "@ark-ui/svelte";
  import type { DropdownMenuItemRootContract } from "@pisagor/contracts";
  import { cn } from "@pisagor/utils";
  import { useStyles, withItemProvider } from "./dropdown-menu.context";

  /** Stacked icon + label item for quick-action grids. */
  type Props = MenuItemProps & DropdownMenuItemRootContract;

  let { children, class: className, ...rest }: Props = $props();
  const styles = useStyles();
  const part = withItemProvider(
    () => ({
      ...rest,
      class: styles.slots.quickItem({ class: cn(className) }),
    }),
    {
      defaultProps: { "data-scope": "menu" },
      name: "QuickItem",
      part: "item",
      slot: "base",
    },
  );
</script>

<MenuPrimitive.Item {...part.props}>
  {@render children?.()}
</MenuPrimitive.Item>
