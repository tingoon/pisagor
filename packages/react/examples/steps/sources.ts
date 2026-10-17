import { ControlledSource as Controlled } from "./controlled";
import { DefaultSource as Default } from "./default";
import { DescriptionSource as Description } from "./description";
import { IconSource as Icon } from "./icon";
import { LoadingSource as Loading } from "./loading";
import { TitleSource as Title } from "./title";
import { VerticalSource as Vertical } from "./vertical";

export const imports = `import { Steps } from "@pisagor/react";`;

export const sources = {
  Controlled,
  Default,
  Description,
  Icon,
  Loading,
  Title,
  Vertical,
} as const;
