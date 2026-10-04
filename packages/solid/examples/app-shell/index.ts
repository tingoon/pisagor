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

export const imports = `import { AppShell } from "@pisagor/solid";`;

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

export * from "./banner";
export * from "./content";
export * from "./default";
export * from "./header";
export * from "./inspectors";
export * from "./main";
export * from "./navigation";
export * from "./panels";
export * from "./rails";
