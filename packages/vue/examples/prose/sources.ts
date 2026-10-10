import aRaw from "./a.vue?raw";
import blockquoteRaw from "./blockquote.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import detailsRaw from "./details.vue?raw";
import dlRaw from "./dl.vue?raw";
import h1Raw from "./h1.vue?raw";
import h2Raw from "./h2.vue?raw";
import h3Raw from "./h3.vue?raw";
import h4Raw from "./h4.vue?raw";
import h5Raw from "./h5.vue?raw";
import h6Raw from "./h6.vue?raw";
import htmlRaw from "./html.vue?raw";
import html_tableRaw from "./html-table.vue?raw";
import inline_codeRaw from "./inline-code.vue?raw";
import kbdRaw from "./kbd.vue?raw";
import listRaw from "./list.vue?raw";
import markRaw from "./mark.vue?raw";
import mediaRaw from "./media.vue?raw";
import not_proseRaw from "./not-prose.vue?raw";
import olRaw from "./ol.vue?raw";
import pRaw from "./p.vue?raw";
import separatorRaw from "./separator.vue?raw";
import smallRaw from "./small.vue?raw";

export const imports = `import { Prose } from "@pisagor/vue";`;

export const sources = {
  A: aRaw,
  Blockquote: blockquoteRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Details: detailsRaw,
  Dl: dlRaw,
  H1: h1Raw,
  H2: h2Raw,
  H3: h3Raw,
  H4: h4Raw,
  H5: h5Raw,
  H6: h6Raw,
  Html: htmlRaw,
  HtmlTable: html_tableRaw,
  InlineCode: inline_codeRaw,
  Kbd: kbdRaw,
  List: listRaw,
  Mark: markRaw,
  Media: mediaRaw,
  NotProse: not_proseRaw,
  Ol: olRaw,
  P: pRaw,
  Separator: separatorRaw,
  Small: smallRaw,
} as const;
