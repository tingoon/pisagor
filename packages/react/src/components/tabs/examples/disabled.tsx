import { Tabs } from "..";
import { profileTabs } from "./helpers";

export function Disabled() {
  return (
    <Tabs
      defaultValue="tab-1"
      items={profileTabs().map((tab) => (tab.value === "tab-2" ? { ...tab, disabled: true } : tab))}
    />
  );
}
