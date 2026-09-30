<script lang="ts">
import { Sortable } from "../../../../../src/components/sortable/index";

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
