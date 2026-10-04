import { stripTsxExample } from "@pisagor/utils";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import groupRaw from "./group.tsx?raw";
import headerRaw from "./header.tsx?raw";
import iconRaw from "./icon.tsx?raw";
import imageRaw from "./image.tsx?raw";
import linkRaw from "./link.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_avatarRaw from "./with-avatar.tsx?raw";
import with_mediaRaw from "./with-media.tsx?raw";

export const imports = `import { Item } from "@pisagor/react/item";`;

export const sources = {
  CustomSpacing: stripTsxExample(custom_spacingRaw),
  Default: stripTsxExample(defaultRaw),
  Group: stripTsxExample(groupRaw),
  Header: stripTsxExample(headerRaw),
  Icon: stripTsxExample(iconRaw),
  Image: stripTsxExample(imageRaw),
  Link: stripTsxExample(linkRaw),
  Variants: stripTsxExample(variantsRaw),
  WithAvatar: stripTsxExample(with_avatarRaw),
  WithMedia: stripTsxExample(with_mediaRaw),
} as const;

export { CustomSpacing } from "./custom-spacing";
export { Default } from "./default";
export { Group } from "./group";
export { Header } from "./header";
export { Icon } from "./icon";
export { Image } from "./image";
export { Link } from "./link";
export { Variants } from "./variants";
export { WithAvatar } from "./with-avatar";
export { WithMedia } from "./with-media";
