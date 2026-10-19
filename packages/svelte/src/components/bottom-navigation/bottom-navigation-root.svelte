<script lang="ts">
  import type { BottomNavigationRootContract } from "@pisagor/contracts";
  import type { HTMLAttributes } from "svelte/elements";
  import { useLocale } from "../provider/context";
  import {
    setBottomNavigationValue,
    withBottomNavigationProvider,
  } from "./bottom-navigation.context";

  type Props = HTMLAttributes<HTMLElement> &
    BottomNavigationRootContract & {
      /**
       * Value of the item for the current page; that item gets
       * `aria-current="page"`.
       */
      value?: string;
    };

  let { children, value, ...rest }: Props = $props();
  const { m } = useLocale();
  setBottomNavigationValue(() => value);
  const root = withBottomNavigationProvider(() => rest, {
    name: "Root",
    slot: "base",
  });
</script>

<nav aria-label={m("bottomNavigation.label")} {...root.props}>
  {@render children?.()}
</nav>
