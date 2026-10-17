import A from "./a.vue?raw";
import Blockquote from "./blockquote.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Details from "./details.vue?raw";
import Dl from "./dl.vue?raw";
import H1 from "./h1.vue?raw";
import H2 from "./h2.vue?raw";
import H3 from "./h3.vue?raw";
import H4 from "./h4.vue?raw";
import H5 from "./h5.vue?raw";
import H6 from "./h6.vue?raw";
import Html from "./html.vue?raw";
import HtmlTable from "./html-table.vue?raw";
import InlineCode from "./inline-code.vue?raw";
import Kbd from "./kbd.vue?raw";
import List from "./list.vue?raw";
import Mark from "./mark.vue?raw";
import Media from "./media.vue?raw";
import NotProse from "./not-prose.vue?raw";
import Ol from "./ol.vue?raw";
import P from "./p.vue?raw";
import Separator from "./separator.vue?raw";
import Small from "./small.vue?raw";

export const imports = `import { Prose } from "@pisagor/vue";`;

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
