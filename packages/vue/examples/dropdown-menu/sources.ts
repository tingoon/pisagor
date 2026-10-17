import Checkboxes from "./checkboxes.vue?raw";
import Default from "./default.vue?raw";
import Destructive from "./destructive.vue?raw";
import GroupLabel from "./group-label.vue?raw";
import Icons from "./icons.vue?raw";
import ItemIndicator from "./item-indicator.vue?raw";
import Link from "./link.vue?raw";
import Nested from "./nested.vue?raw";
import Placements from "./placements.vue?raw";
import QuickItem from "./quick-item.vue?raw";
import RadioGroup from "./radio-group.vue?raw";
import Shortcuts from "./shortcuts.vue?raw";
import WithScroll from "./with-scroll.vue?raw";
import WithSeparator from "./with-separator.vue?raw";

export const imports = `import { DropdownMenu } from "@pisagor/vue";`;

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
