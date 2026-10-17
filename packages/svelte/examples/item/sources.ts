import CustomRecipe from "./custom-recipe.svelte?raw";
import CustomSpacing from "./custom-spacing.svelte?raw";
import Default from "./default.svelte?raw";
import Group from "./group.svelte?raw";
import Header from "./header.svelte?raw";
import Icon from "./icon.svelte?raw";
import Image from "./image.svelte?raw";
import Link from "./link.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithAvatar from "./with-avatar.svelte?raw";
import WithMedia from "./with-media.svelte?raw";

export const imports = `import { Item } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe,
  CustomSpacing,
  Default,
  Group,
  Header,
  Icon,
  Image,
  Link,
  Sizes,
  Variants,
  WithAvatar,
  WithMedia,
} as const;
