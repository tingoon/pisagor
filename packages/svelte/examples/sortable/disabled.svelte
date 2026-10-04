<script lang="ts">
import { Sortable } from "@pisagor/svelte/sortable";

const labels: Record<string, string> = {
  a: "Design system tokens",
  b: "Component APIs",
  c: "Storybook coverage",
  d: "Accessibility checks",
};

let items = $state(["a", "b", "c"]);
</script>

<Sortable disabled {items} onValueChange={(next) => (items = next)}>
  {#each items as id (id)}
    <Sortable.Item value={id}>
      <Sortable.ItemContent>
        <Sortable.Handle />
        <span class="font-medium text-sm">{labels[id]}</span>
      </Sortable.ItemContent>
    </Sortable.Item>
  {/each}
</Sortable>
