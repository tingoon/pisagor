import { Tabs } from "..";
import { numberedTabs } from "./helpers";

export function OrientationHorizontal() {
  return <Tabs defaultValue="tab-1" items={numberedTabs()} />;
}
