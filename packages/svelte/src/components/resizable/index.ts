import {
  createSplitterRegistry as createRegistry,
  useSplitter,
  useSplitterContext,
} from "@ark-ui/svelte";
import type {
  SplitterExpandCollapseDetails,
  SplitterPanelData,
  SplitterResizeDetails,
  SplitterResizeEndDetails,
  UseSplitterProps,
  UseSplitterReturn,
} from "@ark-ui/svelte";
import ResizableContext from "./resizable-context.svelte";
import ResizableEdgeHandle from "./resizable-edge-handle.svelte";
import ResizablePanel from "./resizable-panel.svelte";
import ResizableResizeTrigger from "./resizable-resize-trigger.svelte";
import ResizableResizeTriggerHandle from "./resizable-resize-trigger-handle.svelte";
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
  ResizeTriggerHandle: ResizableResizeTriggerHandle,
  ResizeTriggerIndicator: ResizableResizeTriggerIndicator,
  Root: ResizableRoot,
  RootProvider: ResizableRootProvider,
});
