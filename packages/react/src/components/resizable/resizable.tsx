import { Splitter as SplitterPrimitive } from "@ark-ui/react/splitter";
import { DotsSixVerticalIcon } from "@phosphor-icons/react";
import {
  resizableEdgeHandleVariants,
  resizableResizeTriggerIndicatorVariants,
  resizableResizeTriggerVariants,
  resizableVariants,
} from "@pisagor/styles/ui/resizable";
import { type ComponentProps, useCallback, useRef } from "react";
import type { WithTestId } from "../../internal/types";

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

// #region Variants
const resizeTrigger = resizableResizeTriggerVariants();
// #endregion

// #region Types
export type ResizableHandlePosition = "bottom" | "center" | "top";
export type ResizableEdgePlacement = "end" | "start";

export interface ResizableEdgeHandleProps extends ComponentProps<"button">, WithTestId {
  /** Vertical placement of the visible grip. @defaultValue `"center"` */
  handlePosition?: ResizableHandlePosition;
  /** Accessible label for the resize control. */
  label: string;
  /** Minimum width in pixels. @defaultValue 1 */
  minWidth?: number;
  /** Called during drag for live width updates. */
  onResizeChange?: (width: number) => void;
  /** Called when a resize interaction ends. */
  onResizeEnd?: () => void;
  /** Called when a resize interaction starts. */
  onResizeStart?: () => void;
  /** Called when the width settles after drag or double-click reset. */
  onWidthChange: (width: number) => void;
  /** Which edge of the resizable region the handle sits on. */
  placement: ResizableEdgePlacement;
  /** Current width in pixels. */
  width: number;
}

export interface ResizableResizeTriggerProps
  extends ComponentProps<typeof SplitterPrimitive.ResizeTrigger> {
  /**
   * Whether to show the handle.
   *
   * @defaultValue false
   */
  withHandle?: boolean;
}

export type ResizableRootProps = ComponentProps<typeof SplitterPrimitive.Root> & WithTestId;

export type ResizablePanelProps = ComponentProps<typeof SplitterPrimitive.Panel>;

export type ResizableResizeTriggerIndicatorProps = ComponentProps<
  typeof SplitterPrimitive.ResizeTriggerIndicator
>;

export type ResizableContextProps = ComponentProps<typeof SplitterPrimitive.Context>;

export type ResizableRootProviderProps = ComponentProps<typeof SplitterPrimitive.RootProvider>;
// #endregion

// #region Parts
export function ResizableEdgeHandle({
  className,
  handlePosition = "center",
  label,
  minWidth = 1,
  onResizeChange,
  onResizeEnd,
  onResizeStart,
  onWidthChange,
  placement,
  testId,
  width,
  ...rest
}: ResizableEdgeHandleProps) {
  const initialWidthRef = useRef(width);
  const startXRef = useRef(0);
  const startWidthRef = useRef(width);
  const liveWidthRef = useRef(width);
  const isStart = placement === "start";
  const edgeHandle = resizableEdgeHandleVariants({ handlePosition, placement });

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
      data-testid={testId}
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
          isStart ? startWidthRef.current + delta : startWidthRef.current - delta,
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

export function ResizableRoot({ className, testId, ...rest }: ResizableRootProps) {
  return (
    <SplitterPrimitive.Root
      {...rest}
      className={resizableVariants({ className })}
      data-testid={testId}
    />
  );
}

export function ResizablePanel(props: ResizablePanelProps) {
  return <SplitterPrimitive.Panel {...props} />;
}

export function ResizableResizeTriggerIndicator({
  className,
  ...rest
}: ResizableResizeTriggerIndicatorProps) {
  return (
    <SplitterPrimitive.ResizeTriggerIndicator
      {...rest}
      className={resizableResizeTriggerIndicatorVariants({ className })}
    />
  );
}

export function ResizableResizeTrigger({
  withHandle = false,
  className,
  children,
  ...rest
}: ResizableResizeTriggerProps) {
  return (
    <SplitterPrimitive.ResizeTrigger
      {...rest}
      aria-label="Resize"
      className={resizeTrigger.base({ className })}
    >
      {withHandle ? (
        <div className={resizeTrigger.handle()}>
          <DotsSixVerticalIcon className={resizeTrigger.icon()} />
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

export function ResizableRootProvider(props: ResizableRootProviderProps) {
  return <SplitterPrimitive.RootProvider {...props} />;
}
// #endregion

// #region Display Names
ResizableEdgeHandle.displayName = "Resizable.EdgeHandle";
ResizableRoot.displayName = "Resizable";
ResizablePanel.displayName = "Resizable.Panel";
ResizableResizeTriggerIndicator.displayName = "Resizable.ResizeTriggerIndicator";
ResizableResizeTrigger.displayName = "Resizable.ResizeTrigger";
ResizableContext.displayName = "Resizable.Context";
ResizableRootProvider.displayName = "Resizable.RootProvider";
// #endregion
