import { Tabs } from "@pisagor/react";
import { profileTabs } from "./helpers";

export function WithoutIndicator() {
  return (
    <Tabs defaultValue="tab-1" items={profileTabs()} showIndicator={false} />
  );
}
