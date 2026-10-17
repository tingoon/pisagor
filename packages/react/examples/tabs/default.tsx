import source from "./default.tsx?raw";
import { Tabs } from "@pisagor/react";
import { profileTabs } from "./helpers";

export function Default() {
  return <Tabs defaultValue="tab-1" items={profileTabs()} />;
}

export { source as DefaultSource };
