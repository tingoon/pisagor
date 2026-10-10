import custom_recipeRaw from "./custom-recipe.svelte?raw";
import custom_spacingRaw from "./custom-spacing.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import groupRaw from "./group.svelte?raw";
import headerRaw from "./header.svelte?raw";
import iconRaw from "./icon.svelte?raw";
import imageRaw from "./image.svelte?raw";
import linkRaw from "./link.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_avatarRaw from "./with-avatar.svelte?raw";
import with_mediaRaw from "./with-media.svelte?raw";

export const imports = `import { Item } from "@pisagor/svelte";`;

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
