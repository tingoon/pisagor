import {
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameRoot,
  FrameTitle,
} from "./frame";

export type {
  FrameDescriptionProps,
  FrameFooterProps,
  FrameHeaderProps,
  FramePanelProps,
  FrameRootProps,
  FrameTitleProps,
} from "./frame";

export const Frame = Object.assign(FrameRoot, {
  Description: FrameDescription,
  Footer: FrameFooter,
  Header: FrameHeader,
  Panel: FramePanel,
  Title: FrameTitle,
});
