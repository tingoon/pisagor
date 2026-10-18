<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
  import type { NavigationMenuProps as BaseNavigationMenuProps } from "@pisagor/props";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { useMessageResolver } from "../provider/context";
  import {
    setNavigationMenuOpenState,
    withProvider,
  } from "./navigation-menu.context";

  type Props = HTMLAttributes<HTMLElement> & {
    children?: Snippet;
  } & BaseNavigationMenuProps;

  let { children, ...rest }: Props = $props();
  const t = useMessageResolver();
  const root = withProvider(() => rest, { name: "Root", slot: "base" });

  let openId = $state<string | null>(null);
  setNavigationMenuOpenState({
    get openId() {
      return openId;
    },
    setOpenId(id) {
      openId = id;
    },
  });
</script>

<Ark aria-label={t("navigationMenu.label")} as="nav" {...root.props}>
  {@render children?.()}
</Ark>
