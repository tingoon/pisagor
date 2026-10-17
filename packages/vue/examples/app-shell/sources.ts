import Banner from "./banner.ts?raw";
import Content from "./content.ts?raw";
import Default from "./default.ts?raw";
import Header from "./header.ts?raw";
import Inspectors from "./inspectors.ts?raw";
import Main from "./main.ts?raw";
import Navigation from "./navigation.ts?raw";
import Panels from "./panels.ts?raw";
import Rails from "./rails.ts?raw";

export const imports = `import { AppShell } from "@pisagor/vue";`;

export const sources = {
  Banner,
  Content,
  Default,
  Header,
  Inspectors,
  Main,
  Navigation,
  Panels,
  Rails,
} as const;
