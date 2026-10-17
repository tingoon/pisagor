import CustomRecipe from "./custom-recipe.astro?raw";
import CustomSpacing from "./custom-spacing.astro?raw";
import Default from "./default.astro?raw";
import Group from "./group.astro?raw";
import Header from "./header.astro?raw";
import Icon from "./icon.astro?raw";
import Image from "./image.astro?raw";
import Link from "./link.astro?raw";
import Sizes from "./sizes.astro?raw";
import Variants from "./variants.astro?raw";
import WithAvatar from "./with-avatar.astro?raw";
import WithMedia from "./with-media.astro?raw";

export const imports = `---
import { Button, Item } from "@pisagor/astro";
---`;

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
