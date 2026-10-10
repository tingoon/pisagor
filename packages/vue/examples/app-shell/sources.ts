import bannerRaw from "./banner.ts?raw";
import contentRaw from "./content.ts?raw";
import defaultRaw from "./default.ts?raw";
import headerRaw from "./header.ts?raw";
import inspectorsRaw from "./inspectors.ts?raw";
import mainRaw from "./main.ts?raw";
import navigationRaw from "./navigation.ts?raw";
import panelsRaw from "./panels.ts?raw";
import railsRaw from "./rails.ts?raw";

export const imports = `import { AppShell } from "@pisagor/vue";`;

export const sources = {
  Banner: bannerRaw,
  Content: contentRaw,
  Default: defaultRaw,
  Header: headerRaw,
  Inspectors: inspectorsRaw,
  Main: mainRaw,
  Navigation: navigationRaw,
  Panels: panelsRaw,
  Rails: railsRaw,
} as const;
