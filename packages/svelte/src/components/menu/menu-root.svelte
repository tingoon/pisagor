<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { MenuProps as BaseMenuProps } from "@pisagor/props";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { withProvider } from "./menu.context";

type Props = HTMLAttributes<HTMLElement> & {
  children?: Snippet;
} & BaseMenuProps;

let { children, ...rest }: Props = $props();

const root = withProvider(() => rest, {
  defaultProps: { "aria-label": "Menu" },
  name: "Root",
  slot: "base",
});
</script>

<Ark as="nav" {...root.props}> {@render children?.()} </Ark>
