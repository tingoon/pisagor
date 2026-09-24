import FrameDescription from "./frame-description.svelte";
import FrameFooter from "./frame-footer.svelte";
import FrameHeader from "./frame-header.svelte";
import FramePanel from "./frame-panel.svelte";
import FrameRoot from "./frame-root.svelte";
import FrameTitle from "./frame-title.svelte";

export const Frame = Object.assign(FrameRoot, {
  Description: FrameDescription,
  Footer: FrameFooter,
  Header: FrameHeader,
  Panel: FramePanel,
  Title: FrameTitle,
});
