import { useListCollection } from "@ark-ui/vue/collection";
import { useFilter } from "@ark-ui/vue/locale";
import { defineComponent, h } from "vue";
import type { ArkPart } from "../../../internal/types";
import { Command } from "..";

export default defineComponent({
  name: "Scrollable",
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
                  h(Command.ItemGroup, { heading: group, key: group }, () =>
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
});
