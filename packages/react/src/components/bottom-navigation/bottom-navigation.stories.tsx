import { BellIcon, HouseIcon, MagnifyingGlassIcon, UserIcon } from "@phosphor-icons/react";
import { BottomNavigation, ScrollArea } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: BottomNavigation,
  parameters: {
    docs: {
      aliases: ["tab-bar"],
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
          "Gives mobile users quick access to the main sections of an app from a bar fixed to the bottom of the screen.",
      },
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    Item: BottomNavigation.Item,
    ItemIcon: BottomNavigation.ItemIcon,
    ItemLabel: BottomNavigation.ItemLabel,
    List: BottomNavigation.List,
  },
  title: "Components/Navigation/Bottom Navigation",
});

export const Default = meta.story({
  render: () => (
    <div className="flex h-72 flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5">
      <ScrollArea>
        <div className="h-96" />
        <BottomNavigation defaultValue="home">
          <BottomNavigation.List className="absolute">
            <BottomNavigation.Item value="home">
              <BottomNavigation.ItemIcon>
                <HouseIcon />
              </BottomNavigation.ItemIcon>
              <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
            </BottomNavigation.Item>
            <BottomNavigation.Item value="search">
              <BottomNavigation.ItemIcon>
                <MagnifyingGlassIcon />
              </BottomNavigation.ItemIcon>
              <BottomNavigation.ItemLabel>Search</BottomNavigation.ItemLabel>
            </BottomNavigation.Item>
            <BottomNavigation.Item value="news">
              <BottomNavigation.ItemIcon>
                <BellIcon />
              </BottomNavigation.ItemIcon>
              <BottomNavigation.ItemLabel>News</BottomNavigation.ItemLabel>
            </BottomNavigation.Item>
            <BottomNavigation.Item value="profile">
              <BottomNavigation.ItemIcon>
                <UserIcon />
              </BottomNavigation.ItemIcon>
              <BottomNavigation.ItemLabel>Profile</BottomNavigation.ItemLabel>
            </BottomNavigation.Item>
          </BottomNavigation.List>
        </BottomNavigation>
      </ScrollArea>
    </div>
  ),
});

export const IconOnly = meta.story({
  render: () => (
    <div className="flex h-72 flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5">
      <ScrollArea>
        <div className="h-96" />
        <BottomNavigation defaultValue="home">
          <BottomNavigation.List className="absolute">
            <BottomNavigation.Item aria-label="Home" value="home">
              <BottomNavigation.ItemIcon>
                <HouseIcon />
              </BottomNavigation.ItemIcon>
            </BottomNavigation.Item>
            <BottomNavigation.Item aria-label="Search" value="search">
              <BottomNavigation.ItemIcon>
                <MagnifyingGlassIcon />
              </BottomNavigation.ItemIcon>
            </BottomNavigation.Item>
            <BottomNavigation.Item aria-label="News" value="news">
              <BottomNavigation.ItemIcon>
                <BellIcon />
              </BottomNavigation.ItemIcon>
            </BottomNavigation.Item>
            <BottomNavigation.Item aria-label="Profile" value="profile">
              <BottomNavigation.ItemIcon>
                <UserIcon />
              </BottomNavigation.ItemIcon>
            </BottomNavigation.Item>
          </BottomNavigation.List>
        </BottomNavigation>
      </ScrollArea>
    </div>
  ),
});

export const WithLinks = meta.story({
  render: () => (
    <div className="flex h-72 flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5">
      <ScrollArea>
        <div className="h-96" />
        <BottomNavigation defaultValue="/docs">
          <BottomNavigation.List className="absolute">
            <BottomNavigation.Item asChild value="/">
              <a href="https://example.com/">
                <BottomNavigation.ItemIcon>
                  <HouseIcon />
                </BottomNavigation.ItemIcon>
                <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
              </a>
            </BottomNavigation.Item>
            <BottomNavigation.Item asChild value="/docs">
              <a href="https://example.com/search">
                <BottomNavigation.ItemIcon>
                  <MagnifyingGlassIcon />
                </BottomNavigation.ItemIcon>
                <BottomNavigation.ItemLabel>Search</BottomNavigation.ItemLabel>
              </a>
            </BottomNavigation.Item>
            <BottomNavigation.Item asChild value="/docs/components">
              <a href="https://example.com/news">
                <BottomNavigation.ItemIcon>
                  <BellIcon />
                </BottomNavigation.ItemIcon>
                <BottomNavigation.ItemLabel>News</BottomNavigation.ItemLabel>
              </a>
            </BottomNavigation.Item>
            <BottomNavigation.Item asChild value="/docs/components">
              <a href="https://example.com/profile">
                <BottomNavigation.ItemIcon>
                  <UserIcon />
                </BottomNavigation.ItemIcon>
                <BottomNavigation.ItemLabel>Profile</BottomNavigation.ItemLabel>
              </a>
            </BottomNavigation.Item>
          </BottomNavigation.List>
        </BottomNavigation>
      </ScrollArea>
    </div>
  ),
});
