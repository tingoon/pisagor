import { Tabs } from "@pisagor/react";
import { numberedTabs } from "./helpers";

export function OrientationVertical() {
  return (
    <Tabs defaultValue="tab-1" items={numberedTabs()} orientation="vertical" />
  );
}
