<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useEmptyState } from "./empty-state.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useEmptyState();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.actions({ class: cn(className) })}
  data-part="actions"
  data-scope="empty-state"
>
  {@render children?.()}
</Ark>
