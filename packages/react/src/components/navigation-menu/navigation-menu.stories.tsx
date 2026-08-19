import { NavigationMenu } from "@pisagor/react/navigation-menu";
import preview from "#/react/preview";

const meta = preview.meta({
  component: NavigationMenu,
  parameters: {
    docs: {
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
          "Displays a horizontal set of navigation links so users can move between top-level sections.",
      },
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    Item: NavigationMenu.Item,
    Link: NavigationMenu.Link,
    List: NavigationMenu.List,
  },
  title: "Components/Navigation/Navigation Menu",
});

export const Default = meta.story({
  render: () => (
    <NavigationMenu aria-label="Main">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link active href="#overview">
            Overview
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#projects">Projects</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#analytics">Analytics</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#settings">Settings</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu>
  ),
});

export const Wrapping = meta.story({
  render: () => (
    <div className="max-w-xs">
      <NavigationMenu aria-label="Section">
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Link active href="#all">
              All
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="#design">Design</NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="#development">Development</NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="#operations">Operations</NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="#support">Support</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu>
    </div>
  ),
});
