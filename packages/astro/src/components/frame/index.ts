import FrameRoot from "./frame.astro";
import FrameDescription from "./frame-description.astro";
import FrameFooter from "./frame-footer.astro";
import FrameHeader from "./frame-header.astro";
import FramePanel from "./frame-panel.astro";
import FrameTitle from "./frame-title.astro";

export const Frame = Object.assign(FrameRoot, {
  Description: FrameDescription,
  Footer: FrameFooter,
  Header: FrameHeader,
  Panel: FramePanel,
  Title: FrameTitle,
});
