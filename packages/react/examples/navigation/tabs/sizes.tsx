import { Tabs } from "@pisagor/react";
import { profileTabs } from "./helpers";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <Tabs
          defaultValue="tab-1"
          items={profileTabs()}
          key={size}
          size={size}
        />
      ))}
    </div>
  );
}
