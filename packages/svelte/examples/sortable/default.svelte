<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Sortable } from "@pisagor/svelte";

  let items = $state(["one", "two", "three"]);
</script>

<Sortable {items} onValueChange={(next) => (items = next)}>
  {#each items as id (id)}
    <Sortable.Item value={id}>
      <Sortable.Handle />
      <Sortable.ItemContent>{id}</Sortable.ItemContent>
    </Sortable.Item>
  {/each}
</Sortable>
