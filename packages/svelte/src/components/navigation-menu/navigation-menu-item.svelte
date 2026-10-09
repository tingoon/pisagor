<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./navigation-menu.context";

type Props = HTMLAttributes<HTMLLIElement> & {
  children?: Snippet;
};

let { children, ...rest }: Props = $props();
const part = withContext(() => rest, { name: "Item" });
</script>

<Ark as="li" {...part.props}> {@render children?.()} </Ark>
