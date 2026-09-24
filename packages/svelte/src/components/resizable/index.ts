import {
  createSplitterRegistry as createRegistry,
  type SplitterExpandCollapseDetails,
  type SplitterPanelData,
  type SplitterResizeDetails,
  type SplitterResizeEndDetails,
  type UseSplitterProps,
  type UseSplitterReturn,
  useSplitter,
  useSplitterContext,
} from "@ark-ui/svelte/splitter";
import ResizableContext from "./resizable-context.svelte";
import ResizableEdgeHandle from "./resizable-edge-handle.svelte";
import ResizablePanel from "./resizable-panel.svelte";
import ResizableResizeTrigger from "./resizable-resize-trigger.svelte";
import ResizableResizeTriggerIndicator from "./resizable-resize-trigger-indicator.svelte";
import ResizableRoot from "./resizable-root.svelte";
import ResizableRootProvider from "./resizable-root-provider.svelte";

export type ExpandCollapseDetails = SplitterExpandCollapseDetails;
export type PanelData = SplitterPanelData;
export type ResizeDetails = SplitterResizeDetails;
export type ResizeEndDetails = SplitterResizeEndDetails;
export type { UseSplitterProps, UseSplitterReturn };

export { createRegistry, useSplitter, useSplitterContext };

export const Resizable = Object.assign(ResizableRoot, {
  Context: ResizableContext,
  EdgeHandle: ResizableEdgeHandle,
  Panel: ResizablePanel,
  ResizeTrigger: ResizableResizeTrigger,
  ResizeTriggerIndicator: ResizableResizeTriggerIndicator,
  Root: ResizableRoot,
  RootProvider: ResizableRootProvider,
});
