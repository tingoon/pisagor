import { GearIcon, ShieldIcon, UserIcon } from "@phosphor-icons/react";
import { Button, Tabs } from "@pisagor/react";
import { useState } from "react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Tabs,
  parameters: {
    docs: {
      aliases: ["tablist"],
      api: "compound",
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Organizes related content into panels that users switch between without leaving the page.",
      },
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Content: Tabs.Content,
    List: Tabs.List,
    Trigger: Tabs.Trigger,
  },
  title: "Components/Navigation/Tabs",
});

export const Default = meta.story({
  render: () => (
    <Tabs defaultValue="tab-1">
      <Tabs.List>
        <Tabs.Trigger value="tab-1">Profile</Tabs.Trigger>
        <Tabs.Trigger value="tab-2">Settings</Tabs.Trigger>
        <Tabs.Trigger value="tab-3">Security</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-1">
        Profile content
      </Tabs.Content>
      <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-2">
        Settings content
      </Tabs.Content>
      <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-3">
        Security content
      </Tabs.Content>
    </Tabs>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <Tabs defaultValue="tab-1">
        <Tabs.List variant="default">
          <Tabs.Trigger value="tab-1">Profile</Tabs.Trigger>
          <Tabs.Trigger value="tab-2">Settings</Tabs.Trigger>
          <Tabs.Trigger value="tab-3">Security</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-1">
          Default variant
        </Tabs.Content>
        <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-2">
          Content 2
        </Tabs.Content>
        <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-3">
          Content 3
        </Tabs.Content>
      </Tabs>
      <Tabs defaultValue="tab-1">
        <Tabs.List variant="underline">
          <Tabs.Trigger value="tab-1">Profile</Tabs.Trigger>
          <Tabs.Trigger value="tab-2">Settings</Tabs.Trigger>
          <Tabs.Trigger value="tab-3">Security</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-1">
          Underline variant
        </Tabs.Content>
        <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-2">
          Content 2
        </Tabs.Content>
        <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-3">
          Content 3
        </Tabs.Content>
      </Tabs>
      <Tabs defaultValue="tab-1" orientation="vertical">
        <Tabs.List variant="underline">
          <Tabs.Trigger value="tab-1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab-2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab-3">Tab 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-1">
          Underline + vertical
        </Tabs.Content>
        <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-2">
          Content 2
        </Tabs.Content>
        <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-3">
          Content 3
        </Tabs.Content>
      </Tabs>
    </div>
  ),
});

export const OrientationHorizontal = meta.story({
  render: () => (
    <Tabs defaultValue="tab-1">
      <Tabs.List>
        <Tabs.Trigger value="tab-1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab-2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab-3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-1">
        Content 1
      </Tabs.Content>
      <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-2">
        Content 2
      </Tabs.Content>
      <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-3">
        Content 3
      </Tabs.Content>
    </Tabs>
  ),
});

export const OrientationVertical = meta.story({
  render: () => (
    <Tabs defaultValue="tab-1" orientation="vertical">
      <Tabs.List>
        <Tabs.Trigger value="tab-1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab-2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab-3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-1">
        Content 1
      </Tabs.Content>
      <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-2">
        Content 2
      </Tabs.Content>
      <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-3">
        Content 3
      </Tabs.Content>
    </Tabs>
  ),
});

export const Disabled = meta.story({
  render: () => (
    <Tabs defaultValue="tab-1">
      <Tabs.List>
        <Tabs.Trigger value="tab-1">Profile</Tabs.Trigger>
        <Tabs.Trigger disabled value="tab-2">
          Settings
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-1">
        Profile content
      </Tabs.Content>
      <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-2">
        Settings content
      </Tabs.Content>
    </Tabs>
  ),
});

export const WithIcons = meta.story({
  render: () => (
    <Tabs defaultValue="tab-1">
      <Tabs.List>
        <Tabs.Trigger value="tab-1">
          <UserIcon />
          Profile
        </Tabs.Trigger>
        <Tabs.Trigger value="tab-2">
          <GearIcon />
          Settings
        </Tabs.Trigger>
        <Tabs.Trigger value="tab-3">
          <ShieldIcon />
          Security
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-1">
        Profile content
      </Tabs.Content>
      <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-2">
        Settings content
      </Tabs.Content>
      <Tabs.Content className="p-4 text-center text-muted-foreground text-xs" value="tab-3">
        Security content
      </Tabs.Content>
    </Tabs>
  ),
});

export const Controlled = meta.story({
  render: () => {
    const [value, setValue] = useState("profile");

    return (
      <div className="flex flex-col gap-2">
        <Tabs onValueChange={(e) => setValue(e.value)} value={value}>
          <Tabs.List>
            <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
            <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
            <Tabs.Trigger value="security">Security</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="profile">
            <p className="text-muted-foreground text-sm">
              Manage your profile information and preferences.
            </p>
          </Tabs.Content>
          <Tabs.Content value="settings">
            <p className="text-muted-foreground text-sm">
              Customize notifications, theme, and text density.
            </p>
          </Tabs.Content>
          <Tabs.Content value="security">
            <p className="text-muted-foreground text-sm">
              Update your password and security settings.
            </p>
          </Tabs.Content>
        </Tabs>
        <div className="flex gap-2">
          <Button onClick={() => setValue("profile")} size="sm" variant="outline">
            Go to Profile
          </Button>
          <Button onClick={() => setValue("settings")} size="sm" variant="outline">
            Go to Settings
          </Button>
          <Button onClick={() => setValue("security")} size="sm" variant="outline">
            Go to Security
          </Button>
        </div>
      </div>
    );
  },
});
