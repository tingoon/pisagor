<script lang="ts">
  import { Sortable } from "@pisagor/svelte";
  import { DotsSixVerticalIcon } from "phosphor-svelte";

  const labels: Record<string, string> = {
    a: "Design system tokens",
    b: "Component APIs",
    c: "Storybook coverage",
    d: "Accessibility checks",
  };

  let items = $state(["a", "b", "c", "d"]);
</script>

<Sortable
  {items}
  onValueChange={(next) => (items = next)}
  orientation="horizontal"
>
  {#each items as id (id)}
    <Sortable.Item class="min-w-36" value={id}>
      <Sortable.ItemContent>
        <Sortable.Handle>
          <DotsSixVerticalIcon />
        </Sortable.Handle>
        <span class="text-sm font-medium">{labels[id]}</span>
      </Sortable.ItemContent>
    </Sortable.Item>
  {/each}
</Sortable>
