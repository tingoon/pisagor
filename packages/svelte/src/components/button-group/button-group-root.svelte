<script lang="ts">
import type { ButtonGroupProps as BaseButtonGroupProps } from "@pisagor/props";
import type { HTMLFieldsetAttributes } from "svelte/elements";
import { withProvider } from "./button-group.context";

type Props = HTMLFieldsetAttributes & {
  children?: import("svelte").Snippet;
} & BaseButtonGroupProps;

let { children, ...rest }: Props = $props();

const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<fieldset {...root.props}>
  {@render children?.()}
</fieldset>
