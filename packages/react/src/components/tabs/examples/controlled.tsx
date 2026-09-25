import { Button } from "@pisagor/react";
import { useState } from "react";
import { Tabs } from "..";
export function Controlled() {
  const [value, setValue] = useState("profile");

  return (
    <div className="flex flex-col gap-2">
      <Tabs
        items={[
          {
            content: (
              <p className="text-muted-foreground text-sm">
                Manage your profile information and preferences.
              </p>
            ),
            label: "Profile",
            value: "profile",
          },
          {
            content: (
              <p className="text-muted-foreground text-sm">
                Customize notifications, theme, and text density.
              </p>
            ),
            label: "Settings",
            value: "settings",
          },
          {
            content: (
              <p className="text-muted-foreground text-sm">
                Update your password and security settings.
              </p>
            ),
            label: "Security",
            value: "security",
          },
        ]}
        onValueChange={(e) => setValue(e.value)}
        value={value}
      />
      <div className="flex gap-2">
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
