import type {
  SplitterContextProps,
  SplitterPanelProps,
  SplitterResizeTriggerIndicatorProps,
  SplitterResizeTriggerProps,
  SplitterRootProps,
  SplitterRootProviderProps,
} from "@ark-ui/react/splitter";
import { Splitter as SplitterPrimitive } from "@ark-ui/react/splitter";
import { DotsSixVerticalIcon } from "@phosphor-icons/react";
import type {
  ResizableEdgeHandleProps as BaseResizableEdgeHandleProps,
  ResizableProps as BaseResizableRootProps,
  ResizableProps as BaseResizableRootProviderProps,
} from "@pisagor/props";
import { resizableEdgeHandleRecipe, resizableRecipe } from "@pisagor/recipes";
import { type ComponentProps, useCallback, useRef } from "react";
import { createSlotRecipeContext } from "../utils";

export type {
  SplitterExpandCollapseDetails as ExpandCollapseDetails,
  SplitterPanelData as PanelData,
  SplitterResizeDetails as ResizeDetails,
  SplitterResizeEndDetails as ResizeEndDetails,
  UseSplitterProps,
  UseSplitterReturn,
} from "@ark-ui/react/splitter";
export {
  createSplitterRegistry as createRegistry,
  useSplitter,
  useSplitterContext,
} from "@ark-ui/react/splitter";

// #region Context
const {
  Context: ResizableStylesContext,
  useStyles: useResizable,
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
  extends ComponentProps<"button">,
    BaseResizableEdgeHandleProps {
  /** Which edge of the resizable region the handle sits on. */
  placement: ResizableEdgePlacement;
  /** Vertical placement of the visible grip. @defaultValue `"center"` */
  handlePosition?: ResizableHandlePosition;
  /** Minimum width in pixels. @defaultValue 1 */
  minWidth?: number;
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

export interface ResizableResizeTriggerProps
  extends SplitterResizeTriggerProps {
  /**
   * Whether to show the handle.
   *
   * @defaultValue false
   */
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
    BaseResizableRootProviderProps {}
// #endregion

// #region Parts
export function ResizableEdgeHandle({
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

  return (
    <button
      {...rest}
      aria-label={label}
      className={edgeHandle.base({ className })}
      data-handle-position={handlePosition}
      data-part="edge-handle"
      data-scope="resizable"
      onDoubleClick={(event) => {
        event.preventDefault();
        onResizeEnd?.();
        applyWidth(initialWidthRef.current);
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
        const next = Math.max(
          minWidth,
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
      type="button"
    >
      <span className={edgeHandle.grip()}>
        <DotsSixVerticalIcon className={edgeHandle.icon()} />
      </span>
    </button>
  );
}

export const ResizableRoot = withProvider(SplitterPrimitive.Root, {
  name: "Root",
  slot: "base",
}) as import("react").FunctionComponent<ResizableRootProps>;

export function ResizablePanel(props: ResizablePanelProps) {
  return <SplitterPrimitive.Panel {...props} />;
}

export const ResizableResizeTriggerIndicator = withContext(
  SplitterPrimitive.ResizeTriggerIndicator,
  { name: "ResizeTriggerIndicator" },
);

export function ResizableResizeTrigger({
  children,
  withHandle = false,
  className,
  ...rest
}: ResizableResizeTriggerProps) {
  const { slots } = useResizable();

  return (
    <SplitterPrimitive.ResizeTrigger
      {...rest}
      aria-label="Resize"
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
