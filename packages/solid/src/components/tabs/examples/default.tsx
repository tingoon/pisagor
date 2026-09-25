import { Tabs } from "../index";
import { profileTabs } from "./helpers";

export function Default() {
  return <Tabs defaultValue="tab-1" items={profileTabs()} />;
}
