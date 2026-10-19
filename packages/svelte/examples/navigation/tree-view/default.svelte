<script lang="ts">
  import { createTreeCollection, TreeView } from "@pisagor/svelte";

  const collection = createTreeCollection({
    rootNode: {
      children: [
        { id: "a", name: "A" },
        { id: "b", name: "B" },
      ],
      id: "ROOT",
      name: "",
    },
  });
</script>

<TreeView {collection} label="Files" />
