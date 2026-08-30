import {
  FloatingPanelBody,
  FloatingPanelCloseTrigger,
  FloatingPanelContent,
  FloatingPanelControl,
  FloatingPanelDragTrigger,
  FloatingPanelFooter,
  FloatingPanelHeader,
  FloatingPanelMaximize,
  FloatingPanelMinimize,
  FloatingPanelResizeTrigger,
  FloatingPanelRestore,
  FloatingPanelRoot,
  FloatingPanelStageTrigger,
  FloatingPanelTitle,
  FloatingPanelTrigger,
} from "./floating-panel";

export type {
  FloatingPanelCloseTriggerProps,
  FloatingPanelControlProps,
  FloatingPanelDragTriggerProps,
  FloatingPanelHeaderProps,
  FloatingPanelResizeTriggerProps,
  FloatingPanelRootProps,
  FloatingPanelStageTriggerProps,
  FloatingPanelTitleProps,
  FloatingPanelTriggerProps,
} from "@ark-ui/react/floating-panel";

export type {
  FloatingPanelBodyProps,
  FloatingPanelContentProps,
  FloatingPanelFooterProps,
  FloatingPanelMaximizeProps,
  FloatingPanelMinimizeProps,
  FloatingPanelRestoreProps,
} from "./floating-panel";

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
