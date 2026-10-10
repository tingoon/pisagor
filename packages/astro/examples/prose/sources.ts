import aRaw from "./a.astro?raw";
import blockquoteRaw from "./blockquote.astro?raw";
import custom_recipeRaw from "./custom-recipe.astro?raw";
import defaultRaw from "./default.astro?raw";
import detailsRaw from "./details.astro?raw";
import dlRaw from "./dl.astro?raw";
import h1Raw from "./h1.astro?raw";
import h2Raw from "./h2.astro?raw";
import h3Raw from "./h3.astro?raw";
import h4Raw from "./h4.astro?raw";
import h5Raw from "./h5.astro?raw";
import h6Raw from "./h6.astro?raw";
import htmlRaw from "./html.astro?raw";
import html_tableRaw from "./html-table.astro?raw";
import inline_codeRaw from "./inline-code.astro?raw";
import kbdRaw from "./kbd.astro?raw";
import listRaw from "./list.astro?raw";
import markRaw from "./mark.astro?raw";
import mediaRaw from "./media.astro?raw";
import not_proseRaw from "./not-prose.astro?raw";
import olRaw from "./ol.astro?raw";
import pRaw from "./p.astro?raw";
import separatorRaw from "./separator.astro?raw";
import smallRaw from "./small.astro?raw";

export const imports = `---
import { Prose, ScrollArea } from "@pisagor/astro";
---`;

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
