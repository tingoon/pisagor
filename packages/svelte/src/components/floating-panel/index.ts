import FloatingPanelBody from "./floating-panel-body.svelte";
import FloatingPanelCloseTrigger from "./floating-panel-close-trigger.svelte";
import FloatingPanelContent from "./floating-panel-content.svelte";
import FloatingPanelControl from "./floating-panel-control.svelte";
import FloatingPanelDragTrigger from "./floating-panel-drag-trigger.svelte";
import FloatingPanelFooter from "./floating-panel-footer.svelte";
import FloatingPanelHeader from "./floating-panel-header.svelte";
import FloatingPanelMaximize from "./floating-panel-maximize.svelte";
import FloatingPanelMinimize from "./floating-panel-minimize.svelte";
import FloatingPanelResizeTrigger from "./floating-panel-resize-trigger.svelte";
import FloatingPanelRestore from "./floating-panel-restore.svelte";
import FloatingPanelRoot from "./floating-panel-root.svelte";
import FloatingPanelStageTrigger from "./floating-panel-stage-trigger.svelte";
import FloatingPanelTitle from "./floating-panel-title.svelte";
import FloatingPanelTrigger from "./floating-panel-trigger.svelte";

export const FloatingPanel = Object.assign(FloatingPanelRoot, {
  Body: FloatingPanelBody,
  CloseTrigger: FloatingPanelCloseTrigger,
  Content: FloatingPanelContent,
  Control: FloatingPanelControl,
  DragTrigger: FloatingPanelDragTrigger,
  Footer: FloatingPanelFooter,
  Header: FloatingPanelHeader,
  Maximize: FloatingPanelMaximize,
  Minimize: FloatingPanelMinimize,
  ResizeTrigger: FloatingPanelResizeTrigger,
  Restore: FloatingPanelRestore,
  StageTrigger: FloatingPanelStageTrigger,
  Title: FloatingPanelTitle,
  Trigger: FloatingPanelTrigger,
});
