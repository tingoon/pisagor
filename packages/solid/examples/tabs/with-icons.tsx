import { Tabs } from "@pisagor/solid";
import { GearIcon, ShieldIcon, UserIcon } from "@pisagor/solid/icons";

export function WithIcons() {
  return (
    <Tabs
      defaultValue="tab-1"
      items={[
        {
          content: (
            <p class="p-4 text-center text-muted-foreground text-xs">
              Profile content
            </p>
          ),
          label: (
            <>
              <UserIcon />
              Profile
            </>
          ),
          value: "tab-1",
        },
        {
          content: (
            <p class="p-4 text-center text-muted-foreground text-xs">
              Settings content
            </p>
          ),
          label: (
            <>
              <GearIcon />
              Settings
            </>
          ),
          value: "tab-2",
        },
        {
          content: (
            <p class="p-4 text-center text-muted-foreground text-xs">
              Security content
            </p>
          ),
          label: (
            <>
              <ShieldIcon />
              Security
            </>
          ),
          value: "tab-3",
        },
      ]}
    />
  );
}
