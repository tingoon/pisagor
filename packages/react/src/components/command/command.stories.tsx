import { useFilter, useListCollection } from "@ark-ui/react";
import { ArrowBendDownLeftIcon, ArrowDownIcon, ArrowUpIcon } from "@phosphor-icons/react";
import { Button, Command, Kbd } from "@pisagor/react";
import { useState } from "react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Command,
  parameters: {
    docs: {
      aliases: ["command-palette"],
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
          "Offers a searchable command palette for jumping to actions, pages, or settings from the keyboard.",
      },
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    Content: Command.Content,
    Dialog: Command.Dialog,
    DialogContent: Command.DialogContent,
    DialogTrigger: Command.DialogTrigger,
    Empty: Command.Empty,
    Footer: Command.Footer,
    Group: Command.Group,
    GroupLabel: Command.GroupLabel,
    Input: Command.Input,
    Item: Command.Item,
    List: Command.List,
    Separator: Command.Separator,
    Shortcut: Command.Shortcut,
  },
  title: "Components/Overlay/Command",
});

export const Default = meta.story({
  render: () => {
    const initialItems = [
      { group: "Suggestions", label: "Linear", shortcut: "⌘L", value: "linear" },
      { group: "Suggestions", label: "Figma", shortcut: "⌘F", value: "figma" },
      { group: "Suggestions", label: "Slack", shortcut: "⌘S", value: "slack" },
      { group: "Suggestions", label: "YouTube", shortcut: "⌘Y", value: "youtube" },
      { group: "Suggestions", label: "Raycast", shortcut: "⌘R", value: "raycast" },
      { group: "Settings", label: "Settings", shortcut: "⌘,", value: "settings" },
      { group: "Settings", label: "Help", shortcut: "⌘?", value: "help" },
      { group: "Settings", label: "About", shortcut: "⌘I", value: "about" },
      { group: "Settings", label: "Feedback", shortcut: "⌘F", value: "feedback" },
      { group: "Settings", label: "Support", shortcut: "⌘S", value: "support" },
      { group: "Settings", label: "Updates", shortcut: "⌘U", value: "updates" },
      { group: "Settings", label: "Logout", shortcut: "⌘L", value: "logout" },
      { group: "Settings", label: "Sign out", shortcut: "⌘O", value: "sign out" },
      { group: "Settings", label: "Sign in", shortcut: "⌘I", value: "sign in" },
    ];
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      groupBy: (item) => item.group,
      initialItems,
    });

    return (
      <Command collection={collection} onInputValueChange={({ inputValue }) => filter(inputValue)}>
        <Command.Input />
        <Command.Content>
          <Command.Empty />
          <Command.List>
            {collection.group().map(([group, items], index) => (
              <Command.Group heading={group} key={group}>
                {items.map((item) => (
                  <Command.Item item={item} key={item.value}>
                    {item.label}
                    <Command.Shortcut>{item.shortcut}</Command.Shortcut>
                  </Command.Item>
                ))}
                {index < collection.group().length - 1 && <Command.Separator />}
              </Command.Group>
            ))}
          </Command.List>
        </Command.Content>
      </Command>
    );
  },
});

export const Scrollable = meta.story({
  render: () => {
    const initialItems = [
      { group: "Frameworks", label: "Angular", value: "angular" },
      { group: "Frameworks", label: "Astro", value: "astro" },
      { group: "Frameworks", label: "Ember", value: "ember" },
      { group: "Frameworks", label: "Gatsby", value: "gatsby" },
      { group: "Frameworks", label: "Next.js", value: "nextjs" },
      { group: "Frameworks", label: "Nuxt.js", value: "nuxtjs" },
      { group: "Frameworks", label: "React", value: "react" },
      { group: "Frameworks", label: "Remix", value: "remix" },
      { group: "Frameworks", label: "Solid", value: "solid" },
      { group: "Frameworks", label: "Svelte", value: "svelte" },
      { group: "Frameworks", label: "Vue.js", value: "vuejs" },
      { group: "Libraries", label: "Alpine.js", value: "alpinejs" },
      { group: "Libraries", label: "jQuery", value: "jquery" },
      { group: "Libraries", label: "Lit", value: "lit" },
      { group: "Libraries", label: "Preact", value: "preact" },
      { group: "Libraries", label: "Qwik", value: "qwik" },
      { group: "Libraries", label: "Stencil", value: "stencil" },
      { group: "Meta-frameworks", label: "Blitz.js", value: "blitzjs" },
      { group: "Meta-frameworks", label: "Redwood", value: "redwood" },
      { group: "Meta-frameworks", label: "T3 Stack", value: "t3" },
      {
        group: "Meta-frameworks",
        label: "TanStack Start",
        value: "tanstack-start",
      },
      { group: "Meta-frameworks", label: "Wasp", value: "wasp" },
    ];
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      groupBy: (item) => item.group,
      initialItems,
    });

    return (
      <Command collection={collection} onInputValueChange={({ inputValue }) => filter(inputValue)}>
        <Command.Input placeholder="Search frameworks..." />
        <Command.Content>
          <Command.Empty />
          <Command.List>
            {collection.group().map(([group, items]) => (
              <Command.Group heading={group} key={group}>
                {items.map((item) => (
                  <Command.Item item={item} key={item.value}>
                    {item.label}
                  </Command.Item>
                ))}
              </Command.Group>
            ))}
          </Command.List>
        </Command.Content>
      </Command>
    );
  },
});

export const Shortcuts = meta.story({
  render: () => {
    const initialItems = [
      { label: "New file", shortcut: "⌘N", value: "new" },
      { label: "Save", shortcut: "⌘S", value: "save" },
      { label: "Copy", shortcut: "⌘C", value: "copy" },
      { label: "Paste", shortcut: "⌘V", value: "paste" },
      { label: "Undo", shortcut: "⌘Z", value: "undo" },
      { label: "Find", shortcut: "⌘F", value: "find" },
    ];
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      initialItems,
    });

    return (
      <Command collection={collection} onInputValueChange={({ inputValue }) => filter(inputValue)}>
        <Command.Input placeholder="Search..." />
        <Command.Content>
          <Command.Empty />
          <Command.List>
            {collection.items.map((item) => (
              <Command.Item item={item} key={item.value}>
                {item.label}
                <Command.Shortcut>{item.shortcut}</Command.Shortcut>
              </Command.Item>
            ))}
          </Command.List>
        </Command.Content>
      </Command>
    );
  },
});

export const WithDialog = meta.story({
  render: () => {
    const initialItems = [
      { group: "File", label: "New file", shortcut: "⌘N", value: "new" },
      { group: "File", label: "Save", shortcut: "⌘S", value: "save" },
      { group: "File", label: "Open", shortcut: "⌘O", value: "open" },
      { group: "Edit", label: "Undo", shortcut: "⌘Z", value: "undo" },
      { group: "Edit", label: "Redo", shortcut: "⌘Z", value: "redo" },
      { group: "Edit", label: "Cut", shortcut: "⌘X", value: "cut" },
      { group: "Edit", label: "Copy", shortcut: "⌘C", value: "copy" },
    ];
    const [open, setOpen] = useState(false);
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      groupBy: (item) => item.group,
      initialItems,
    });

    return (
      <Command.Dialog onOpenChange={({ open: o }) => setOpen(o)} open={open}>
        <Command.DialogTrigger asChild>
          <Button variant="outline">Open Command Palette</Button>
        </Command.DialogTrigger>
        <Command.DialogContent>
          <Command
            collection={collection}
            onInputValueChange={({ inputValue }) => filter(inputValue)}
            onValueChange={() => setOpen(false)}
          >
            <Command.Input placeholder="Search commands..." />
            <Command.Content>
              <Command.Empty>No results found. Try a different search.</Command.Empty>
              <Command.List>
                {collection.group().map(([group, items]) => (
                  <Command.Group heading={group} key={group}>
                    {items.map((item) => (
                      <Command.Item item={item} key={item.value}>
                        {item.label}
                        <Command.Shortcut>{item.shortcut}</Command.Shortcut>
                      </Command.Item>
                    ))}
                  </Command.Group>
                ))}
              </Command.List>
            </Command.Content>
            <Command.Footer>
              <div className="flex items-center gap-2">
                <Kbd variant="outline">
                  <ArrowBendDownLeftIcon className="size-3" />
                </Kbd>
                <span className="text-muted-foreground">To select</span>
              </div>
            </Command.Footer>
          </Command>
        </Command.DialogContent>
      </Command.Dialog>
    );
  },
});

export const Groups = meta.story({
  render: () => {
    const initialItems = [
      { group: "Fruit", label: "Apple", value: "apple" },
      { group: "Fruit", label: "Banana", value: "banana" },
      { group: "Fruit", label: "Cherry", value: "cherry" },
      { group: "Countries", label: "United States", value: "us" },
      { group: "Countries", label: "United Kingdom", value: "uk" },
      { group: "Countries", label: "Germany", value: "de" },
    ];
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      groupBy: (item) => item.group,
      initialItems,
    });

    return (
      <Command collection={collection} onInputValueChange={({ inputValue }) => filter(inputValue)}>
        <Command.Input placeholder="Search..." />
        <Command.Content>
          <Command.Empty />
          <Command.List>
            {collection.group().map(([group, items], index) => (
              <>
                {index !== 0 && <Command.Separator />}
                <Command.Group heading={group} key={group}>
                  {items.map((item) => (
                    <Command.Item item={item} key={item.value}>
                      {item.label}
                    </Command.Item>
                  ))}
                </Command.Group>
              </>
            ))}
          </Command.List>
        </Command.Content>
      </Command>
    );
  },
});

export const WithFooter = meta.story({
  render: () => {
    const initialItems = [
      { group: "App", label: "Settings", shortcut: "⌘,", value: "settings" },
      {
        group: "App",
        label: "Keyboard Shortcuts",
        shortcut: "⌘K",
        value: "shortcuts",
      },
      { group: "App", label: "Help", shortcut: "⌘?", value: "help" },
    ];
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      groupBy: (item) => item.group,
      initialItems,
    });

    return (
      <Command collection={collection} onInputValueChange={({ inputValue }) => filter(inputValue)}>
        <Command.Input placeholder="Search..." />
        <Command.Content>
          <Command.Empty />
          <Command.List>
            {collection.group().map(([group, items]) => (
              <Command.Group heading={group} key={group}>
                {items.map((item) => (
                  <Command.Item item={item} key={item.value}>
                    {item.label}
                    <Command.Shortcut>{item.shortcut}</Command.Shortcut>
                  </Command.Item>
                ))}
              </Command.Group>
            ))}
          </Command.List>
        </Command.Content>
        <Command.Footer>
          <div className="flex items-center gap-2">
            <Kbd variant="outline">
              <ArrowBendDownLeftIcon className="size-3" />
            </Kbd>
            <span>Select</span>
          </div>
          <div className="flex items-center gap-2">
            <Kbd variant="outline">
              <ArrowUpIcon className="size-3" />
            </Kbd>
            <Kbd variant="outline">
              <ArrowDownIcon className="size-3" />
            </Kbd>
            <span>Navigate</span>
          </div>
        </Command.Footer>
      </Command>
    );
  },
});
