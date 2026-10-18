import { Tabs } from "@pisagor/solid";
import { GearIcon, ShieldIcon, UserIcon } from "@squidlab/phosphor-solid/icons";

export function WithIcons() {
  return (
    <Tabs
      defaultValue="tab-1"
      items={[
        {
          content: (
            <p class="text-muted-foreground p-4 text-center text-xs">
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
            <p class="text-muted-foreground p-4 text-center text-xs">
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
            <p class="text-muted-foreground p-4 text-center text-xs">
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
