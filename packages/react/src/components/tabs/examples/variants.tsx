import { Tabs } from "..";
import { variantTabs } from "./helpers";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <Tabs defaultValue="tab-1" items={variantTabs("Default variant")} />
      <Tabs defaultValue="tab-1" items={variantTabs("Underline variant")} variant="underline" />
      <Tabs
        defaultValue="tab-1"
        items={variantTabs("Underline + vertical")}
        orientation="vertical"
        variant="underline"
      />
    </div>
  );
}
