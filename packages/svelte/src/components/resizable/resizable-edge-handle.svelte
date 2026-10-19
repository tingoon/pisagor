<script lang="ts">
  import type { ResizableEdgeHandleRootContract } from "@pisagor/contracts";
  import { resizableEdgeHandleRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { DotsSixVerticalIcon } from "phosphor-svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";

  type ResizableHandlePosition = "bottom" | "center" | "top";
  type ResizableEdgePlacement = "end" | "start";

  type Props = HTMLButtonAttributes & {
    handlePosition?: ResizableHandlePosition;
    label: string;
    /** Maximum width in pixels, used by the End key and `aria-valuemax`. */
    maxWidth?: number;
    minWidth?: number;
    /** Width change in pixels per arrow key press. @defaultValue 10 */
    step?: number;
    onResizeChange?: (width: number) => void;
    onResizeEnd?: () => void;
    onResizeStart?: () => void;
    onWidthChange: (width: number) => void;
    placement: ResizableEdgePlacement;
    width: number;
  } & ResizableEdgeHandleRootContract;

  let {
    placement,
    handlePosition = "center",
    label,
    minWidth = 1,
    maxWidth,
    step = 10,
    onkeydown,
    width,
    onResizeChange,
    onResizeEnd,
    onResizeStart,
    onWidthChange,
    recipe = resizableEdgeHandleRecipe,
    class: className,
    ...rest
  }: Props = $props();

  let initialWidth = $state(0);
  let startX = $state(0);
  let startWidth = $state(0);
  let liveWidth = $state(0);
  const isStart = $derived(placement === "start");
  const edgeHandle = $derived(recipe({ handlePosition, placement }));

  $effect.pre(() => {
    if (initialWidth === 0 && width > 0) {
      initialWidth = width;
      startWidth = width;
      liveWidth = width;
    }
  });

  function applyWidth(nextWidth: number) {
    liveWidth = nextWidth;
    startWidth = nextWidth;
    onResizeChange?.(nextWidth);
    onWidthChange(nextWidth);
  }

  function clamp(value: number) {
    return Math.min(
      maxWidth ?? Number.POSITIVE_INFINITY,
      Math.max(minWidth, value),
    );
  }

  function handleKeyDown(
    event: KeyboardEvent & { currentTarget: HTMLButtonElement },
  ) {
    onkeydown?.(event);
    const grow = isStart ? "ArrowRight" : "ArrowLeft";
    const shrink = isStart ? "ArrowLeft" : "ArrowRight";
    const next =
      event.key === grow
        ? width + step
        : event.key === shrink
          ? width - step
          : event.key === "Home"
            ? minWidth
            : event.key === "End" && maxWidth !== undefined
              ? maxWidth
              : event.key === "Enter"
                ? initialWidth
                : undefined;
    if (next === undefined) return;
    event.preventDefault();
    applyWidth(clamp(next));
  }

  function handleDoubleClick(event: MouseEvent) {
    event.preventDefault();
    onResizeEnd?.();
    applyWidth(initialWidth);
  }

  function handleLostPointerCapture() {
    onResizeEnd?.();
    onWidthChange(liveWidth);
  }

  function handlePointerDown(
    event: PointerEvent & { currentTarget: HTMLButtonElement },
  ) {
    event.currentTarget.setPointerCapture(event.pointerId);
    startX = event.clientX;
    startWidth = width;
    liveWidth = width;
    onResizeStart?.();
  }

  function handlePointerMove(
    event: PointerEvent & { currentTarget: HTMLButtonElement },
  ) {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    const delta = event.clientX - startX;
    const next = clamp(isStart ? startWidth + delta : startWidth - delta);
    liveWidth = next;
    onResizeChange?.(next);
  }

  function handlePointerUp(
    event: PointerEvent & { currentTarget: HTMLButtonElement },
  ) {
    event.currentTarget.releasePointerCapture(event.pointerId);
    onResizeEnd?.();
    onWidthChange(liveWidth);
  }
</script>

<!-- biome-ignore lint/a11y/useSemanticElements: focusable window-splitter handle; <hr> cannot take focus or children -->
<button
  {...rest}
  aria-label={label}
  aria-orientation="vertical"
  aria-valuemax={maxWidth}
  aria-valuemin={minWidth}
  aria-valuenow={Math.round(width)}
  class={edgeHandle.base({ class: cn(className) })}
  data-handle-position={handlePosition}
  data-part="edge-handle"
  data-scope="resizable"
  ondblclick={handleDoubleClick}
  onkeydown={handleKeyDown}
  onlostpointercapture={handleLostPointerCapture}
  onpointerdown={handlePointerDown}
  onpointermove={handlePointerMove}
  onpointerup={handlePointerUp}
  role="separator"
  type="button"
>
  <span class={edgeHandle.grip()}>
    <DotsSixVerticalIcon class={edgeHandle.icon()} />
  </span>
</button>
