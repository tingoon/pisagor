<script lang="ts">
import { resizableEdgeHandleRecipe } from "@pisagor/recipes/resizable";
import { cn } from "@pisagor/utils";
import DotsSixVerticalIcon from "phosphor-svelte/lib/DotsSixVerticalIcon";
import type { HTMLButtonAttributes } from "svelte/elements";

type ResizableHandlePosition = "bottom" | "center" | "top";
type ResizableEdgePlacement = "end" | "start";

type Props = Omit<HTMLButtonAttributes, "class"> & {
  class?: string | undefined;
  handlePosition?: ResizableHandlePosition;
  label: string;
  minWidth?: number;
  onResizeChange?: (width: number) => void;
  onResizeEnd?: () => void;
  onResizeStart?: () => void;
  onWidthChange: (width: number) => void;
  placement: ResizableEdgePlacement;
  recipe?: typeof resizableEdgeHandleRecipe;
  width: number;
};

let {
  placement,
  handlePosition = "center",
  label,
  minWidth = 1,
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
</script>

<button
  {...rest}
  aria-label={label}
  class={edgeHandle.base({ class: cn(className) })}
  data-handle-position={handlePosition}
  data-part="edge-handle"
  data-scope="resizable"
  ondblclick={(event) => {
  event.preventDefault();
  onResizeEnd?.();
  applyWidth(initialWidth);
}}
  onlostpointercapture={() => {
  onResizeEnd?.();
  onWidthChange(liveWidth);
}}
  onpointerdown={(event) => {
  event.currentTarget.setPointerCapture(event.pointerId);
  startX = event.clientX;
  startWidth = width;
  liveWidth = width;
  onResizeStart?.();
}}
  onpointermove={(event) => {
  if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
  const delta = event.clientX - startX;
  const next = Math.max(minWidth, isStart ? startWidth + delta : startWidth - delta);
  liveWidth = next;
  onResizeChange?.(next);
}}
  onpointerup={(event) => {
  event.currentTarget.releasePointerCapture(event.pointerId);
  onResizeEnd?.();
  onWidthChange(liveWidth);
}}
  type="button"
>
  <span class={edgeHandle.grip()}>
    <DotsSixVerticalIcon class={edgeHandle.icon()} />
  </span>
</button>
