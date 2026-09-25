<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useEmptyState } from "./empty-state.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useEmptyState();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.media({ class: cn(className) })}
  data-part="media"
  data-scope="empty-state"
>
  {@render children?.()}
</Ark>
