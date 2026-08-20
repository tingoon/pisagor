import { PhBell, PhGear, PhHouse, PhMagnifyingGlass, PhUser } from "@phosphor-icons/vue";
import { BottomNavigation, ScrollArea } from "@pisagor/vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: BottomNavigation,
  parameters: {
    docs: {
      description: {
        component: "Fixed bottom bar for switching between primary app sections on mobile.",
      },
    },
    metadata: {
      aliases: ["tab-bar"],
      api: "compound",
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    Item: BottomNavigation.Item,
    ItemIcon: BottomNavigation.ItemIcon,
    ItemLabel: BottomNavigation.ItemLabel,
    List: BottomNavigation.List,
    Root: BottomNavigation.Root,
  },
  title: "Components/Navigation/Bottom Navigation",
});

export const Default = meta.story({
  render: () => ({
    components: { BottomNavigation, PhGear, PhHouse, PhUser },
    template: `
      <BottomNavigation class="fixed inset-x-0 bottom-0 border-t" default-value="home">
        <BottomNavigation.List aria-label="Main">
          <BottomNavigation.Item value="home">
            <BottomNavigation.ItemIcon><PhHouse /></BottomNavigation.ItemIcon>
            <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
          </BottomNavigation.Item>
          <BottomNavigation.Item value="profile">
            <BottomNavigation.ItemIcon><PhUser /></BottomNavigation.ItemIcon>
            <BottomNavigation.ItemLabel>Profile</BottomNavigation.ItemLabel>
          </BottomNavigation.Item>
          <BottomNavigation.Item value="settings">
            <BottomNavigation.ItemIcon><PhGear /></BottomNavigation.ItemIcon>
            <BottomNavigation.ItemLabel>Settings</BottomNavigation.ItemLabel>
          </BottomNavigation.Item>
        </BottomNavigation.List>
      </BottomNavigation>
    `,
  }),
});

export const IconOnly = meta.story({
  render: () => ({
    components: { BottomNavigation, PhBell, PhHouse, PhMagnifyingGlass, PhUser, ScrollArea },
    template: `
      <div class="flex h-72 flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5">
        <ScrollArea>
          <div class="h-96" />
          <BottomNavigation default-value="home">
            <BottomNavigation.List class="absolute">
              <BottomNavigation.Item aria-label="Home" value="home">
                <BottomNavigation.ItemIcon><PhHouse /></BottomNavigation.ItemIcon>
              </BottomNavigation.Item>
              <BottomNavigation.Item aria-label="Search" value="search">
                <BottomNavigation.ItemIcon><PhMagnifyingGlass /></BottomNavigation.ItemIcon>
              </BottomNavigation.Item>
              <BottomNavigation.Item aria-label="News" value="news">
                <BottomNavigation.ItemIcon><PhBell /></BottomNavigation.ItemIcon>
              </BottomNavigation.Item>
              <BottomNavigation.Item aria-label="Profile" value="profile">
                <BottomNavigation.ItemIcon><PhUser /></BottomNavigation.ItemIcon>
              </BottomNavigation.Item>
            </BottomNavigation.List>
          </BottomNavigation>
        </ScrollArea>
      </div>
    `,
  }),
});

export const WithLinks = meta.story({
  render: () => ({
    components: { BottomNavigation, PhBell, PhHouse, PhMagnifyingGlass, PhUser, ScrollArea },
    template: `
      <div class="flex h-72 flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5">
        <ScrollArea>
          <div class="h-96" />
          <BottomNavigation default-value="/docs">
            <BottomNavigation.List class="absolute">
              <BottomNavigation.Item as-child value="/">
                <a href="https://example.com/">
                  <BottomNavigation.ItemIcon><PhHouse /></BottomNavigation.ItemIcon>
                  <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
                </a>
              </BottomNavigation.Item>
              <BottomNavigation.Item as-child value="/docs">
                <a href="https://example.com/search">
                  <BottomNavigation.ItemIcon><PhMagnifyingGlass /></BottomNavigation.ItemIcon>
                  <BottomNavigation.ItemLabel>Search</BottomNavigation.ItemLabel>
                </a>
              </BottomNavigation.Item>
              <BottomNavigation.Item as-child value="/docs/components">
                <a href="https://example.com/news">
                  <BottomNavigation.ItemIcon><PhBell /></BottomNavigation.ItemIcon>
                  <BottomNavigation.ItemLabel>News</BottomNavigation.ItemLabel>
                </a>
              </BottomNavigation.Item>
              <BottomNavigation.Item as-child value="/docs/components">
                <a href="https://example.com/profile">
                  <BottomNavigation.ItemIcon><PhUser /></BottomNavigation.ItemIcon>
                  <BottomNavigation.ItemLabel>Profile</BottomNavigation.ItemLabel>
                </a>
              </BottomNavigation.Item>
            </BottomNavigation.List>
          </BottomNavigation>
        </ScrollArea>
      </div>
    `,
  }),
});
