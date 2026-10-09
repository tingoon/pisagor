import type {
  SplitterContextProps,
  SplitterPanelProps,
  SplitterResizeTriggerIndicatorProps,
  SplitterResizeTriggerProps,
  SplitterRootProps,
  SplitterRootProviderProps,
} from "@ark-ui/solid/splitter";
import { Splitter as SplitterPrimitive } from "@ark-ui/solid/splitter";
import type {
  ResizableEdgeHandleProps as BaseResizableEdgeHandleProps,
  ResizableProps as BaseResizableProps,
  ResizableProps as BaseResizableRootProps,
} from "@pisagor/props";
import { resizableEdgeHandleRecipe, resizableRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createMemo, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { DotsSixVerticalIcon } from "../internal/icons";

// #region Context
const {
  Context: ResizableStylesContext,
  useStyles: useResizable,
  withContext,
  withProvider,
} = createSlotRecipeContext({ name: "Resizable", recipe: resizableRecipe });

// #endregion

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

export interface ResizableEdgeHandleProps
  extends ComponentProps<"button">,
    BaseResizableEdgeHandleProps {
  placement: ResizableEdgePlacement;
  handlePosition?: ResizableHandlePosition;
  minWidth?: number;
  width: number;
  label: string;
  onResizeChange?: (width: number) => void;
  onResizeEnd?: () => void;
  onResizeStart?: () => void;
  onWidthChange: (width: number) => void;
}

export interface ResizableResizeTriggerProps
  extends SplitterResizeTriggerProps {
  withHandle?: boolean;
}

export interface ResizableRootProps
  extends SplitterRootProps,
    BaseResizableRootProps {}

export type ResizablePanelProps = SplitterPanelProps;
export type ResizableResizeTriggerIndicatorProps =
  SplitterResizeTriggerIndicatorProps;
export type ResizableContextProps = SplitterContextProps;

export interface ResizableRootProviderProps
  extends SplitterRootProviderProps,
    BaseResizableProps {}

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
      class={edgeHandle().base({ class: local.class })}
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

export const ResizableRoot: Component<ResizableRootProps> = withProvider(
  SplitterPrimitive.Root,
  { name: "Root", slot: "base" },
);

export function ResizablePanel(props: ResizablePanelProps): JSX.Element {
  return <SplitterPrimitive.Panel {...props} />;
}

export const ResizableResizeTriggerIndicator: Component<ResizableResizeTriggerIndicatorProps> =
  withContext(SplitterPrimitive.ResizeTriggerIndicator, {
    defaultProps: { "data-part": "resize-trigger-indicator" },
    name: "ResizeTriggerIndicator",
    slot: "resizeTriggerIndicator",
  });

export function ResizableResizeTrigger(
  props: ResizableResizeTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "withHandle", "class"]);
  const styles = useResizable();
  const withHandle = () => local.withHandle ?? false;

  return (
    <SplitterPrimitive.ResizeTrigger
      {...rest}
      aria-label="Resize"
      class={styles.slots.resizeTrigger({ class: local.class })}
    >
      <Show
        fallback={local.children ?? <ResizableResizeTriggerIndicator />}
        when={withHandle()}
      >
        <div class={styles.slots.resizeTriggerHandle()}>
          <DotsSixVerticalIcon class={styles.slots.resizeTriggerIcon()} />
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
  const slots = createMemo(() => (local.recipe ?? resizableRecipe)());

  return (
    <ResizableStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <SplitterPrimitive.RootProvider
        {...rest}
        class={slots().base({ class: local.class })}
      >
        {local.children}
      </SplitterPrimitive.RootProvider>
    </ResizableStylesContext>
  );
}

export const Resizable = Object.assign(ResizableRoot, {
  Context: ResizableContext,
  EdgeHandle: ResizableEdgeHandle,
  Panel: ResizablePanel,
  ResizeTrigger: ResizableResizeTrigger,
  ResizeTriggerIndicator: ResizableResizeTriggerIndicator,
  RootProvider: ResizableRootProvider,
});
