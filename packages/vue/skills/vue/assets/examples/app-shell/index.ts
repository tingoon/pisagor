import { stripVueExample } from "@pisagor/utils";
import bannerRaw from "./banner.ts?raw";
import contentRaw from "./content.ts?raw";
import defaultRaw from "./default.ts?raw";
import headerRaw from "./header.ts?raw";
import inspectorsRaw from "./inspectors.ts?raw";
import mainRaw from "./main.ts?raw";
import navigationRaw from "./navigation.ts?raw";
import panelsRaw from "./panels.ts?raw";
import railsRaw from "./rails.ts?raw";

export const imports = `import { AppShell } from "@pisagor/vue/app-shell";`;

export const sources = {
  Banner: stripVueExample(bannerRaw),
  Content: stripVueExample(contentRaw),
  Default: stripVueExample(defaultRaw),
  Header: stripVueExample(headerRaw),
  Inspectors: stripVueExample(inspectorsRaw),
  Main: stripVueExample(mainRaw),
  Navigation: stripVueExample(navigationRaw),
  Panels: stripVueExample(panelsRaw),
  Rails: stripVueExample(railsRaw),
} as const;

export { default as Banner } from "./banner";
export { default as Content } from "./content";
export { default as Default } from "./default";
export { default as Header } from "./header";
export { default as Inspectors } from "./inspectors";
export { default as Main } from "./main";
export { default as Navigation } from "./navigation";
export { default as Panels } from "./panels";
export { default as Rails } from "./rails";
