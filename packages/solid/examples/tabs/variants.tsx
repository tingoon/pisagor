/** @jsxImportSource solid-js */
import { Tabs } from "@pisagor/solid/tabs";
import { variantTabs } from "./helpers";

export function Variants() {
  return (
    <div class="flex flex-col gap-2">
      <Tabs defaultValue="tab-1" items={variantTabs("Default variant")} />
      <Tabs
        defaultValue="tab-1"
        items={variantTabs("Underline variant")}
        variant="underline"
      />
      <Tabs
        defaultValue="tab-1"
        items={variantTabs("Underline + vertical")}
        orientation="vertical"
        variant="underline"
      />
    </div>
  );
}
