<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import DotsSixVerticalIcon from "phosphor-svelte/lib/DotsSixVerticalIcon";
import { onMount } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { useSortable, useSortableItem } from "./sortable.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & { class?: string | undefined };
let { children, class: className, ...rest }: Props = $props();
const item = useSortableItem();
const sortable = useSortable();

onMount(() => {
  sortable.registerHandle(item.id);
  return () => sortable.unregisterHandle(item.id);
});
</script>

<Ark
  as="div"
  {...rest}
  aria-disabled={sortable.disabled || undefined}
  aria-label={(rest as { "aria-label"?: string })["aria-label"] ?? "Drag to reorder"}
  class={item.slots.handle({
  class: cn(sortable.disabled && "pointer-events-none opacity-50", className),
})}
  data-part="handle"
  data-scope="sortable"
  draggable={!sortable.disabled}
  ondragend={() => sortable.endDrag()}
  ondragstart={(event) => {
  if (sortable.disabled) {
    event.preventDefault();
    return;
  }
  event.stopPropagation();
  sortable.startDrag(item.id, event);
}}
  onkeydown={(event) => {
  if (sortable.disabled) return;
  const movePrev =
    sortable.orientation === "vertical" ? event.key === "ArrowUp" : event.key === "ArrowLeft";
  const moveNext =
    sortable.orientation === "vertical" ? event.key === "ArrowDown" : event.key === "ArrowRight";
  if (!(event.altKey && (movePrev || moveNext))) return;
  event.preventDefault();
  sortable.moveItem(item.id, movePrev ? -1 : 1);
}}
  role="button"
  tabindex={sortable.disabled ? -1 : 0}
>
  {#if children}
    {@render children()}
  {:else}
    <DotsSixVerticalIcon />
  {/if}
</Ark>
