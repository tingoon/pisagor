import { LinkBoxRoot, LinkOverlayLink } from "./link-box";

export type { LinkBoxRootProps, LinkOverlayLinkProps } from "./link-box";

export const LinkBox = Object.assign(LinkBoxRoot, {
  Overlay: LinkOverlayLink,
});
