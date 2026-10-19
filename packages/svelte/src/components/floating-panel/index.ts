import FloatingPanelShorthand from "./floating-panel.svelte";
import FloatingPanelBody from "./floating-panel-body.svelte";
import FloatingPanelCloseTrigger from "./floating-panel-close-trigger.svelte";
import FloatingPanelContent from "./floating-panel-content.svelte";
import FloatingPanelControl from "./floating-panel-control.svelte";
import FloatingPanelDragTrigger from "./floating-panel-drag-trigger.svelte";
import FloatingPanelFooter from "./floating-panel-footer.svelte";
import FloatingPanelHeader from "./floating-panel-header.svelte";
import FloatingPanelPositioner from "./floating-panel-positioner.svelte";
import FloatingPanelResizeTrigger from "./floating-panel-resize-trigger.svelte";
import FloatingPanelRoot from "./floating-panel-root.svelte";
import FloatingPanelStageTrigger from "./floating-panel-stage-trigger.svelte";
import FloatingPanelTitle from "./floating-panel-title.svelte";
import FloatingPanelTrigger from "./floating-panel-trigger.svelte";

export type {
  FloatingPanelBodyProps,
  FloatingPanelCloseTriggerProps,
  FloatingPanelContentProps,
  FloatingPanelControlProps,
  FloatingPanelDragTriggerProps,
  FloatingPanelHeaderProps,
  FloatingPanelPositionerProps,
  FloatingPanelResizeTriggerProps,
  FloatingPanelStageTriggerProps,
  FloatingPanelTitleProps,
  FloatingPanelTriggerProps,
} from "@ark-ui/svelte";

export const FloatingPanel = Object.assign(FloatingPanelShorthand, {
  Body: FloatingPanelBody,
  CloseTrigger: FloatingPanelCloseTrigger,
  Content: FloatingPanelContent,
  Control: FloatingPanelControl,
  DragTrigger: FloatingPanelDragTrigger,
  Footer: FloatingPanelFooter,
  Header: FloatingPanelHeader,
  Positioner: FloatingPanelPositioner,
  ResizeTrigger: FloatingPanelResizeTrigger,
  Root: FloatingPanelRoot,
  StageTrigger: FloatingPanelStageTrigger,
  Title: FloatingPanelTitle,
  Trigger: FloatingPanelTrigger,
});
