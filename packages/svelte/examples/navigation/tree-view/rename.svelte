<script lang="ts">
  import { TreeView } from "@pisagor/svelte";
  import { createDemoCollection } from "./helpers";

  let collection = $state(createDemoCollection());

  function onRenameComplete(details: { indexPath: number[]; label: string }) {
    const node = collection.at(details.indexPath);
    if (!node) return;
    collection = collection.replace(details.indexPath, {
      ...node,
      name: details.label,
    });
  }
</script>

<div>
  <TreeView canRename={() => true} {collection} {onRenameComplete} />
</div>
