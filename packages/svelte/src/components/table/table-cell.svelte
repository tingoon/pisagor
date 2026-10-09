<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLTdAttributes } from "svelte/elements";
import { withContext } from "./table.context";

type Props = HTMLTdAttributes & {
  colspan?: number | string | undefined | null;
  colSpan?: number | string | undefined | null;
};

let { children, ...rest }: Props = $props();
const part = withContext(() => rest, { name: "Cell" });
</script>

<Ark as="td" {...part.props}> {@render children?.()} </Ark>
