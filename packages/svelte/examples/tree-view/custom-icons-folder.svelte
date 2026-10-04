<script lang="ts">
import { createTreeCollection, TreeView } from "@pisagor/svelte";
import PackageIcon from "phosphor-svelte/lib/PackageIcon";
import TreeNodeFolder from "./tree-node-folder.svelte";

const collection = createTreeCollection({
  rootNode: {
    children: [
      {
        children: [
          { id: "app/page.tsx", name: "page.tsx" },
          { id: "app/layout.tsx", name: "layout.tsx" },
        ],
        expandedIcon: PackageIcon,
        icon: PackageIcon,
        id: "app",
        name: "app",
      },
      {
        children: [
          { id: "components/button.tsx", name: "button.tsx" },
          { id: "components/input.tsx", name: "input.tsx" },
        ],
        expandedIcon: null,
        icon: null,
        id: "components",
        name: "components",
      },
      { id: "package.json", name: "package.json" },
      { id: "readme.md", name: "README.md" },
    ],
    id: "ROOT",
    name: "",
  },
});
</script>

<div>
  <TreeView {collection}>
    <TreeView.Tree>
      {#each collection.rootNode.children ?? [] as node, index}
        <TreeNodeFolder indexPath={[index]} {node} />
      {/each}
    </TreeView.Tree>
  </TreeView>
</div>
