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
  ResizableEdgeHandleProps,
  ResizableEdgePlacement,
  ResizableHandlePosition,
  ResizableRootProps,
} from "./resizable";

export const Resizable = Object.assign(ResizableRoot, {
  Context: ResizableContext,
  EdgeHandle: ResizableEdgeHandle,
  Panel: ResizablePanel,
  ResizeTrigger: ResizableResizeTrigger,
  ResizeTriggerIndicator: ResizableResizeTriggerIndicator,
  RootProvider: ResizableRootProvider,
});
