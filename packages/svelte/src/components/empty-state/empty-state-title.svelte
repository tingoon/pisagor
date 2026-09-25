<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useEmptyState } from "./empty-state.context";

type Props = Omit<HTMLAttributes<HTMLHeadingElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useEmptyState();
</script>

<Ark
  as="h3"
  {...rest}
  class={slots.title({ class: cn(className) })}
  data-part="title"
  data-scope="empty-state"
>
  {@render children?.()}
</Ark>
