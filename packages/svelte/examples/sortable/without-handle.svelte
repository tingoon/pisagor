<script module lang="ts">
  import source from "./without-handle.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Sortable } from "@pisagor/svelte";

  const labels: Record<string, string> = {
    a: "Design system tokens",
    b: "Component APIs",
    c: "Storybook coverage",
    d: "Accessibility checks",
  };

  let items = $state(["a", "b", "c"]);
</script>

<Sortable {items} onValueChange={(next) => (items = next)}>
  {#each items as id (id)}
    <Sortable.Item value={id}>
      <Sortable.ItemContent>
        <span class="text-sm font-medium">{labels[id]}</span>
      </Sortable.ItemContent>
    </Sortable.Item>
  {/each}
</Sortable>
