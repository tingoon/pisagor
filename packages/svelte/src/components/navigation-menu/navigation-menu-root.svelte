<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { NavigationMenuProps as BaseNavigationMenuProps } from "@pisagor/props";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { withProvider } from "./navigation-menu.context";

type Props = HTMLAttributes<HTMLElement> & {
  children?: Snippet;
} & BaseNavigationMenuProps;

let { children, ...rest }: Props = $props();
const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<Ark as="nav" {...root.props}> {@render children?.()} </Ark>
