import { Splitter as SplitterPrimitive } from "@ark-ui/react";
import type {
  SplitterContextProps,
  SplitterPanelProps,
  SplitterResizeTriggerIndicatorProps,
  SplitterResizeTriggerProps,
  SplitterRootProps,
  SplitterRootProviderProps,
} from "@ark-ui/react";
import { DotsSixVerticalIcon } from "@phosphor-icons/react";
import type {
  ResizableEdgeHandleRootContract,
  ResizableRootContract,
} from "@pisagor/contracts";
import { resizableEdgeHandleRecipe, resizableRecipe } from "@pisagor/recipes";
import { type ComponentProps, useCallback, useRef } from "react";
import { createSlotRecipeContext } from "../internal";
import { useLocale } from "./provider/context";

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
} from "@ark-ui/react";

// #region Context
const {
  Context: ResizableStylesContext,
  useStyles,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Resizable",
  recipe: resizableRecipe,
});
// #endregion

// #region Types
export type ResizableHandlePosition = "bottom" | "center" | "top";
export type ResizableEdgePlacement = "end" | "start";

export interface ResizableEdgeHandleProps
  extends ComponentProps<"button">, ResizableEdgeHandleRootContract {
  /** Which edge of the resizable region the handle sits on. */
  placement: ResizableEdgePlacement;
  /** Vertical placement of the visible grip. @defaultValue `"center"` */
  handlePosition?: ResizableHandlePosition;
  /** Minimum width in pixels. @defaultValue 1 */
  minWidth?: number;
  /** Maximum width in pixels, used by the End key and `aria-valuemax`. */
  maxWidth?: number;
  /** Width change in pixels per arrow key press. @defaultValue 10 */
  step?: number;
  /** Current width in pixels. */
  width: number;
  /** Accessible label for the resize control. */
  label: string;
  /** Called during drag for live width updates. */
  onResizeChange?: (width: number) => void;
  /** Called when a resize interaction ends. */
  onResizeEnd?: () => void;
  /** Called when a resize interaction starts. */
  onResizeStart?: () => void;
  /** Called when the width settles after drag or double-click reset. */
  onWidthChange: (width: number) => void;
}

export interface ResizableResizeTriggerProps extends SplitterResizeTriggerProps {
  /**
   * Whether to show the handle.
   *
   * @defaultValue false
   */
  withHandle?: boolean;
}

export type ResizableRootProps = SplitterRootProps & ResizableRootContract;

export type ResizablePanelProps = SplitterPanelProps;

export type ResizableResizeTriggerIndicatorProps =
  SplitterResizeTriggerIndicatorProps;

export type ResizableContextProps = SplitterContextProps;

export type ResizableRootProviderProps = SplitterRootProviderProps &
  ResizableRootContract;
// #endregion

// #region Parts
export function ResizableEdgeHandle({
  placement,
  handlePosition = "center",
  label,
  minWidth = 1,
  maxWidth,
  step = 10,
  width,
  onKeyDown,
  onResizeChange,
  onResizeEnd,
  onResizeStart,
  onWidthChange,
  recipe = resizableEdgeHandleRecipe,
  className,
  ...rest
}: ResizableEdgeHandleProps) {
  const initialWidthRef = useRef(width);
  const startXRef = useRef(0);
  const startWidthRef = useRef(width);
  const liveWidthRef = useRef(width);
  const isStart = placement === "start";
  const edgeHandle = recipe({ handlePosition, placement });

  const applyWidth = useCallback(
    (nextWidth: number) => {
      liveWidthRef.current = nextWidth;
      startWidthRef.current = nextWidth;
      onResizeChange?.(nextWidth);
      onWidthChange(nextWidth);
    },
    [onResizeChange, onWidthChange],
  );

  const clamp = (value: number) =>
    Math.min(maxWidth ?? Number.POSITIVE_INFINITY, Math.max(minWidth, value));

  return (
    // biome-ignore lint/a11y/useSemanticElements: focusable window-splitter handle; <hr> cannot take focus or children
    <button
      {...rest}
      aria-label={label}
      aria-orientation="vertical"
      aria-valuemax={maxWidth}
      aria-valuemin={minWidth}
      aria-valuenow={Math.round(width)}
      className={edgeHandle.base({ className })}
      data-handle-position={handlePosition}
      data-part="edge-handle"
      data-scope="resizable"
      onDoubleClick={(event) => {
        event.preventDefault();
        onResizeEnd?.();
        applyWidth(initialWidthRef.current);
      }}
      onKeyDown={(event) => {
        onKeyDown?.(event);
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
                    ? initialWidthRef.current
                    : undefined;
        if (next === undefined) {
          return;
        }
        event.preventDefault();
        applyWidth(clamp(next));
      }}
      onLostPointerCapture={() => {
        onResizeEnd?.();
        onWidthChange(liveWidthRef.current);
      }}
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        startXRef.current = event.clientX;
        startWidthRef.current = width;
        liveWidthRef.current = width;
        onResizeStart?.();
      }}
      onPointerMove={(event) => {
        if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
          return;
        }

        const delta = event.clientX - startXRef.current;
        const next = clamp(
          isStart
            ? startWidthRef.current + delta
            : startWidthRef.current - delta,
        );

        liveWidthRef.current = next;
        onResizeChange?.(next);
      }}
      onPointerUp={(event) => {
        event.currentTarget.releasePointerCapture(event.pointerId);
        onResizeEnd?.();
        onWidthChange(liveWidthRef.current);
      }}
      role="separator"
      type="button"
    >
      <span className={edgeHandle.grip()}>
        <DotsSixVerticalIcon className={edgeHandle.icon()} />
      </span>
    </button>
  );
}

export const ResizableRoot = withProvider<ResizableRootProps>(
  SplitterPrimitive.Root,
  {
    name: "Root",
    slot: "base",
  },
);

export function ResizablePanel(props: ResizablePanelProps) {
  return <SplitterPrimitive.Panel {...props} />;
}

export const ResizableResizeTriggerIndicator = withContext(
  SplitterPrimitive.ResizeTriggerIndicator,
  {
    defaultProps: { "data-part": "resize-trigger-indicator" },
    name: "ResizeTriggerIndicator",
    slot: "resizeTriggerIndicator",
  },
);

export function ResizableResizeTrigger({
  children,
  withHandle = false,
  className,
  ...rest
}: ResizableResizeTriggerProps) {
  const { m } = useLocale();
  const { slots } = useStyles();

  return (
    <SplitterPrimitive.ResizeTrigger
      aria-label={m("resizable.resize")}
      {...rest}
      className={slots.resizeTrigger({ className })}
    >
      {withHandle ? (
        <div className={slots.resizeTriggerHandle()}>
          <DotsSixVerticalIcon className={slots.resizeTriggerIcon()} />
        </div>
      ) : (
        (children ?? <ResizableResizeTriggerIndicator />)
      )}
    </SplitterPrimitive.ResizeTrigger>
  );
}

export function ResizableContext(props: ResizableContextProps) {
  return <SplitterPrimitive.Context {...props} />;
}

export function ResizableRootProvider({
  children,
  recipe = resizableRecipe,
  className,
  ...rest
}: ResizableRootProviderProps) {
  const slots = recipe();

  return (
    <ResizableStylesContext value={{ slots, variants: {} as never }}>
      <SplitterPrimitive.RootProvider
        {...rest}
        className={slots.base({ className })}
      >
        {children}
      </SplitterPrimitive.RootProvider>
    </ResizableStylesContext>
  );
}
// #endregion

// #region Display Names
ResizableEdgeHandle.displayName = "Resizable.EdgeHandle";
ResizablePanel.displayName = "Resizable.Panel";
ResizableResizeTrigger.displayName = "Resizable.ResizeTrigger";
ResizableContext.displayName = "Resizable.Context";
ResizableRootProvider.displayName = "Resizable.RootProvider";
// #endregion

export const Resizable = Object.assign(ResizableRoot, {
  Context: ResizableContext,
  EdgeHandle: ResizableEdgeHandle,
  Panel: ResizablePanel,
  ResizeTrigger: ResizableResizeTrigger,
  ResizeTriggerIndicator: ResizableResizeTriggerIndicator,
  RootProvider: ResizableRootProvider,
});
