<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withBottomNavigationItemContext } from "./bottom-navigation.context";

let { children, ...rest }: HTMLAttributes<HTMLSpanElement> = $props();
const part = withBottomNavigationItemContext(() => rest, {
  defaultProps: { "data-part": "item-label" },
  name: "ItemLabel",
  slot: "label",
});
</script>

<Ark as="span" {...part.props}> {@render children?.()} </Ark>
