import { GearIcon, ShieldIcon, UserIcon } from "@phosphor-icons/react";
import { Button, Tabs } from "@pisagor/react";
import { useState } from "react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          "Organizes related content into panels that users switch between without leaving the page.",
      },
    },
    metadata: {
      aliases: ["tablist"],
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Content: Tabs.Content,
    List: Tabs.List,
    Root: Tabs.Root,
    Trigger: Tabs.Trigger,
  },
  title: "Components/Navigation/Tabs",
});

export const Default = meta.story({
  args: {
    defaultValue: "tab-1",
    items: profileTabs(),
  },
});

export const Variants = meta.story({
  render: () => (
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
  ),
});

export const OrientationHorizontal = meta.story({
  args: {
    defaultValue: "tab-1",
    items: numberedTabs(),
  },
});

export const OrientationVertical = meta.story({
  args: {
    defaultValue: "tab-1",
    items: numberedTabs(),
    orientation: "vertical",
  },
});

export const Disabled = meta.story({
  args: {
    defaultValue: "tab-1",
    items: profileTabs().map((tab) => (tab.value === "tab-2" ? { ...tab, disabled: true } : tab)),
  },
});

export const WithIcons = meta.story({
  args: {
    defaultValue: "tab-1",
    items: [
      {
        content: <p className="p-4 text-center text-muted-foreground text-xs">Profile content</p>,
        label: (
          <>
            <UserIcon />
            Profile
          </>
        ),
        value: "tab-1",
      },
      {
        content: <p className="p-4 text-center text-muted-foreground text-xs">Settings content</p>,
        label: (
          <>
            <GearIcon />
            Settings
          </>
        ),
        value: "tab-2",
      },
      {
        content: <p className="p-4 text-center text-muted-foreground text-xs">Security content</p>,
        label: (
          <>
            <ShieldIcon />
            Security
          </>
        ),
        value: "tab-3",
      },
    ],
  },
});

export const Controlled = meta.story({
  render: () => {
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

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `Tabs.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => (
    <Tabs.Root defaultValue="tab-1">
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
    </Tabs.Root>
  ),
});

function profileTabs() {
  return [
    {
      content: <p className="p-4 text-center text-muted-foreground text-xs">Profile content</p>,
      label: "Profile",
      value: "tab-1",
    },
    {
      content: <p className="p-4 text-center text-muted-foreground text-xs">Settings content</p>,
      label: "Settings",
      value: "tab-2",
    },
    {
      content: <p className="p-4 text-center text-muted-foreground text-xs">Security content</p>,
      label: "Security",
      value: "tab-3",
    },
  ];
}

function numberedTabs() {
  return [
    {
      content: <p className="p-4 text-center text-muted-foreground text-xs">Content 1</p>,
      label: "Tab 1",
      value: "tab-1",
    },
    {
      content: <p className="p-4 text-center text-muted-foreground text-xs">Content 2</p>,
      label: "Tab 2",
      value: "tab-2",
    },
    {
      content: <p className="p-4 text-center text-muted-foreground text-xs">Content 3</p>,
      label: "Tab 3",
      value: "tab-3",
    },
  ];
}

function variantTabs(activeLabel: string) {
  return [
    {
      content: <p className="p-4 text-center text-muted-foreground text-xs">{activeLabel}</p>,
      label: "Profile",
      value: "tab-1",
    },
    {
      content: <p className="p-4 text-center text-muted-foreground text-xs">Content 2</p>,
      label: "Settings",
      value: "tab-2",
    },
    {
      content: <p className="p-4 text-center text-muted-foreground text-xs">Content 3</p>,
      label: "Security",
      value: "tab-3",
    },
  ];
}
