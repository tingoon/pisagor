<script lang="ts">
import source from "./ide-layout.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PhX } from "@phosphor-icons/vue";
import { cn } from "@pisagor/utils";
import type { TreeNodeType } from "@pisagor/vue";
import { Button, createTreeCollection, Tabs, TreeView } from "@pisagor/vue";
import { ref } from "vue";
import { ideLayoutBlock } from "#/recipes/blocks/editors";

defineOptions({ inheritAttrs: false });

const props = defineProps<{ class?: unknown }>();

const styles = ideLayoutBlock();

const activeItem = ref("");

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

function handleSelectNode(details: { selectedNodes?: TreeNodeType[] }) {
  const selectedNodes = details.selectedNodes ?? [];
  // Folders (branches) don't open a tab.
  const isFolder = selectedNodes.every((node) => node.children?.length ?? 0);
  if (isFolder) return;
  activeItem.value = selectedNodes[0]?.name.split("/").at(-1) ?? "";
}
</script>

<template>
  <div :class="cn(styles.root(), props.class)">
    <div :class="styles.sidebar()">
      <TreeView :collection="collection" @selection-change="handleSelectNode">
        <TreeView.Tree>
          <TreeView.NodeProvider
            v-for="(node, index) in collection.rootNode.children ?? []"
            :key="node.id"
            :index-path="[index]"
            :node="node"
          >
            <TreeView.Branch v-if="node.children">
              <TreeView.BranchControl>{{ node.name }}</TreeView.BranchControl>
              <TreeView.BranchContent>
                <TreeView.NodeProvider
                  v-for="(child, childIndex) in node.children"
                  :key="child.id"
                  :index-path="[index, childIndex]"
                  :node="child"
                >
                  <TreeView.Item>
                    <TreeView.ItemText>{{ child.name }}</TreeView.ItemText>
                  </TreeView.Item>
                </TreeView.NodeProvider>
              </TreeView.BranchContent>
            </TreeView.Branch>
            <TreeView.Item v-else>
              <TreeView.ItemText>{{ node.name }}</TreeView.ItemText>
            </TreeView.Item>
          </TreeView.NodeProvider>
        </TreeView.Tree>
      </TreeView>
    </div>
    <div :class="styles.pane()">
      <Tabs.Root v-if="activeItem" :class="styles.tabs()" :value="activeItem">
        <Tabs.List variant="underline">
          <Tabs.Trigger :value="activeItem">
            <span :class="styles.tabLabel()">
              <span>{{ activeItem }}</span>
              <Button
                aria-label="Close"
                size="icon-xs"
                type="button"
                variant="ghost"
                @click.stop="activeItem = ''"
              >
                <PhX aria-hidden="true" />
              </Button>
            </span>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content :class="styles.content()" :value="activeItem">
          // File content
        </Tabs.Content>
      </Tabs.Root>
    </div>
  </div>
</template>
