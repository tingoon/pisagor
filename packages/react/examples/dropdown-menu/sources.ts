import { CheckboxesSource as Checkboxes } from "./checkboxes";
import { DefaultSource as Default } from "./default";
import { DestructiveSource as Destructive } from "./destructive";
import { GroupLabelSource as GroupLabel } from "./group-label";
import { IconsSource as Icons } from "./icons";
import { ItemIndicatorSource as ItemIndicator } from "./item-indicator";
import { LinkSource as Link } from "./link";
import { NestedSource as Nested } from "./nested";
import { PlacementsSource as Placements } from "./placements";
import { QuickItemSource as QuickItem } from "./quick-item";
import { RadioGroupSource as RadioGroup } from "./radio-group";
import { ShortcutsSource as Shortcuts } from "./shortcuts";
import { WithScrollSource as WithScroll } from "./with-scroll";
import { WithSeparatorSource as WithSeparator } from "./with-separator";

export const imports = `import { DropdownMenu } from "@pisagor/react";`;

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
