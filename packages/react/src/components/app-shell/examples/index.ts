import { stripTsxExample } from "@pisagor/utils";
import bannerRaw from "./banner.tsx?raw";
import contentRaw from "./content.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import headerRaw from "./header.tsx?raw";
import inspectorsRaw from "./inspectors.tsx?raw";
import mainRaw from "./main.tsx?raw";
import navigationRaw from "./navigation.tsx?raw";
import panelsRaw from "./panels.tsx?raw";
import railsRaw from "./rails.tsx?raw";

export const imports = `import { AppShell } from "@pisagor/react/app-shell";`;

export const sources = {
  Banner: stripTsxExample(bannerRaw),
  Content: stripTsxExample(contentRaw),
  Default: stripTsxExample(defaultRaw),
  Header: stripTsxExample(headerRaw),
  Inspectors: stripTsxExample(inspectorsRaw),
  Main: stripTsxExample(mainRaw),
  Navigation: stripTsxExample(navigationRaw),
  Panels: stripTsxExample(panelsRaw),
  Rails: stripTsxExample(railsRaw),
} as const;

export { Banner } from "./banner";
export { Content } from "./content";
export { Default } from "./default";
export { Header } from "./header";
export { Inspectors } from "./inspectors";
export { Main } from "./main";
export { Navigation } from "./navigation";
export { Panels } from "./panels";
export { Rails } from "./rails";
