import A from "./a.svelte?raw";
import Blockquote from "./blockquote.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Details from "./details.svelte?raw";
import Dl from "./dl.svelte?raw";
import H1 from "./h1.svelte?raw";
import H2 from "./h2.svelte?raw";
import H3 from "./h3.svelte?raw";
import H4 from "./h4.svelte?raw";
import H5 from "./h5.svelte?raw";
import H6 from "./h6.svelte?raw";
import Html from "./html.svelte?raw";
import HtmlTable from "./html-table.svelte?raw";
import InlineCode from "./inline-code.svelte?raw";
import Kbd from "./kbd.svelte?raw";
import List from "./list.svelte?raw";
import Mark from "./mark.svelte?raw";
import Media from "./media.svelte?raw";
import NotProse from "./not-prose.svelte?raw";
import Ol from "./ol.svelte?raw";
import P from "./p.svelte?raw";
import Separator from "./separator.svelte?raw";
import Small from "./small.svelte?raw";

export const imports = `import { Prose } from "@pisagor/svelte";`;

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
