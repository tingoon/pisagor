import { useListCollection } from "@ark-ui/vue/collection";
import { useFilter } from "@ark-ui/vue/locale";
import { PhArrowBendDownLeft, PhArrowDown, PhArrowUp } from "@phosphor-icons/vue";
import { Button, Command, Kbd } from "@pisagor/vue";
import { h, ref } from "vue";
import preview from "#/storybook/preview";

type ArkPart = Parameters<typeof h>[0];

const meta = preview.meta({
  component: Command,
  parameters: {
    docs: {
      description: {
        component:
          "Offers a searchable command palette for jumping to actions, pages, or settings from the keyboard.",
      },
    },
    metadata: {
      aliases: ["command-palette"],
      api: "compound",
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
  render: () => ({
    setup() {
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
      const { contains } = useFilter({ sensitivity: "base" }).value;
      const { collection, filter } = useListCollection({
        filter: contains,
        groupBy: (item) => item.group,
        initialItems,
      });

      return () =>
        h(
          Command,
          {
            collection: collection.value,
            onInputValueChange: (details: { inputValue: string }) => filter(details.inputValue),
          },
          () => [
            h(Command.Input),
            h(Command.Content, null, () => [
              h(Command.Empty),
              h(Command.List, null, () =>
                collection.value
                  .group()
                  .map(([group, items], index) => [
                    h(Command.Group, { heading: group, key: group }, () =>
                      items.map((item) =>
                        h(Command.Item as ArkPart, { item, key: item.value }, () => [
                          item.label,
                          h(Command.Shortcut, null, () => item.shortcut),
                        ]),
                      ),
                    ),
                    index < collection.value.group().length - 1 ? h(Command.Separator) : null,
                  ]),
              ),
            ]),
          ],
        );
    },
  }),
});

export const Scrollable = meta.story({
  render: () => ({
    setup() {
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
      const { contains } = useFilter({ sensitivity: "base" }).value;
      const { collection, filter } = useListCollection({
        filter: contains,
        groupBy: (item) => item.group,
        initialItems,
      });

      return () =>
        h(
          Command,
          {
            collection: collection.value,
            onInputValueChange: (details: { inputValue: string }) => filter(details.inputValue),
          },
          () => [
            h(Command.Input, { placeholder: "Search frameworks..." }),
            h(Command.Content, null, () => [
              h(Command.Empty),
              h(Command.List, null, () =>
                collection.value
                  .group()
                  .map(([group, items]) =>
                    h(Command.Group, { heading: group, key: group }, () =>
                      items.map((item) =>
                        h(Command.Item as ArkPart, { item, key: item.value }, () => item.label),
                      ),
                    ),
                  ),
              ),
            ]),
          ],
        );
    },
  }),
});

export const Shortcuts = meta.story({
  render: () => ({
    setup() {
      const initialItems = [
        { label: "New file", shortcut: "⌘N", value: "new" },
        { label: "Save", shortcut: "⌘S", value: "save" },
        { label: "Copy", shortcut: "⌘C", value: "copy" },
        { label: "Paste", shortcut: "⌘V", value: "paste" },
        { label: "Undo", shortcut: "⌘Z", value: "undo" },
        { label: "Find", shortcut: "⌘F", value: "find" },
      ];
      const { contains } = useFilter({ sensitivity: "base" }).value;
      const { collection, filter } = useListCollection({
        filter: contains,
        initialItems,
      });

      return () =>
        h(
          Command,
          {
            collection: collection.value,
            onInputValueChange: (details: { inputValue: string }) => filter(details.inputValue),
          },
          () => [
            h(Command.Input, { placeholder: "Search..." }),
            h(Command.Content, null, () => [
              h(Command.Empty),
              h(Command.List, null, () =>
                collection.value.items.map((item) =>
                  h(Command.Item as ArkPart, { item, key: item.value }, () => [
                    item.label,
                    h(Command.Shortcut, null, () => item.shortcut),
                  ]),
                ),
              ),
            ]),
          ],
        );
    },
  }),
});

export const WithDialog = meta.story({
  render: () => ({
    setup() {
      const initialItems = [
        { group: "File", label: "New file", shortcut: "⌘N", value: "new" },
        { group: "File", label: "Save", shortcut: "⌘S", value: "save" },
        { group: "File", label: "Open", shortcut: "⌘O", value: "open" },
        { group: "Edit", label: "Undo", shortcut: "⌘Z", value: "undo" },
        { group: "Edit", label: "Redo", shortcut: "⌘Z", value: "redo" },
        { group: "Edit", label: "Cut", shortcut: "⌘X", value: "cut" },
        { group: "Edit", label: "Copy", shortcut: "⌘C", value: "copy" },
      ];
      const open = ref(false);
      const { contains } = useFilter({ sensitivity: "base" }).value;
      const { collection, filter } = useListCollection({
        filter: contains,
        groupBy: (item) => item.group,
        initialItems,
      });

      return () =>
        h(
          Command.Dialog,
          {
            onOpenChange: (details: { open: boolean }) => {
              open.value = details.open;
            },
            open: open.value,
          },
          () => [
            h(Command.DialogTrigger, { asChild: true }, () =>
              h(Button, { variant: "outline" }, () => "Open Command Palette"),
            ),
            h(Command.DialogContent, null, () =>
              h(
                Command,
                {
                  collection: collection.value,
                  onInputValueChange: (details: { inputValue: string }) =>
                    filter(details.inputValue),
                  onValueChange: () => {
                    open.value = false;
                  },
                },
                () => [
                  h(Command.Input, { placeholder: "Search commands..." }),
                  h(Command.Content, null, () => [
                    h(Command.Empty, null, () => "No results found. Try a different search."),
                    h(Command.List, null, () =>
                      collection.value
                        .group()
                        .map(([group, items]) =>
                          h(Command.Group, { heading: group, key: group }, () =>
                            items.map((item) =>
                              h(Command.Item as ArkPart, { item, key: item.value }, () => [
                                item.label,
                                h(Command.Shortcut, null, () => item.shortcut),
                              ]),
                            ),
                          ),
                        ),
                    ),
                  ]),
                  h(Command.Footer, null, () =>
                    h("div", { class: "flex items-center gap-2" }, [
                      h(Kbd, { variant: "outline" }, () =>
                        h(PhArrowBendDownLeft, { class: "size-3" }),
                      ),
                      h("span", { class: "text-muted-foreground" }, "To select"),
                    ]),
                  ),
                ],
              ),
            ),
          ],
        );
    },
  }),
});

export const Groups = meta.story({
  render: () => ({
    setup() {
      const initialItems = [
        { group: "Fruit", label: "Apple", value: "apple" },
        { group: "Fruit", label: "Banana", value: "banana" },
        { group: "Fruit", label: "Cherry", value: "cherry" },
        { group: "Countries", label: "United States", value: "us" },
        { group: "Countries", label: "United Kingdom", value: "uk" },
        { group: "Countries", label: "Germany", value: "de" },
      ];
      const { contains } = useFilter({ sensitivity: "base" }).value;
      const { collection, filter } = useListCollection({
        filter: contains,
        groupBy: (item) => item.group,
        initialItems,
      });

      return () =>
        h(
          Command,
          {
            collection: collection.value,
            onInputValueChange: (details: { inputValue: string }) => filter(details.inputValue),
          },
          () => [
            h(Command.Input, { placeholder: "Search..." }),
            h(Command.Content, null, () => [
              h(Command.Empty),
              h(Command.List, null, () =>
                collection.value
                  .group()
                  .map(([group, items], index) => [
                    index !== 0 ? h(Command.Separator, { key: `${group}-separator` }) : null,
                    h(Command.Group, { heading: group, key: group }, () =>
                      items.map((item) =>
                        h(Command.Item as ArkPart, { item, key: item.value }, () => item.label),
                      ),
                    ),
                  ]),
              ),
            ]),
          ],
        );
    },
  }),
});

export const WithFooter = meta.story({
  render: () => ({
    setup() {
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
      const { contains } = useFilter({ sensitivity: "base" }).value;
      const { collection, filter } = useListCollection({
        filter: contains,
        groupBy: (item) => item.group,
        initialItems,
      });

      return () =>
        h(
          Command,
          {
            collection: collection.value,
            onInputValueChange: (details: { inputValue: string }) => filter(details.inputValue),
          },
          () => [
            h(Command.Input, { placeholder: "Search..." }),
            h(Command.Content, null, () => [
              h(Command.Empty),
              h(Command.List, null, () =>
                collection.value
                  .group()
                  .map(([group, items]) =>
                    h(Command.Group, { heading: group, key: group }, () =>
                      items.map((item) =>
                        h(Command.Item as ArkPart, { item, key: item.value }, () => [
                          item.label,
                          h(Command.Shortcut, null, () => item.shortcut),
                        ]),
                      ),
                    ),
                  ),
              ),
            ]),
            h(Command.Footer, null, () => [
              h("div", { class: "flex items-center gap-2" }, [
                h(Kbd, { variant: "outline" }, () => h(PhArrowBendDownLeft, { class: "size-3" })),
                h("span", null, "Select"),
              ]),
              h("div", { class: "flex items-center gap-2" }, [
                h(Kbd, { variant: "outline" }, () => h(PhArrowUp, { class: "size-3" })),
                h(Kbd, { variant: "outline" }, () => h(PhArrowDown, { class: "size-3" })),
                h("span", null, "Navigate"),
              ]),
            ]),
          ],
        );
    },
  }),
});
