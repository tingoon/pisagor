import type {
  SplitterContextProps,
  SplitterPanelProps,
  SplitterResizeTriggerIndicatorProps,
  SplitterResizeTriggerProps,
  SplitterRootProps,
  SplitterRootProviderProps,
} from "@ark-ui/solid/splitter";
import { Splitter as SplitterPrimitive } from "@ark-ui/solid/splitter";
import {
  resizableEdgeHandleRecipe,
  resizableRecipe,
} from "@pisagor/recipes/resizable";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { DotsSixVerticalIcon } from "../../internal/icons";
import { ResizableSlotsContext, useResizable } from "./resizable.context";

export type {
  SplitterExpandCollapseDetails as ExpandCollapseDetails,
  SplitterPanelData as PanelData,
  SplitterResizeDetails as ResizeDetails,
  SplitterResizeEndDetails as ResizeEndDetails,
  UseSplitterProps,
  UseSplitterReturn,
} from "@ark-ui/solid/splitter";
export {
  createSplitterRegistry as createRegistry,
  useSplitter,
  useSplitterContext,
} from "@ark-ui/solid/splitter";

export type ResizableHandlePosition = "bottom" | "center" | "top";
export type ResizableEdgePlacement = "end" | "start";

export interface ResizableEdgeHandleProps extends ComponentProps<"button"> {
  placement: ResizableEdgePlacement;
  handlePosition?: ResizableHandlePosition;
  minWidth?: number;
  width: number;
  label: string;
  onResizeChange?: (width: number) => void;
  onResizeEnd?: () => void;
  onResizeStart?: () => void;
  onWidthChange: (width: number) => void;
  recipe?: typeof resizableEdgeHandleRecipe;
}

export interface ResizableResizeTriggerProps
  extends SplitterResizeTriggerProps {
  withHandle?: boolean;
}

export interface ResizableRootProps extends SplitterRootProps {
  recipe?: typeof resizableRecipe;
}

export type ResizablePanelProps = SplitterPanelProps;
export type ResizableResizeTriggerIndicatorProps =
  SplitterResizeTriggerIndicatorProps;
export type ResizableContextProps = SplitterContextProps;

export interface ResizableRootProviderProps extends SplitterRootProviderProps {
  recipe?: typeof resizableRecipe;
}

export function ResizableEdgeHandle(
  props: ResizableEdgeHandleProps,
): JSX.Element {
  const [local, rest] = splitProps(props, [
    "placement",
    "handlePosition",
    "label",
    "minWidth",
    "width",
    "onResizeChange",
    "onResizeEnd",
    "onResizeStart",
    "onWidthChange",
    "recipe",
    "class",
  ]);

  const handlePosition = () => local.handlePosition ?? "center";
  const minWidth = () => local.minWidth ?? 1;
  const isStart = () => local.placement === "start";
  const edgeHandle = () =>
    (local.recipe ?? resizableEdgeHandleRecipe)({
      handlePosition: handlePosition(),
      placement: local.placement,
    });

  const initialWidth = { current: local.width };
  const startX = { current: 0 };
  const startWidth = { current: local.width };
  const liveWidth = { current: local.width };

  const applyWidth = (nextWidth: number) => {
    liveWidth.current = nextWidth;
    startWidth.current = nextWidth;
    local.onResizeChange?.(nextWidth);
    local.onWidthChange(nextWidth);
  };

  return (
    <button
      {...rest}
      aria-label={local.label}
      class={edgeHandle().base({ class: cn(local.class) })}
      data-handle-position={handlePosition()}
      data-part="edge-handle"
      data-scope="resizable"
      onDblClick={(event) => {
        event.preventDefault();
        local.onResizeEnd?.();
        applyWidth(initialWidth.current);
      }}
      onLostPointerCapture={() => {
        local.onResizeEnd?.();
        local.onWidthChange(liveWidth.current);
      }}
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        startX.current = event.clientX;
        startWidth.current = local.width;
        liveWidth.current = local.width;
        local.onResizeStart?.();
      }}
      onPointerMove={(event) => {
        if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
          return;
        }
        const delta = event.clientX - startX.current;
        const next = Math.max(
          minWidth(),
          isStart() ? startWidth.current + delta : startWidth.current - delta,
        );
        liveWidth.current = next;
        local.onResizeChange?.(next);
      }}
      onPointerUp={(event) => {
        event.currentTarget.releasePointerCapture(event.pointerId);
        local.onResizeEnd?.();
        local.onWidthChange(liveWidth.current);
      }}
      type="button"
    >
      <span class={edgeHandle().grip()}>
        <DotsSixVerticalIcon class={edgeHandle().icon()} />
      </span>
    </button>
  );
}

export function ResizableRoot(props: ResizableRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? resizableRecipe)();

  return (
    <ResizableSlotsContext value={{ slots: slots() }}>
      <SplitterPrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
      >
        {local.children}
      </SplitterPrimitive.Root>
    </ResizableSlotsContext>
  );
}

export function ResizablePanel(props: ResizablePanelProps): JSX.Element {
  return <SplitterPrimitive.Panel {...props} />;
}

export function ResizableResizeTriggerIndicator(
  props: ResizableResizeTriggerIndicatorProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useResizable();
  return (
    <SplitterPrimitive.ResizeTriggerIndicator
      {...rest}
      class={slots.resizeTriggerIndicator({ class: cn(local.class) })}
    />
  );
}

export function ResizableResizeTrigger(
  props: ResizableResizeTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "withHandle", "class"]);
  const { slots } = useResizable();
  const withHandle = () => local.withHandle ?? false;

  return (
    <SplitterPrimitive.ResizeTrigger
      {...rest}
      aria-label="Resize"
      class={slots.resizeTrigger({ class: cn(local.class) })}
    >
      <Show
        fallback={local.children ?? <ResizableResizeTriggerIndicator />}
        when={withHandle()}
      >
        <div class={slots.resizeTriggerHandle()}>
          <DotsSixVerticalIcon class={slots.resizeTriggerIcon()} />
        </div>
      </Show>
    </SplitterPrimitive.ResizeTrigger>
  );
}

export function ResizableContext(props: ResizableContextProps): JSX.Element {
  return <SplitterPrimitive.Context {...props} />;
}

export function ResizableRootProvider(
  props: ResizableRootProviderProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? resizableRecipe)();

  return (
    <ResizableSlotsContext value={{ slots: slots() }}>
      <SplitterPrimitive.RootProvider
        {...rest}
        class={slots().base({ class: cn(local.class) })}
      >
        {local.children}
      </SplitterPrimitive.RootProvider>
    </ResizableSlotsContext>
  );
}
