<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Command } from "@pisagor/svelte";

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
  { group: "Meta-frameworks", label: "TanStack Start", value: "tanstack-start" },
  { group: "Meta-frameworks", label: "Wasp", value: "wasp" },
];
const { contains } = useFilter({ sensitivity: "base" });
const { collection, filter } = useListCollection({
  filter: contains,
  groupBy: (item) => item.group,
  initialItems,
});
</script>

<Command {collection} onInputValueChange={({ inputValue }) => filter(inputValue)}>
  <Command.Input placeholder="Search frameworks..." />
  <Command.Content>
    <Command.Empty />
    <Command.List>
      {#each collection.group() as [group, items]}
        <Command.ItemGroup heading={group}>
          {#each items as item}
            <Command.Item {item}>{item.label}</Command.Item>
          {/each}
        </Command.ItemGroup>
      {/each}
    </Command.List>
  </Command.Content>
</Command>
