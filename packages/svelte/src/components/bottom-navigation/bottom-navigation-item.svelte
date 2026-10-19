<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
  import type { BottomNavigationItemRootContract } from "@pisagor/contracts";
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import {
    useBottomNavigationValue,
    withBottomNavigationItemProvider,
  } from "./bottom-navigation.context";

  type Props = HTMLAnchorAttributes &
    BottomNavigationItemRootContract & {
      /** Marks the item as the current page. Defaults to `value === root value`. */
      current?: boolean;
      /** Whether the item is disabled. */
      disabled?: boolean;
      /** Identifier compared with the root `value`. */
      value?: string;
    };

  let {
    children,
    current,
    disabled = false,
    value,
    tabindex,
    ...rest
  }: Props = $props();
  const rootValue = useBottomNavigationValue();
  const isCurrent = $derived(
    current ??
      (value !== undefined &&
        rootValue() !== undefined &&
        value === rootValue()),
  );
  const root = withBottomNavigationItemProvider(() => rest, {
    name: "Item",
    slot: "base",
  });
</script>

<Ark
  as="a"
  {...root.props}
  aria-current={isCurrent ? "page" : undefined}
  aria-disabled={disabled || undefined}
  data-current={isCurrent ? "" : undefined}
  data-disabled={disabled ? "" : undefined}
  tabindex={disabled ? -1 : tabindex}
>
  {@render children?.()}
</Ark>
