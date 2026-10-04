import bannerRaw from "./banner.svelte?raw";
import contentRaw from "./content.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import headerRaw from "./header.svelte?raw";
import inspectorsRaw from "./inspectors.svelte?raw";
import mainRaw from "./main.svelte?raw";
import navigationRaw from "./navigation.svelte?raw";
import panelsRaw from "./panels.svelte?raw";
import railsRaw from "./rails.svelte?raw";

export const imports = `import { AppShell } from "@pisagor/svelte";`;

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

export { default as Banner } from "./banner.svelte";
export { default as Content } from "./content.svelte";
export { default as Default } from "./default.svelte";
export { default as Header } from "./header.svelte";
export { default as Inspectors } from "./inspectors.svelte";
export { default as Main } from "./main.svelte";
export { default as Navigation } from "./navigation.svelte";
export { default as Panels } from "./panels.svelte";
export { default as Rails } from "./rails.svelte";
