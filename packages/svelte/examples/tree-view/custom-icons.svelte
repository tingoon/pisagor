<script lang="ts">
import {
  createFileIcons,
  createTreeCollection,
  TreeView,
} from "@pisagor/svelte";
import FileCodeIcon from "phosphor-svelte/lib/FileCodeIcon";
import FileJsIcon from "phosphor-svelte/lib/FileJsIcon";
import FileTextIcon from "phosphor-svelte/lib/FileTextIcon";
import TreeNode from "./tree-node.svelte";

const fileIcons = createFileIcons({
  ".json": FileJsIcon,
  ".md": FileTextIcon,
  ".tsx": FileCodeIcon,
});

const collection = createTreeCollection({
  rootNode: {
    children: [
      {
        children: [
          { id: "app/page.tsx", name: "page.tsx" },
          { id: "app/layout.tsx", name: "layout.tsx" },
        ],
        id: "app",
        name: "app",
      },
      {
        children: [
          { id: "components/button.tsx", name: "button.tsx" },
          { id: "components/input.tsx", name: "input.tsx" },
        ],
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
  <TreeView {collection} {fileIcons}>
    <TreeView.Tree>
      {#each collection.rootNode.children ?? [] as node, index}
        <TreeNode indexPath={[index]} {node} />
      {/each}
    </TreeView.Tree>
  </TreeView>
</div>
