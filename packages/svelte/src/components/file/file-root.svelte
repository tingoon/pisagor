<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { FileProps as BaseFileProps } from "@pisagor/props";
import type { HTMLAttributes } from "svelte/elements";
import { withProvider } from "./file.context";

type Props = HTMLAttributes<HTMLDivElement> & BaseFileProps;

let { children, ...rest }: Props = $props();
const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<Ark as="div" {...root.props}> {@render children?.()} </Ark>
