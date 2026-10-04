import { stripTsxExample } from "@pisagor/utils";
import aRaw from "./a.tsx?raw";
import blockquoteRaw from "./blockquote.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import detailsRaw from "./details.tsx?raw";
import dlRaw from "./dl.tsx?raw";
import h1Raw from "./h1.tsx?raw";
import h2Raw from "./h2.tsx?raw";
import h3Raw from "./h3.tsx?raw";
import h4Raw from "./h4.tsx?raw";
import h5Raw from "./h5.tsx?raw";
import h6Raw from "./h6.tsx?raw";
import htmlRaw from "./html.tsx?raw";
import html_tableRaw from "./html-table.tsx?raw";
import inline_codeRaw from "./inline-code.tsx?raw";
import kbdRaw from "./kbd.tsx?raw";
import listRaw from "./list.tsx?raw";
import markRaw from "./mark.tsx?raw";
import mediaRaw from "./media.tsx?raw";
import not_proseRaw from "./not-prose.tsx?raw";
import olRaw from "./ol.tsx?raw";
import pRaw from "./p.tsx?raw";
import separatorRaw from "./separator.tsx?raw";
import smallRaw from "./small.tsx?raw";

export const imports = `import { Prose } from "@pisagor/solid";`;

export const sources = {
  A: stripTsxExample(aRaw),
  Blockquote: stripTsxExample(blockquoteRaw),
  Default: stripTsxExample(defaultRaw),
  Details: stripTsxExample(detailsRaw),
  Dl: stripTsxExample(dlRaw),
  H1: stripTsxExample(h1Raw),
  H2: stripTsxExample(h2Raw),
  H3: stripTsxExample(h3Raw),
  H4: stripTsxExample(h4Raw),
  H5: stripTsxExample(h5Raw),
  H6: stripTsxExample(h6Raw),
  Html: stripTsxExample(htmlRaw),
  HtmlTable: stripTsxExample(html_tableRaw),
  InlineCode: stripTsxExample(inline_codeRaw),
  Kbd: stripTsxExample(kbdRaw),
  List: stripTsxExample(listRaw),
  Mark: stripTsxExample(markRaw),
  Media: stripTsxExample(mediaRaw),
  NotProse: stripTsxExample(not_proseRaw),
  Ol: stripTsxExample(olRaw),
  P: stripTsxExample(pRaw),
  Separator: stripTsxExample(separatorRaw),
  Small: stripTsxExample(smallRaw),
} as const;

export * from "./a";
export * from "./blockquote";
export * from "./default";
export * from "./details";
export * from "./dl";
export * from "./h1";
export * from "./h2";
export * from "./h3";
export * from "./h4";
export * from "./h5";
export * from "./h6";
export * from "./html";
export * from "./html-table";
export * from "./inline-code";
export * from "./kbd";
export * from "./list";
export * from "./mark";
export * from "./media";
export * from "./not-prose";
export * from "./ol";
export * from "./p";
export * from "./separator";
export * from "./small";
