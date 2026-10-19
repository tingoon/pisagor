<script lang="ts">
  import type { NavigationMenuRootContract } from "@pisagor/contracts";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { useLocale } from "../provider/context";
  import {
    setNavigationMenuOpenState,
    withProvider,
  } from "./navigation-menu.context";

  type Props = HTMLAttributes<HTMLElement> & {
    children?: Snippet;
  } & NavigationMenuRootContract;

  let { children, ...rest }: Props = $props();
  const { m } = useLocale();
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

<nav aria-label={m("navigationMenu.label")} {...root.props}>
  {@render children?.()}
</nav>
