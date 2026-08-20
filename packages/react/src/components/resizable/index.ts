import {
  ResizableContext,
  ResizableEdgeHandle,
  ResizablePanel,
  ResizableResizeTrigger,
  ResizableResizeTriggerIndicator,
  ResizableRoot,
  ResizableRootProvider,
} from "./resizable";

export {
  createRegistry,
  type ExpandCollapseDetails,
  type PanelData,
  type ResizableContextProps,
  type ResizableEdgeHandleProps,
  type ResizableEdgePlacement,
  type ResizableHandlePosition,
  type ResizablePanelProps,
  type ResizableResizeTriggerIndicatorProps,
  type ResizableResizeTriggerProps,
  type ResizableRootProps,
  type ResizableRootProviderProps,
  type ResizeDetails,
  type ResizeEndDetails,
  type UseSplitterProps,
  type UseSplitterReturn,
  useSplitter,
  useSplitterContext,
} from "./resizable";

export const Resizable = Object.assign(ResizableRoot, {
  Context: ResizableContext,
  EdgeHandle: ResizableEdgeHandle,
  Panel: ResizablePanel,
  ResizeTrigger: ResizableResizeTrigger,
  ResizeTriggerIndicator: ResizableResizeTriggerIndicator,
  RootProvider: ResizableRootProvider,
});
