import {
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameRoot,
  FrameTitle,
} from "./frame";

export type { FrameHeaderProps, FrameRootProps } from "./frame";

export const Frame = Object.assign(FrameRoot, {
  Description: FrameDescription,
  Footer: FrameFooter,
  Header: FrameHeader,
  Panel: FramePanel,
  Title: FrameTitle,
});
