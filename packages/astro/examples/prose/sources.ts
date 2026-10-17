import A from "./a.astro?raw";
import Blockquote from "./blockquote.astro?raw";
import CustomRecipe from "./custom-recipe.astro?raw";
import Default from "./default.astro?raw";
import Details from "./details.astro?raw";
import Dl from "./dl.astro?raw";
import H1 from "./h1.astro?raw";
import H2 from "./h2.astro?raw";
import H3 from "./h3.astro?raw";
import H4 from "./h4.astro?raw";
import H5 from "./h5.astro?raw";
import H6 from "./h6.astro?raw";
import Html from "./html.astro?raw";
import HtmlTable from "./html-table.astro?raw";
import InlineCode from "./inline-code.astro?raw";
import Kbd from "./kbd.astro?raw";
import List from "./list.astro?raw";
import Mark from "./mark.astro?raw";
import Media from "./media.astro?raw";
import NotProse from "./not-prose.astro?raw";
import Ol from "./ol.astro?raw";
import P from "./p.astro?raw";
import Separator from "./separator.astro?raw";
import Small from "./small.astro?raw";

export const imports = `---
import { Prose, ScrollArea } from "@pisagor/astro";
---`;

export const sources = {
  A,
  Blockquote,
  CustomRecipe,
  Default,
  Details,
  Dl,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Html,
  HtmlTable,
  InlineCode,
  Kbd,
  List,
  Mark,
  Media,
  NotProse,
  Ol,
  P,
  Separator,
  Small,
} as const;
