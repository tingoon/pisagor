<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { type Snippet, setContext } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { MENU_INSIDE_LIST, withContext } from "./menu.context";

type Props = HTMLAttributes<HTMLUListElement> & {
  children?: Snippet;
};

let { children, ...rest }: Props = $props();
setContext(MENU_INSIDE_LIST, true);
const part = withContext(() => rest, { name: "List" });
</script>

<Ark as="ul" {...part.props}> {@render children?.()} </Ark>
