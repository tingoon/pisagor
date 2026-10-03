<script lang="ts">
import { createTreeCollection, TreeView } from "@pisagor/svelte/tree-view";
import TreeNodeLink from "./tree-node-link.svelte";

const collection = createTreeCollection({
  rootNode: {
    children: [
      {
        children: [
          { href: "/docs", id: "docs/introduction", name: "Introduction" },
          { href: "/docs/components", id: "docs/components", name: "Components" },
        ],
        id: "docs",
        name: "Documentation",
      },
      {
        children: [
          {
            href: "https://example.com/source",
            id: "external/github",
            name: "GitHub Repository",
          },
        ],
        id: "external",
        name: "External Links",
      },
      { href: "/llms.txt", id: "llms.txt", name: "llms.txt" },
    ],
    id: "ROOT",
    name: "",
  },
});
</script>

<div>
  <TreeView {collection}>
    <TreeView.Label>Docs</TreeView.Label>
    <TreeView.Tree>
      {#each collection.rootNode.children ?? [] as node, index}
        <TreeNodeLink indexPath={[index]} {node} />
      {/each}
    </TreeView.Tree>
  </TreeView>
</div>
