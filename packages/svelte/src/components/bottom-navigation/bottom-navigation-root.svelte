<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { BottomNavigationProps as BaseBottomNavigationProps } from "@pisagor/props";
import type { HTMLAttributes } from "svelte/elements";
import { useMessageResolver } from "../provider/provider.context";
import {
  setBottomNavigationValue,
  withBottomNavigationProvider,
} from "./bottom-navigation.context";

type Props = HTMLAttributes<HTMLElement> &
  BaseBottomNavigationProps & {
    /** Value of the item for the current page; that item gets `aria-current="page"`. */
    value?: string;
  };

let { children, value, ...rest }: Props = $props();
const t = useMessageResolver();
setBottomNavigationValue(() => value);
const root = withBottomNavigationProvider(() => rest, {
  name: "Root",
  slot: "base",
});
</script>

<Ark aria-label={t("bottomNavigation.label")} as="nav" {...root.props}>
  {@render children?.()}
</Ark>
