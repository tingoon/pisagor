<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useSortableItem } from "./sortable.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useSortableItem();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.content({ class: cn(className) })}
  data-part="item-content"
  data-scope="sortable"
>
  {@render children?.()}
</Ark>
