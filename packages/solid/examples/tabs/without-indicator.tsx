import { Tabs } from "@pisagor/solid";
import { profileTabs } from "./helpers";

export function WithoutIndicator() {
  return (
    <Tabs defaultValue="tab-1" items={profileTabs()} showIndicator={false} />
  );
}
