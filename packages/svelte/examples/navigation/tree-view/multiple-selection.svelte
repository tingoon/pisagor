<script lang="ts">
  import { TreeView } from "@pisagor/svelte";
  import { createDemoCollection } from "./helpers";

  const collection = createDemoCollection();
</script>

<div>
  <TreeView {collection} selectionMode="multiple" />
</div>
