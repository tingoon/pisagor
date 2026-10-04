import {
  ResizableContext,
  ResizableEdgeHandle,
  ResizablePanel,
  ResizableResizeTrigger,
  ResizableResizeTriggerIndicator,
  ResizableRoot,
  ResizableRootProvider,
} from "./resizable";

export type {
  ExpandCollapseDetails,
  PanelData,
  ResizableContextProps,
  ResizableEdgeHandleProps,
  ResizableEdgePlacement,
  ResizableHandlePosition,
  ResizablePanelProps,
  ResizableResizeTriggerIndicatorProps,
  ResizableResizeTriggerProps,
  ResizableRootProps,
  ResizableRootProviderProps,
  ResizeDetails,
  ResizeEndDetails,
  UseSplitterProps,
  UseSplitterReturn,
} from "./resizable";

export { createRegistry, useSplitter, useSplitterContext } from "./resizable";

export const Resizable = Object.assign(ResizableRoot, {
  Context: ResizableContext,
  EdgeHandle: ResizableEdgeHandle,
  Panel: ResizablePanel,
  ResizeTrigger: ResizableResizeTrigger,
  ResizeTriggerIndicator: ResizableResizeTriggerIndicator,
  RootProvider: ResizableRootProvider,
});
