import Banner from "./banner.svelte?raw";
import Content from "./content.svelte?raw";
import Default from "./default.svelte?raw";
import Header from "./header.svelte?raw";
import Inspectors from "./inspectors.svelte?raw";
import Main from "./main.svelte?raw";
import Navigation from "./navigation.svelte?raw";
import Panels from "./panels.svelte?raw";
import Rails from "./rails.svelte?raw";

export const imports = `import { AppShell } from "@pisagor/svelte";`;

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
