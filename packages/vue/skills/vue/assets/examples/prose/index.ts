import { stripVueExample } from "@pisagor/utils";
import aRaw from "./a.vue?raw";
import blockquoteRaw from "./blockquote.vue?raw";
import defaultRaw from "./default.vue?raw";
import detailsRaw from "./details.vue?raw";
import dlRaw from "./dl.vue?raw";
import h1Raw from "./h1.vue?raw";
import h2Raw from "./h2.vue?raw";
import h3Raw from "./h3.vue?raw";
import h4Raw from "./h4.vue?raw";
import h5Raw from "./h5.vue?raw";
import h6Raw from "./h6.vue?raw";
import html_tableRaw from "./html-table.vue?raw";
import html_trustedRaw from "./html-trusted.vue?raw";
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

export const imports = `import { Prose } from "@pisagor/vue/prose";`;

export const sources = {
  A: stripVueExample(aRaw),
  Blockquote: stripVueExample(blockquoteRaw),
  Default: stripVueExample(defaultRaw),
  Details: stripVueExample(detailsRaw),
  Dl: stripVueExample(dlRaw),
  H1: stripVueExample(h1Raw),
  H2: stripVueExample(h2Raw),
  H3: stripVueExample(h3Raw),
  H4: stripVueExample(h4Raw),
  H5: stripVueExample(h5Raw),
  H6: stripVueExample(h6Raw),
  HtmlTable: stripVueExample(html_tableRaw),
  HtmlTrusted: stripVueExample(html_trustedRaw),
  InlineCode: stripVueExample(inline_codeRaw),
  Kbd: stripVueExample(kbdRaw),
  List: stripVueExample(listRaw),
  Mark: stripVueExample(markRaw),
  Media: stripVueExample(mediaRaw),
  NotProse: stripVueExample(not_proseRaw),
  Ol: stripVueExample(olRaw),
  P: stripVueExample(pRaw),
  Separator: stripVueExample(separatorRaw),
  Small: stripVueExample(smallRaw),
} as const;

export { default as A } from "./a.vue";
export { default as Blockquote } from "./blockquote.vue";
export { default as Default } from "./default.vue";
export { default as Details } from "./details.vue";
export { default as Dl } from "./dl.vue";
export { default as H1 } from "./h1.vue";
export { default as H2 } from "./h2.vue";
export { default as H3 } from "./h3.vue";
export { default as H4 } from "./h4.vue";
export { default as H5 } from "./h5.vue";
export { default as H6 } from "./h6.vue";
export { default as HtmlTable } from "./html-table.vue";
export { default as HtmlTrusted } from "./html-trusted.vue";
export { default as InlineCode } from "./inline-code.vue";
export { default as Kbd } from "./kbd.vue";
export { default as List } from "./list.vue";
export { default as Mark } from "./mark.vue";
export { default as Media } from "./media.vue";
export { default as NotProse } from "./not-prose.vue";
export { default as Ol } from "./ol.vue";
export { default as P } from "./p.vue";
export { default as Separator } from "./separator.vue";
export { default as Small } from "./small.vue";
