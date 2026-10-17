import source from "./orientation-vertical.tsx?raw";
import { Tabs } from "@pisagor/solid";
import { numberedTabs } from "./helpers";

export function OrientationVertical() {
  return (
    <Tabs defaultValue="tab-1" items={numberedTabs()} orientation="vertical" />
  );
}

export { source as OrientationVerticalSource };
