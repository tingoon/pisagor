import bannerRaw from "./banner.tsx?raw";
import contentRaw from "./content.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import headerRaw from "./header.tsx?raw";
import helpersRaw from "./helpers.tsx?raw";
import inspectorsRaw from "./inspectors.tsx?raw";
import mainRaw from "./main.tsx?raw";
import navigationRaw from "./navigation.tsx?raw";
import panelsRaw from "./panels.tsx?raw";
import railsRaw from "./rails.tsx?raw";

export const imports = `import { AppShell } from "@pisagor/solid";`;

export const sources = {
  Banner: bannerRaw,
  Content: contentRaw,
  Default: defaultRaw,
  Header: headerRaw,
  Helpers: helpersRaw,
  Inspectors: inspectorsRaw,
  Main: mainRaw,
  Navigation: navigationRaw,
  Panels: panelsRaw,
  Rails: railsRaw,
} as const;
