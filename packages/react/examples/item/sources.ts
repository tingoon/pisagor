import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { CustomSpacingSource as CustomSpacing } from "./custom-spacing";
import { DefaultSource as Default } from "./default";
import { GroupSource as Group } from "./group";
import { HeaderSource as Header } from "./header";
import { IconSource as Icon } from "./icon";
import { ImageSource as Image } from "./image";
import { LinkSource as Link } from "./link";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";
import { WithAvatarSource as WithAvatar } from "./with-avatar";
import { WithMediaSource as WithMedia } from "./with-media";

export const imports = `import { Item } from "@pisagor/react";`;

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
