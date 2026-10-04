import { stripSvelteExample } from "@pisagor/utils";
import aRaw from "./a.svelte?raw";
import blockquoteRaw from "./blockquote.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import detailsRaw from "./details.svelte?raw";
import dlRaw from "./dl.svelte?raw";
import h1Raw from "./h1.svelte?raw";
import h2Raw from "./h2.svelte?raw";
import h3Raw from "./h3.svelte?raw";
import h4Raw from "./h4.svelte?raw";
import h5Raw from "./h5.svelte?raw";
import h6Raw from "./h6.svelte?raw";
import htmlRaw from "./html.svelte?raw";
import html_tableRaw from "./html-table.svelte?raw";
import inline_codeRaw from "./inline-code.svelte?raw";
import kbdRaw from "./kbd.svelte?raw";
import listRaw from "./list.svelte?raw";
import markRaw from "./mark.svelte?raw";
import mediaRaw from "./media.svelte?raw";
import not_proseRaw from "./not-prose.svelte?raw";
import olRaw from "./ol.svelte?raw";
import pRaw from "./p.svelte?raw";
import separatorRaw from "./separator.svelte?raw";
import smallRaw from "./small.svelte?raw";

export const imports = `import { Prose } from "@pisagor/svelte/prose";`;

export const sources = {
  A: stripSvelteExample(aRaw),
  Blockquote: stripSvelteExample(blockquoteRaw),
  Default: stripSvelteExample(defaultRaw),
  Details: stripSvelteExample(detailsRaw),
  Dl: stripSvelteExample(dlRaw),
  H1: stripSvelteExample(h1Raw),
  H2: stripSvelteExample(h2Raw),
  H3: stripSvelteExample(h3Raw),
  H4: stripSvelteExample(h4Raw),
  H5: stripSvelteExample(h5Raw),
  H6: stripSvelteExample(h6Raw),
  Html: stripSvelteExample(htmlRaw),
  HtmlTable: stripSvelteExample(html_tableRaw),
  InlineCode: stripSvelteExample(inline_codeRaw),
  Kbd: stripSvelteExample(kbdRaw),
  List: stripSvelteExample(listRaw),
  Mark: stripSvelteExample(markRaw),
  Media: stripSvelteExample(mediaRaw),
  NotProse: stripSvelteExample(not_proseRaw),
  Ol: stripSvelteExample(olRaw),
  P: stripSvelteExample(pRaw),
  Separator: stripSvelteExample(separatorRaw),
  Small: stripSvelteExample(smallRaw),
} as const;

export { default as A } from "./a.svelte";
export { default as Blockquote } from "./blockquote.svelte";
export { default as Default } from "./default.svelte";
export { default as Details } from "./details.svelte";
export { default as Dl } from "./dl.svelte";
export { default as H1 } from "./h1.svelte";
export { default as H2 } from "./h2.svelte";
export { default as H3 } from "./h3.svelte";
export { default as H4 } from "./h4.svelte";
export { default as H5 } from "./h5.svelte";
export { default as H6 } from "./h6.svelte";
export { default as Html } from "./html.svelte";
export { default as HtmlTable } from "./html-table.svelte";
export { default as InlineCode } from "./inline-code.svelte";
export { default as Kbd } from "./kbd.svelte";
export { default as List } from "./list.svelte";
export { default as Mark } from "./mark.svelte";
export { default as Media } from "./media.svelte";
export { default as NotProse } from "./not-prose.svelte";
export { default as Ol } from "./ol.svelte";
export { default as P } from "./p.svelte";
export { default as Separator } from "./separator.svelte";
export { default as Small } from "./small.svelte";
