import custom_recipeRaw from "./custom-recipe.tsx?raw";
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

export const imports = `import { Item } from "@pisagor/solid";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  Group: groupRaw,
  Header: headerRaw,
  Icon: iconRaw,
  Image: imageRaw,
  Link: linkRaw,
  Variants: variantsRaw,
  WithAvatar: with_avatarRaw,
  WithMedia: with_mediaRaw,
} as const;
