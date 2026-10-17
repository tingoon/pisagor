import { BannerSource as Banner } from "./banner";
import { ContentSource as Content } from "./content";
import { DefaultSource as Default } from "./default";
import { HeaderSource as Header } from "./header";
import { InspectorsSource as Inspectors } from "./inspectors";
import { MainSource as Main } from "./main";
import { NavigationSource as Navigation } from "./navigation";
import { PanelsSource as Panels } from "./panels";
import { RailsSource as Rails } from "./rails";

export const imports = `import { AppShell } from "@pisagor/react";`;

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
