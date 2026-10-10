import custom_recipeRaw from "./custom-recipe.astro?raw";
import custom_spacingRaw from "./custom-spacing.astro?raw";
import defaultRaw from "./default.astro?raw";
import groupRaw from "./group.astro?raw";
import headerRaw from "./header.astro?raw";
import iconRaw from "./icon.astro?raw";
import imageRaw from "./image.astro?raw";
import linkRaw from "./link.astro?raw";
import variantsRaw from "./variants.astro?raw";
import with_avatarRaw from "./with-avatar.astro?raw";
import with_mediaRaw from "./with-media.astro?raw";

export const imports = `---
import { Button, Item } from "@pisagor/astro";
---`;

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
