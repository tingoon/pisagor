<script lang="ts">
  import { cn } from "@pisagor/utils";
  import { onMount } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { useLocale } from "../provider/context";
  import { useSortable, useSortableItem } from "./sortable.context";

  const { m } = useLocale();

  /** Drag handle; render your own icon inside. */
  let {
    children,
    class: className,
    ...rest
  }: HTMLAttributes<HTMLButtonElement> = $props();
  const item = useSortableItem();
  const sortable = useSortable();

  onMount(() => {
    sortable.registerHandle(item.id);

    return () => sortable.unregisterHandle(item.id);
  });

  function handleDragStart(event: DragEvent) {
    if (sortable.disabled) {
      event.preventDefault();

      return;
    }
    event.stopPropagation();
    sortable.startDrag(item.id, event);
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (sortable.disabled) return;
    const movePrev =
      sortable.orientation === "vertical"
        ? event.key === "ArrowUp"
        : event.key === "ArrowLeft";
    const moveNext =
      sortable.orientation === "vertical"
        ? event.key === "ArrowDown"
        : event.key === "ArrowRight";
    if (!(event.altKey && (movePrev || moveNext))) return;
    event.preventDefault();
    sortable.moveItem(item.id, movePrev ? -1 : 1);
  }
</script>

<button
  {...rest}
  aria-disabled={sortable.disabled || undefined}
  aria-keyshortcuts={sortable.orientation === "vertical"
    ? "Alt+ArrowUp Alt+ArrowDown"
    : "Alt+ArrowLeft Alt+ArrowRight"}
  aria-label={(rest as { "aria-label"?: string })["aria-label"] ??
    m("sortable.dragHandle")}
  class={item.slots.handle({
    class: cn(className),
    disabled: sortable.disabled,
  })}
  data-part="handle"
  data-scope="sortable"
  disabled={sortable.disabled || undefined}
  draggable={!sortable.disabled}
  ondragend={() => sortable.endDrag()}
  ondragstart={handleDragStart}
  onkeydown={handleKeyDown}
  type="button"
>
  {@render children?.()}
</button>
