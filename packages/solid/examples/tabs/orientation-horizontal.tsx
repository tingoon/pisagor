/** @jsxImportSource solid-js */
import { Tabs } from "@pisagor/solid";
import { numberedTabs } from "./helpers";

export function OrientationHorizontal() {
  return <Tabs defaultValue="tab-1" items={numberedTabs()} />;
}
