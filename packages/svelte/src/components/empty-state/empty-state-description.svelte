<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { useEmptyState } from "./empty-state.context";

type Props = Omit<HTMLAttributes<HTMLParagraphElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useEmptyState();
</script>

<Ark
  as="p"
  {...rest}
  class={slots.description({ class: className })}
  data-part="description"
  data-scope="empty-state"
>
  {@render children?.()}
</Ark>
