<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./stat.context";

type Props = HTMLAttributes<HTMLParagraphElement> & {
  children?: import("svelte").Snippet;
};

let { children, ...rest }: Props = $props();

const part = withContext(() => rest, {
  name: "Description",
  slot: "description",
});
</script>

<Ark as="p" {...part.props}> {@render children?.()} </Ark>
