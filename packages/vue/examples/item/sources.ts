import CustomRecipe from "./custom-recipe.vue?raw";
import CustomSpacing from "./custom-spacing.vue?raw";
import Default from "./default.vue?raw";
import Group from "./group.vue?raw";
import Header from "./header.vue?raw";
import Icon from "./icon.vue?raw";
import Image from "./image.vue?raw";
import Link from "./link.vue?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";
import WithAvatar from "./with-avatar.vue?raw";
import WithMedia from "./with-media.vue?raw";

export const imports = `import { Item } from "@pisagor/vue";`;

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
