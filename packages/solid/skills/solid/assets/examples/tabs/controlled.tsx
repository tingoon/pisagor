/** @jsxImportSource solid-js */

import { Button } from "@pisagor/solid";
import { Tabs } from "@pisagor/solid/tabs";
import { createSignal } from "solid-js";
export function Controlled() {
  const [value, setValue] = createSignal("profile");

  return (
    <div class="flex flex-col gap-2">
      <Tabs
        items={[
          {
            content: (
              <p class="text-muted-foreground text-sm">
                Manage your profile information and preferences.
              </p>
            ),
            label: "Profile",
            value: "profile",
          },
          {
            content: (
              <p class="text-muted-foreground text-sm">
                Customize notifications, theme, and text density.
              </p>
            ),
            label: "Settings",
            value: "settings",
          },
          {
            content: (
              <p class="text-muted-foreground text-sm">
                Update your password and security settings.
              </p>
            ),
            label: "Security",
            value: "security",
          },
        ]}
        onValueChange={(e) => setValue(e.value)}
        value={value()}
      />
      <div class="flex gap-2">
        <Button onClick={() => setValue("profile")} size="sm" variant="outline">
          Go to Profile
        </Button>
        <Button
          onClick={() => setValue("settings")}
          size="sm"
          variant="outline"
        >
          Go to Settings
        </Button>
        <Button
          onClick={() => setValue("security")}
          size="sm"
          variant="outline"
        >
          Go to Security
        </Button>
      </div>
    </div>
  );
}
