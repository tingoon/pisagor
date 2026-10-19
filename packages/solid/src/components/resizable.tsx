import { Splitter as SplitterPrimitive } from "@ark-ui/solid";
import type {
  SplitterContextProps,
  SplitterPanelProps,
  SplitterResizeTriggerIndicatorProps,
  SplitterResizeTriggerProps,
  SplitterRootProps,
  SplitterRootProviderProps,
} from "@ark-ui/solid";
import type {
  ResizableEdgeHandleRootContract,
  ResizableRootContract,
} from "@pisagor/contracts";
import { resizableEdgeHandleRecipe, resizableRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createMemo, Show, splitProps } from "solid-js";
import { DotsSixVerticalIcon, createSlotRecipeContext } from "../internal";
import { useLocale } from "./provider/context";

// #region Context
const {
  Context: ResizableStylesContext,
  useStyles,
  withContext,
  withProvider,
} = createSlotRecipeContext({ name: "Resizable", recipe: resizableRecipe });

// #endregion

export {
  type SplitterExpandCollapseDetails as ExpandCollapseDetails,
  type SplitterPanelData as PanelData,
  type SplitterResizeDetails as ResizeDetails,
  type SplitterResizeEndDetails as ResizeEndDetails,
  type UseSplitterProps,
  type UseSplitterReturn,
  createSplitterRegistry as createRegistry,
  useSplitter,
  useSplitterContext,
} from "@ark-ui/solid";

export type ResizableHandlePosition = "bottom" | "center" | "top";
export type ResizableEdgePlacement = "end" | "start";

export interface ResizableEdgeHandleProps
  extends ComponentProps<"button">, ResizableEdgeHandleRootContract {
  placement: ResizableEdgePlacement;
  handlePosition?: ResizableHandlePosition;
  minWidth?: number;
  /** Maximum width in pixels, used by the End key and `aria-valuemax`. */
  maxWidth?: number;
  /** Width change in pixels per arrow key press. @defaultValue 10 */
  step?: number;
  width: number;
  label: string;
  onResizeChange?: (width: number) => void;
  onResizeEnd?: () => void;
  onResizeStart?: () => void;
  onWidthChange: (width: number) => void;
}

export interface ResizableResizeTriggerProps extends SplitterResizeTriggerProps {
  withHandle?: boolean;
}

export interface ResizableRootProps
  extends SplitterRootProps, ResizableRootContract {}

export type ResizablePanelProps = SplitterPanelProps;
export type ResizableResizeTriggerIndicatorProps =
  SplitterResizeTriggerIndicatorProps;
export type ResizableContextProps = SplitterContextProps;

export interface ResizableRootProviderProps
  extends SplitterRootProviderProps, ResizableRootContract {}

export function ResizableEdgeHandle(
  props: ResizableEdgeHandleProps,
): JSX.Element {
  const [local, rest] = splitProps(props, [
    "placement",
    "handlePosition",
    "label",
    "minWidth",
    "maxWidth",
    "step",
    "onKeyDown",
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

  const clamp = (value: number) =>
    Math.min(
      local.maxWidth ?? Number.POSITIVE_INFINITY,
      Math.max(minWidth(), value),
    );

  return (
    // biome-ignore lint/a11y/useSemanticElements: focusable window-splitter handle; <hr> cannot take focus or children
    <button
      {...rest}
      aria-label={local.label}
      aria-orientation="vertical"
      aria-valuemax={local.maxWidth}
      aria-valuemin={minWidth()}
      aria-valuenow={Math.round(local.width)}
      class={edgeHandle().base({ class: local.class })}
      data-handle-position={handlePosition()}
      data-part="edge-handle"
      data-scope="resizable"
      onDblClick={(event) => {
        event.preventDefault();
        local.onResizeEnd?.();
        applyWidth(initialWidth.current);
      }}
      onKeyDown={(event) => {
        if (typeof local.onKeyDown === "function") {
          local.onKeyDown(event);
        }
        const step = local.step ?? 10;
        const grow = isStart() ? "ArrowRight" : "ArrowLeft";
        const shrink = isStart() ? "ArrowLeft" : "ArrowRight";
        const next =
          event.key === grow
            ? local.width + step
            : event.key === shrink
              ? local.width - step
              : event.key === "Home"
                ? minWidth()
                : event.key === "End" && local.maxWidth !== undefined
                  ? local.maxWidth
                  : event.key === "Enter"
                    ? initialWidth.current
                    : undefined;
        if (next === undefined) {
          return;
        }
        event.preventDefault();
        applyWidth(clamp(next));
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
        const next = clamp(
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
      role="separator"
      type="button"
    >
      <span class={edgeHandle().grip()}>
        <DotsSixVerticalIcon class={edgeHandle().icon()} />
      </span>
    </button>
  );
}

export const ResizableRoot: Component<ResizableRootProps> =
  withProvider<ResizableRootContract>(SplitterPrimitive.Root, {
    name: "Root",
    slot: "base",
  });

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
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["children", "withHandle", "class"]);
  const styles = useStyles();
  const withHandle = () => local.withHandle ?? false;

  return (
    <SplitterPrimitive.ResizeTrigger
      aria-label={m("resizable.resize")}
      {...rest}
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
