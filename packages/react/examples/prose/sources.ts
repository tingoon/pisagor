import { ASource as A } from "./a";
import { BlockquoteSource as Blockquote } from "./blockquote";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { DetailsSource as Details } from "./details";
import { DlSource as Dl } from "./dl";
import { H1Source as H1 } from "./h1";
import { H2Source as H2 } from "./h2";
import { H3Source as H3 } from "./h3";
import { H4Source as H4 } from "./h4";
import { H5Source as H5 } from "./h5";
import { H6Source as H6 } from "./h6";
import { HtmlSource as Html } from "./html";
import { HtmlTableSource as HtmlTable } from "./html-table";
import { InlineCodeSource as InlineCode } from "./inline-code";
import { KbdSource as Kbd } from "./kbd";
import { ListSource as List } from "./list";
import { MarkSource as Mark } from "./mark";
import { MediaSource as Media } from "./media";
import { NotProseSource as NotProse } from "./not-prose";
import { OlSource as Ol } from "./ol";
import { PSource as P } from "./p";
import { SeparatorSource as Separator } from "./separator";
import { SmallSource as Small } from "./small";

export const imports = `import { Prose } from "@pisagor/react";`;

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
