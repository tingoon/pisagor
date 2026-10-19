<script lang="ts">
  import { TreeView } from "@pisagor/svelte";
  import { StarIcon } from "phosphor-svelte";
  import { createDemoCollection } from "./helpers";

  const collection = createDemoCollection();
</script>

<div>
  <TreeView {collection} itemIcon={StarIcon} />
</div>
