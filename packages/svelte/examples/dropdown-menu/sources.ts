import Checkboxes from "./checkboxes.svelte?raw";
import Default from "./default.svelte?raw";
import Destructive from "./destructive.svelte?raw";
import GroupLabel from "./group-label.svelte?raw";
import Icons from "./icons.svelte?raw";
import ItemIndicator from "./item-indicator.svelte?raw";
import Link from "./link.svelte?raw";
import Nested from "./nested.svelte?raw";
import Placements from "./placements.svelte?raw";
import QuickItem from "./quick-item.svelte?raw";
import RadioGroup from "./radio-group.svelte?raw";
import Shortcuts from "./shortcuts.svelte?raw";
import WithScroll from "./with-scroll.svelte?raw";
import WithSeparator from "./with-separator.svelte?raw";

export const imports = `import { DropdownMenu } from "@pisagor/svelte";`;

export const sources = {
  Checkboxes,
  Default,
  Destructive,
  GroupLabel,
  Icons,
  ItemIndicator,
  Link,
  Nested,
  Placements,
  QuickItem,
  RadioGroup,
  Shortcuts,
  WithScroll,
  WithSeparator,
} as const;
